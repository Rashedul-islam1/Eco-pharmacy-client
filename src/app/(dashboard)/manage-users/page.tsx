"use client";
import Loader from "@/components/Common/Loader";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/store";
import {
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserRoleMutation,
} from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const AllUsers = () => {
  const [userRoleUpdate, { data }] = useUpdateUserRoleMutation();
  let role;
  const { data: users, isLoading: isUserLoading } =
    useGetAllUsersQuery(undefined);
  const { userEmail }: any = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );
  const { data: currentUser, isLoading } = useGetUserQuery(userEmail);
  if (isLoading) {
    return;
  }
  role = currentUser?.data?.role;
  if (isUserLoading) {
    return <Loader />;
  }

  const handleRoleAdmin = async (id: string) => {
    try {
      const res = await userRoleUpdate({ id, role: "admin" }).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = (user: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Hi!", user.name);
      }
    });
  };

  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Users</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-primary ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                user Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Role
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <div className="w-[100px]"> Make Admin</div>
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.data.map((user: any, i: any) => (
              <tr key={user._id} className="p-4 bg-slate-100 border-b">
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {i + 1}
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <div className="w-[150px]"> {user.name}</div>
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {user?.email}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  {user?.role}
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <button
                    onClick={() => handleRoleAdmin(user._id)}
                    disabled={user.role == "user"}
                    className={
                      user.role == "admin"
                        ? "text-xs px-3 py-[6px] font-medium  rounded-full bg-[#dfe2e0] text-gray-400 "
                        : "text-xs px-3 py-[6px] font-medium  rounded-full bg-[#1a415390] hover:bg-[#1a4153] text-white duration-300"
                    }
                  >
                    Admin
                  </button>
                </td>

                <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-xs px-3 py-[6px] font-medium  rounded-full bg-[#f0151590] hover:bg-[#f01515] duration-300 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
