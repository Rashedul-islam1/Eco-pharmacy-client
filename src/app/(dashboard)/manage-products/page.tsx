"use client";
import Loader from "@/components/Common/Loader";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useDeleteSingleProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { RootState } from "@/redux/features/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menu, setMenu] = useState<any[]>([]);
  const itemsPerPage = 10;
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  const { role }: any = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );
  const [deleteSingleProduct] = useDeleteSingleProductMutation();

  useEffect(() => {
    if (products?.data) {
      setMenu(products.data);
    }
  }, [products]);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = menu?.slice(startIndex, endIndex) || [];
  const totalItems = menu?.length || 0;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => index);

  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteSingleProduct(id);
        toast.success("Product deleted successfully");
      }
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="md:px-5">
      <h2 className="heading text-center my-5">Manage Products</h2>
      <div className=" border border-[#1c445630] rounded">
        <div className="max-w-[900px]  mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary px-3">
          <table className="w-full table-auto mb-10">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-b">
                <th className="px-3 py-5 text-left">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="min-w-[140px] uppercase py-4  font-medium text-secondary">
                  Item Name
                </th>
                <th className="min-w-[60px] uppercase  py-4  font-medium text-secondary">
                  Price
                </th>
                <th className="min-w-[60px] uppercase py-4  font-medium text-secondary">
                  Stock
                </th>
                <th className="min-w-[60px] py-4 uppercase  font-medium text-secondary">
                  Category
                </th>
                <th className="py-4  font-medium uppercase text-secondary">
                  Status
                </th>
                <th className="py-4  font-medium text-center uppercase text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsToShow?.map((item, i) => (
                <tr key={i}>
                  <td className="py-4 px-3">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="border-b  border-[#eee]">
                    <div className="flex items-center gap-2">
                      <Image
                        width={1240}
                        height={100}
                        className="w-12 h-12"
                        src={item?.image}
                        alt={item?.name}
                      />
                      <h3 className="text-[16px]">{item?.name}</h3>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1  font-medium text-success">
                      ${item?.price}.00
                    </p>
                  </td>{" "}
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1  font-medium text-success">
                      {item?.stockQuantity}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1   font-medium text-success">
                      {item?.category}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 pr-5 ">
                    {item?.stockStatus ? (
                      <p className=" text-green-500">Active</p>
                    ) : (
                      <p className=" text-red-500">Disabled</p>
                    )}
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <div className="flex gap-2 items-center justify-center">
                      <Link
                        href={`/update-product/${item._id}`}
                        className="bg-primary/70 text-white hover:bg-primary rounded-full px-3 py-[6px] text-xs duration-300"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDeleteItem(item._id)}
                        className="text-xs px-3 py-[6px] font-medium  rounded-full bg-[#f0151590] hover:bg-[#f01515] duration-300 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {numberOfPages > 1 && (
          <div className="flex justify-center pb-16 pt-8 gap-8">
            <button
              aria-label="Previous Page"
              className={`${
                currentPage === 0 ? "text-gray-400" : "text-teal-500"
              } flex items-center justify-center w-8 h-8`}
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              <MdKeyboardDoubleArrowLeft className="text-xl" />
            </button>
            {pages.map((page) => (
              <button
                aria-label={`Page ${page + 1}`}
                className={`w-7 h-7 rounded-md text-sm ${
                  currentPage === page
                    ? "bg-teal-500 shadow-lg text-white"
                    : "hover:bg-teal-400 hover:text-white"
                }`}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
            <button
              aria-label="Next Page"
              className={`${
                currentPage === numberOfPages - 1
                  ? "text-gray-400"
                  : "text-teal-500"
              } flex items-center justify-center w-8 h-8`}
              onClick={handleNextPage}
              disabled={currentPage === numberOfPages - 1}
            >
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
