"use client";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/features/store";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import { RxMinus, RxPlus } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const OrderCart = ({ open, setOpen }: any) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#79C044",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        dispatch(removeFromCart(id));
      }
    });
  };

  const handleQuantityChange = (
    _id: string,
    quantity: number,
    stockQuantity: number
  ) => {
    dispatch(updateQuantity({ _id, quantity, stockQuantity }));
  };

  const total =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5;
  const shippingCost = 5;

  const handleQuantityUp = (newQuantity: number, id: string) => {
    const item = cartItems.find((item) => item._id === id);
    if (item) {
      handleQuantityChange(id, newQuantity, item.stockQuantity);
    }
  };

  const handleQuantityDown = (newQuantity: number, id: string) => {
    const item = cartItems.find((item) => item._id === id);
    if (item) {
      handleQuantityChange(id, newQuantity, item.stockQuantity);
    }
  };

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* Use Dialog.Panel for overlay */}
              <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md font-sans">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-primary tracking-wide">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <FaTimes className="text-2xl text-gray-600" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((product) => (
                              <li key={product._id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={1200}
                                    height={100}
                                    className="w-full h-full object-center object-cover"
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-800">
                                      <h3 className="text-primary">
                                        {product.name}
                                      </h3>
                                      <p className="ml-4 text-primary">
                                        ${product.price * product.quantity}.00
                                      </p>
                                    </div>
                                  </div>

                                  <h3 className="text-sm">
                                    Stock: {product.stockQuantity}
                                  </h3>
                                  <div className="flex-1 flex items-start mt-3 justify-between text-sm">
                                    <div className="border w-[80px] md:w-[100px] h-8 flex items-center justify-between">
                                      <div className="border-r h-full px-1 flex items-center justify-center">
                                        <RxMinus
                                          onClick={() =>
                                            handleQuantityDown(
                                              product.quantity - 1,
                                              product._id
                                            )
                                          }
                                        />
                                      </div>
                                      {product.quantity}
                                      <div className="border-l h-full px-1 flex items-center justify-center">
                                        <RxPlus
                                          onClick={() =>
                                            handleQuantityUp(
                                              product.quantity + 1,
                                              product._id
                                            )
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          handleDelete(product._id)
                                        }
                                        className="font-medium tracking-wide text-primary/90 hover:text-teal-800"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-800">
                        <p>Shipping Cost</p>
                        <p>${shippingCost}.00</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-800">
                        <p>Subtotal</p>
                        <p>${total}.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          onClick={() => setOpen(false)}
                          href="/checkout"
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="text-teal-500 font-medium hover:text-teal-700"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default OrderCart;
