"use client";
import Loader from "@/components/Common/Loader";
import {
  useChangeOrderStatusMutation,
  useGetAllOrdersQuery,
} from "@/redux/features/order/orderApi";
import toast from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

const ManageProducts = () => {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery(undefined);
  const [changeOrderStatus] = useChangeOrderStatusMutation();

  if (isLoading) {
    return <Loader />;
  }

  const handleChangeStatus = async (id: string, status: string) => {
    try {
      await changeOrderStatus({ id, status });
      toast.success(`Order ${status} successfully`);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="md:px-5">
      <h2 className="heading text-center my-5">Manage Products</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary border border-[#1c445630] px-4">
        <table className="w-full table-auto mb-10">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4 border-b ">
              <th className="min-w-[100px]   py-4  font-medium text-secondary">
                OrderID
              </th>
              <th className="min-w-[140px]   py-4  font-medium text-secondary">
                Email
              </th>
              <th className="min-w-[100px]    py-4  font-medium text-secondary">
                Order Date
              </th>
              <th className="min-w-[80px]   py-4  font-medium text-secondary">
                Price
              </th>
              <th className="min-w-[120px]   py-4   font-medium text-secondary">
                Payment Method
              </th>
              <th className="py-4 text-center font-medium  text-secondary">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.data.map((order: any) => (
              <tr
                key={order._id}
                className="border-b bg-[rgba(255,255,255,0.2)]"
              >
                <td className=" py-3 text-sm font-medium">#{order.orderId}</td>
                <td className=" py-3 text-sm font-medium ">{order.email}</td>
                <td className=" py-3 text-sm font-medium ">
                  {order.orderDate}
                </td>
                <td className=" py-3 text-sm font-medium ">
                  ${order.total}.00
                </td>
                <td className=" py-3 text-sm font-medium ">
                  {order.paymentMethod}
                </td>
                <td className="flex items-center justify-center py-3 gap-2">
                  <button
                    disabled={
                      order.status === "cancelled" ||
                      order.status === "completed"
                    }
                    onClick={() => handleChangeStatus(order._id, "completed")}
                    className={`inline-block px-3 py-1 text-center capitalize ${
                      order.status === "shipping"
                        ? "text-white bg-[#1bdc3190] hover:bg-[#1bdc31] duration-300"
                        : order.status === "completed"
                        ? "text-white bg-[#1bdc31]"
                        : order.status === "cancelled"
                        ? "text-gray-400 bg-gray-200"
                        : ""
                    } rounded-full text-xs`}
                  >
                    {order.status === "completed" ? order.status : "complete"}
                  </button>
                  <button
                    disabled={
                      order.status === "cancelled" ||
                      order.status === "completed"
                    }
                    onClick={() => handleChangeStatus(order._id, "cancelled")}
                    className={`inline-block px-3 py-1 text-center capitalize ${
                      order.status === "shipping"
                        ? "text-white bg-[#e5181890] hover:bg-[#e51818] duration-300"
                        : order.status === "cancelled"
                        ? "text-[#ffffff] bg-[#e51818]"
                        : order.status === "completed"
                        ? "text-gray-400 bg-gray-200"
                        : ""
                    } rounded-full text-xs`}
                  >
                    {order.status === "cancelled" ? order.status : "Cancel"}
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

export default ManageProducts;
