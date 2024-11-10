"use client";
import Loader from "@/components/Common/Loader";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetUserOrderQuery } from "@/redux/features/order/orderApi";
import { RootState } from "@/redux/features/store";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState<string>("All Orders");
  const { userEmail }: any = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );

  const { data: orders, error, isLoading } = useGetUserOrderQuery(userEmail);
  if (isLoading) {
    return <Loader />;
  }
  const filteredOrders = orders?.data.filter((order: any) => {
    if (activeTab === "All Orders") return true;
    return order.status === activeTab.toLowerCase();
  });

  return (
    <section className=" relative">
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <h2 className="font-manrope font-extrabold text-3xl leading-10 text-secondary mb-9">
          Order History
        </h2>

        <div className="flex mb-8">
          <ul className="flex items-center gap-x-5 gap-y-3">
            <li
              className={`font-medium  leading-8 cursor-pointer  ${
                activeTab === "All Orders"
                  ? "text-white bg-primary"
                  : "text-secondary hover:bg-[rgb(20,184,166,0.3)] hover:text-primary"
              } transition-all duration-300 px-3  rounded-full`}
              onClick={() => setActiveTab("All Orders")}
            >
              All Orders
            </li>
            <li
              className={`font-medium  leading-8 cursor-pointer ${
                activeTab === "Completed"
                  ? "text-white bg-primary"
                  : "text-secondary hover:bg-[rgb(20,184,166,0.3)] hover:text-primary"
              } transition-all duration-300 px-3  rounded-full`}
              onClick={() => setActiveTab("Completed")}
            >
              Completed
            </li>
            <li
              className={`font-medium  leading-8 cursor-pointer ${
                activeTab === "Cancelled"
                  ? "text-white bg-primary"
                  : "text-secondary hover:bg-[rgb(20,184,166,0.3)] hover:text-primary"
              } transition-all duration-300 px-3  rounded-full`}
              onClick={() => setActiveTab("Cancelled")}
            >
              Cancelled
            </li>
          </ul>
        </div>

        {filteredOrders.length === 0 ? (
          <p className="text-gray-600">
            No orders found for the selected status.
          </p>
        ) : (
          filteredOrders.map((order: any) => (
            <div
              key={order?.orderId}
              className="mt-7 border rounded border-gray-300 pt-9 pb-4"
            >
              <div className="flex items-start justify-between px-3 md:px-8">
                <div className="data">
                  <p className="font-medium text-lg leading-8 text-secondary whitespace-nowrap">
                    <span className="font-semibold"> Order :</span> #
                    {order?.orderId}
                  </p>
                  <p className="font-medium text-lg leading-8 text-secondary  whitespace-nowrap">
                    <span className="font-semibold"> Order Payment : </span>
                    {order?.orderDate}
                  </p>
                </div>
                <div className="flex items-center gap-3 max-md:mt-5">
                  <button className="font-medium  leading-8 text-white bg-[rgb(20,184,166,0.7)] duration-300 hover:bg-primary rounded-full px-4">
                    View
                  </button>
                </div>
              </div>

              <div className="w-full mt-4 px-2 sm:px-8 border-t border-gray-300 pt-5">
                <p className="font-semibold text-lg leading-8 text-secondary mb-5">
                  Order Details
                </p>
                <div className="flex flex-col gap-5">
                  {order?.cartItems.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-5 border-b border-gray-300 pb-5"
                    >
                      <div className="w-24 h-24 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg text-secondary">
                          {item.name}
                        </p>
                        <p className="text-gray-600">
                          {" "}
                          <span className="font-medium">Price: </span>$
                          {item.price}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Quantity:</span>{" "}
                          {item.quantity}.00
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium"> Total: </span>$
                          {item.price * item.quantity}.00
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <p className="font-semibold text-lg text-secondary">
                    Shipping Address
                  </p>
                  <p className="text-gray-600">{order.name}</p>
                  <p className="text-gray-600">{order.address}</p>
                  <p className="text-gray-600">
                    {order.division}, {order.district}, {order.subDistrict}
                  </p>
                  <p className="text-gray-600">Phone: {order.phone}</p>
                  <p className="text-gray-600">Email: {order.email}</p>
                  <p className="font-semibold text-lg text-secondary mt-4">
                    Payment Method: {order.paymentMethod}
                  </p>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <p className="font-semibold text-lg text-secondary">
                    Order Total:{" "}
                    <span className="text-primary">${order.total}.00</span>
                  </p>
                  <p
                    className={`font-medium text-lg capitalize ${
                      order.status === "completed" ||
                      order.status === "shipping"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <span className="font-semibold text-lg  text-secondary">
                      Status:
                    </span>
                    {" " + order.status}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default OrderHistory;
