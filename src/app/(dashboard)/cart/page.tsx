"use client";

import { RootState } from "@/redux/features/store";
import Image from "next/image";
import Link from "next/link";
import { RxCross2, RxMinus, RxPlus } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  removeFromCart,
  updateQuantity,
} from "../../../redux/features/cart/cartSlice";

const Cart = () => {
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

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
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
    <div className="justify-center flex-1 max-w-4xl mx-auto">
      <div className="p-8 bg-white rounded">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
            <div className="flex justify-between items-center mb-6 -mx-4 md:mb-8">
              <h2 className="font-bold text-sm md:text-base text-secondary">
                Product name
              </h2>

              <h2 className="font-bold text-sm md:text-base text-secondary">
                Price
              </h2>

              <h2 className="font-bold text-sm md:text-base text-secondary">
                Quantity
              </h2>

              <h2 className="font-bold text-sm md:text-base text-secondary">
                Subtotal
              </h2>
              <h2 className="font-bold text-sm md:text-base text-secondary">
                Action
              </h2>
            </div>
            <div className="py-4 mb-8 border-t border-b border-gray-200">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center mb-6 -mx-4 md:mb-8 "
                  >
                    <div className="flex items-center gap-2 w-[30%]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1200}
                        height={100}
                        className="object-cover size-8 md:w-[50px] md:h-[50px]"
                      />

                      <h2 className="font-bold text-xs md:text-base text-secondary">
                        {item.name}
                      </h2>
                    </div>

                    <div className="w-[20%]">
                      <p className="text-xs md:text-lg font-bold text-primary">
                        ${item.price}.00
                      </p>
                      <span className="text-xs text-gray-500 line-through">
                        ${item.price * 2}.00
                      </span>
                    </div>
                    <div className="w-[25%]">
                      <div className="border w-[80px] md:w-[100px] h-8 flex items-center justify-between">
                        <div className="border-r h-full px-1 flex items-center justify-center">
                          <RxMinus
                            onClick={() =>
                              handleQuantityDown(item.quantity - 1, item._id)
                            }
                          />
                        </div>
                        {item.quantity}
                        <div className="border-l h-full px-1 flex items-center justify-center">
                          <RxPlus
                            onClick={() =>
                              handleQuantityUp(item.quantity + 1, item._id)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <p className="text-sm md:text-lg font-bold text-primary">
                        ${item.price * item.quantity}.00
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-primary hover:text-white bg-primary/10 hover:bg-primary/50 hover p-1 rounded-full"
                    >
                      <RxCross2 className="text-xl" />
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-700">Apply Coupon</span>
              <input
                type="text"
                className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border 0 md:flex-none md:mr-6"
                placeholder="x304k45"
                disabled
              />
              <button
                disabled
                className="flex-1 inline-block px-8 py-4 font-semibold text-center text-gray-400 bg-gray-300 rounded-md md:flex-none"
              >
                Apply
              </button>
            </div>
          </div>
          <div className="w-full px-4 xl:w-4/12">
            <div className="p-6 border rounded border-primary bg-primary/10 md:p-8">
              <h2 className="mb-8 text-xl font-bold text-gray-700">
                Order Summary
              </h2>
              <div className="flex items-center justify-between pb-4 mb-4 ">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-xl font-bold text-gray-700">
                  ${total}.00
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
                <span className="text-gray-700">Shipping</span>
                <span className="text-xl font-semibold text-gray-700">
                  ${shippingCost}.00
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4">
                <span className="text-gray-700">Order Total</span>
                <span className="text-xl font-bold text-gray-700">
                  ${total + shippingCost}.00
                </span>
              </div>
              <h2 className="text-lg text-gray-500">We offer:</h2>
              <div className="flex items-center mb-4 gap-2">
                <a>
                  <Image
                    src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                    alt="Visa"
                    width={1200}
                    height={100}
                    className=" h-auto w-[40px]"
                  />
                </a>
                <a>
                  <Image
                    src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                    alt="MasterCard"
                    width={1200}
                    height={100}
                    className=" h-auto w-[40px]"
                  />
                </a>
                <a>
                  <Image
                    src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                    alt="PayPal"
                    width={1200}
                    height={100}
                    className=" h-auto w-[40px]"
                  />
                </a>
              </div>

              <Link href={"checkout"}>
                <button className="px-3 block w-full py-4 font-semibold text-sm text-center text-gray-100 uppercase bg-primary/80 rounded-md hover:bg-primary/100">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
