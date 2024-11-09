import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { LiaShoppingBagSolid } from "react-icons/lia";
import QuantityButton from "../Common/QuantityButton";
import ShowRating from "../Common/ShowRating";

const ProductInfo = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleIncrement = () => {
    if (quantity < product.stockQuantity) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.error("Cannot exceed available stock.");
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCartWithQuantity = () => {
    if (product) {
      dispatch(
        addToCart({
          _id: product._id,
          image: product.image,
          name: product.name,
          price: selectedVariant.price,
          stockQuantity: product.stockQuantity,
          quantity,
          variant: selectedVariant.name,
        })
      );
      setQuantity(1);
    }
  };

  const handleVariantChange = (event: any) => {
    const selectedId = event.target.value;
    const selected = product.variants.find((v: any) => v._id === selectedId);
    setSelectedVariant(selected);
  };

  return (
    <div className="mx-auto flex flex-wrap justify-between">
      <Image
        alt="e-commerce"
        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={product?.image}
        width={1200}
        height={100}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-primary text-3xl font-display title-font font-semibold mb-2">
          {product?.name}
        </h1>
        <h2 className="text-sm title-font text-gray-800 tracking-widest mb-2">
          Quantity: {product.stockQuantity}
        </h2>
        <h2 className="text-sm title-font text-gray-800 tracking-widest mb-2">
          Brand: {product?.brand}
        </h2>
        <div className="mb-2">
          <ShowRating value={product?.rating} />
        </div>
        <p className="leading-relaxed tracking-wide text-gray-800 font-sans overflow-hidden">
          {product?.description}
        </p>
        <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            $ {selectedVariant.price}.00
          </span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="variant-select"
            className="text-gray-800 text-lg mr-2 font-medium"
          >
            Choose Variant:
          </label>
          <select
            id="variant-select"
            value={selectedVariant._id}
            onChange={handleVariantChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          >
            {product.variants.map((variant: any) => (
              <option key={variant._id} value={variant._id}>
                {variant.name} - ${variant.price}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-3 align-center">
          <QuantityButton
            quantity={quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <button
            onClick={handleAddToCartWithQuantity}
            className="flex gap-1 items-center py-2 px-4 text-lg rounded shadow-lg bg-primary focus:outline-none active:bg-primary text-white transition duration-150 ease-in-out hover:bg-primary/90"
            disabled={selectedVariant.stockQuantity <= 0}
          >
            <LiaShoppingBagSolid className="text-2xl" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
