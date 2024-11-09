"use client";

import Loader from "@/components/Common/Loader";
import ProductCard from "@/lib/products/productCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { Product } from "@/types/products";
import { useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  const filteredProducts = products?.data?.filter((product: any) =>
    product?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
  const paginatedProducts = filteredProducts?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto px-0 lg:px-10">
      <div className="md:my-8 flex justify-between items-center">
        <h1 className="heading">Our Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="h-10 rounded md:w-[300px] px-4 py-3 text-gray-800 border border-primary focus:outline-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {paginatedProducts?.map((product: Product, i: any) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {/* Pagination Component */}
      {totalPages > 1 && (
        <div className="flex justify-center py-16 gap-8">
          <button
            aria-label="Previous Page"
            className={`${
              currentPage === 0 ? "text-gray-400" : "text-teal-500"
            } flex items-center justify-center w-8 h-8`}
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            <FiChevronsLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              aria-label={`Page ${index + 1}`}
              className={`w-7 h-7 rounded-md text-sm ${
                currentPage === index
                  ? "bg-teal-500 shadow-lg text-white"
                  : "hover:bg-teal-400 hover:text-white"
              }`}
              key={index}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            aria-label="Next Page"
            className={`${
              currentPage === totalPages - 1 ? "text-gray-400" : "text-teal-500"
            } flex items-center justify-center w-8 h-8`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <FiChevronsRight />
          </button>
        </div>
      )}
      {/* Pagination Component */}
    </div>
  );
};

export default Products;
