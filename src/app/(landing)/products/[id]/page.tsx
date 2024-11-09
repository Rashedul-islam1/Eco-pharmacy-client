"use client";
import Loader from "@/components/Common/Loader";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import ReviewDetails from "@/components/ProductDetails/ReviewDetails";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useGetSingleProductQuery(id);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="overflow-hidden">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
        <ProductInfo product={product?.data} />
        <ReviewDetails />
      </div>
    </section>
  );
};

export default ProductDetails;
