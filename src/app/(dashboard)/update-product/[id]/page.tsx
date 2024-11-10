"use client";

import Loader from "@/components/Common/Loader";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { Variant } from "@/types/products";
import { imageUpload } from "@/utils/utilis";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProductForm = () => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [variantName, setVariantName] = useState<string>("");
  const [variantPrice, setVariantPrice] = useState<string>("");
  const [updateProduct, { isLoading: isUpdateLoading }] =
    useUpdateProductMutation();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetSingleProductQuery(id);
  const router = useRouter();
  useEffect(() => {
    if (data?.data) {
      const product = data.data;
      setVariants(product.variants);
    }
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const slug = form.slug.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const stockQuantity = parseInt(form.stockQuantity.value);
    const image = form.image?.files[0];
    const stockStatus = form.stockStatus.value;
    const image_url = await imageUpload(image);

    const productData = {
      name,
      slug,
      category,
      price,
      description: product.description,
      image: image_url?.data?.display_url,
      stockStatus: stockStatus === "true" ? true : false,
      variants,
      stockQuantity,
      rating: 4.8,
      totalReview: 24,
      status: "active",
      brand: "Waterproofing & Caulking",
    };

    try {
      if (variants.length === 0) {
        toast.error("Please select variants");
        return;
      }

      const res = await updateProduct({
        id: product._id,
        data: productData,
      }).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push("/manage-products");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "An error occurred");
    }
  };

  const addVariant = () => {
    if (variantName && variantPrice) {
      const id = (Math.random() + 1).toString(36).substring(2);
      const newVariant: Variant = {
        name: variantName,
        price: parseFloat(variantPrice),
        id,
      };
      setVariants([...variants, newVariant]);
      toast.success("Variant added");
      setVariantName("");
      setVariantPrice("");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const product = data?.data || {};

  return (
    <div className="w-full md:max-w-3xl mx-auto px-6 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white py-10 border">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Update Product
      </h2>
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="flex justify-between gap-4 mt-1">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Name</label>
            <input
              placeholder="Enter Product Name"
              type="text"
              name="name"
              defaultValue={product.name}
              className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Slug</label>
            <input
              placeholder="Enter Slug"
              type="text"
              name="slug"
              defaultValue={product.slug}
              className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-1">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Price</label>
            <input
              placeholder="Enter Product Price"
              type="number"
              name="price"
              defaultValue={product.price}
              className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              defaultValue={product.stockQuantity}
              placeholder="Enter Stock Quantity"
              className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-1">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Stock Status</label>
            <select
              name="stockStatus"
              defaultValue={product.stockStatus}
              className="w-full px-3 text-[15px] py-[11px] border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              required
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
          <div className="space-y-1 w-full text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Category
            </label>
            <select
              name="category"
              id="category"
              defaultValue={product.category}
              className="w-full px-3 text-[15px] py-[11px] border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
            >
              <option value="">Select Category</option>
              <option value="Medicines">Medicines</option>
              <option value="Supplements">Supplements</option>
              <option value="First Aid">First Aid</option>
              <option value="Vitamins">Vitamins</option>
              <option value="Herbal Remedies">Herbal Remedies</option>
              <option value="Health & Wellness">Health & Wellness</option>
            </select>
          </div>
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700">Add Variants</label>
          <div className="flex justify-between gap-4 mt-1">
            <select
              value={variantName}
              onChange={(e) => setVariantName(e.target.value)}
              className="w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
            >
              <option value="">Select mg</option>
              <option value="10mg">10 mg</option>
              <option value="20mg">20 mg</option>
              <option value="30mg">30 mg</option>
              <option value="50mg">50 mg</option>
              <option value="60mg">60 mg</option>
              <option value="70mg">70 mg</option>
              <option value="80mg">80 mg</option>
              <option value="90mg">90 mg</option>
              <option value="100mg">100 mg</option>
            </select>

            <input
              type="number"
              value={variantPrice}
              onChange={(e) => setVariantPrice(e.target.value)}
              placeholder="Variant Price"
              className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
            />
          </div>
          <button
            type="button"
            onClick={addVariant}
            className="bg-blue-500 text-xs mt-2 text-white p-2 rounded"
          >
            Add Variant
          </button>
          <ul className="mt-4">
            {variants.map((variant: Variant) => (
              <li key={variant.id} className="border-b py-1">
                {variant.name}: ${variant.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-1 w-full mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-primary/70 hover:bg-primary duration-300 text-white px-4 py-2 rounded-md"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
