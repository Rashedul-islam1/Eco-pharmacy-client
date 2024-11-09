"use client";

import Loader from "@/components/Common/Loader";
import FeaturedProductCard from "@/lib/products/FeaturedProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { Product } from "@/types/products";

const FeaturedProducts = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto px-0 lg:px-10">
      <h1 className="mx-auto sub-heading">Products</h1>
      <h2 className="heading text-center">Explore Our Top Picks</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products?.data.slice(0, 3).map((product: Product, i: any) => (
          <FeaturedProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
