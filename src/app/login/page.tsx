"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setPasswordError("");

    const form = e.currentTarget;
    const userInfo = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await login(userInfo).unwrap();
      setLoading(true);
      if (res.success) {
        router.push("/");
        const user = verifyToken(res?.data?.accessToken) as TUser;
        dispatch(setUser({ user, token: res.data.accessToken }));
        toast.success("Successfully logged in");
        setLoading(true);
      }
    } catch (err: any) {
      setPasswordError(
        err?.data?.message ||
          "Login failed. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.06)",
        }}
        className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-900"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl text-gray-800 font-bold">Log In</h1>
          <p className="text-xl font-semibold text-gray-600">
            Welcome to <span className="text-primary">EcoVault</span>
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              />
            </div>
            <div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
                />
                <span
                  className="absolute top-[14px] right-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(255,204,0,0.8)] py-3 text-white"
              disabled={loading}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-[#D1A054] text-gray-400">
            Forgot password?
          </button>
        </div>

        <p className="px-6 mt-3 text-sm text-center text-gray-400">
          Don’t have an account?
          <Link
            href="/sign-up"
            className="hover:underline font-semibold hover:text-primary  text-primary outline-primary"
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
