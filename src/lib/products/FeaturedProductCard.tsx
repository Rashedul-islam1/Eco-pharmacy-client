"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Rating from "react-rating";
const FeaturedProductCard = ({ product }: any) => {
  return (
    <div className=" border rounded group">
      <div className="relative  w-full h-[150px] rounded-md overflow-hidden">
        <Image
          src={product?.image}
          alt={product?.name}
          width={1200}
          height={100}
          className="w-auto object-cover group-hover:scale-125 duration-200 "
        />
        <div className=" absolute top-3  px-4 py-1 text-sm capitalize text-white bg-primary">
          {product.stockStatus ? "In Stock" : "Stock out"}
        </div>
      </div>

      <div className="px-2 py-4">
        {/* name and price */}
        <div className="flex justify-between">
          <h3 className="text-xl group-hover:text-primary text-secondary  duration-200 font-semibold capitalize tracking-wide">
            {product?.name}
          </h3>

          <p className="text-xl font-semibold text-primary flex">
            ${product?.price}.00
          </p>
        </div>

        <p className="text-sm text-gray-600 font-sans tracking-wide">
          {product?.description}
        </p>
        <p className="text-sm text-gray-600 font-sans tracking-wide">
          Brand: {product?.brand}
        </p>

        <div className="flex justify-between mt-5">
          <p className=" text-primary">
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={product.rating}
              readonly
            />
          </p>
          <Link
            href={`/products/${product?._id}`}
            className="flex items-center gap-1 py-1 px-5 rounded shadow-lg bg-primary  text-lg text-white  duration-150  hover:bg-primary/90 "
          >
            <MdOutlineAddShoppingCart className="text-xl" />
            Add Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
