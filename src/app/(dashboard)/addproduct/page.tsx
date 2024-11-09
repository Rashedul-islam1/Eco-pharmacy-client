"use client";

import { useProductMutation } from "@/redux/features/product/productApi";
import { Variant } from "@/types/products";
import { imageUpload } from "@/utils/utilis";
import { useState } from "react";
import toast from "react-hot-toast";

const AddProductForm = () => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [variantName, setVariantName] = useState("");
  const [variantPrice, setVariantPrice] = useState("");
  const [product, { data, isLoading }] = useProductMutation();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const slug = form.slug.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const stockQuantity = form.stockQuantity.value;
    const image = form.image.files[0];
    const stockStatus = form.stockStatus.value || true;
    const image_url = await imageUpload(image);

    const formData = {
      name,
      slug,
      category,
      price,
      description,
      image: image_url?.data?.display_url,
      stockStatus,
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
      }

      const res = await product(formData).unwrap();
      if (res.success) {
        toast.success(res.message);
        form.reset();
        setVariants([]);
      }
    } catch (err: any) {
      if (!err.data.status) {
        toast.error(err.data.message);
      }
    }
  };

  const addVariant = () => {
    if (variantName && variantPrice) {
      const id = (Math.random() + 1).toString(36).substring(2);
      const variantData = {
        name: variantName,
        price: parseFloat(variantPrice),
        id,
      };
      setVariants([...variants, variantData]);
      toast.success("Variant added");
      setVariantName("");
      setVariantPrice("");
    }
  };

  const cssClass =
    "appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out";

  return (
    <div className="w-full md:max-w-3xl mx-auto px-6 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white py-10 border">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Add Product
      </h2>
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="flex justify-between gap-4 mt-1">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Name</label>
            <input
              placeholder="Enter Product Name"
              type="text"
              name="name"
              className={cssClass}
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Slug</label>
            <input
              placeholder="Enter Slug"
              type="text"
              name="slug"
              className={cssClass}
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
              className={cssClass}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              placeholder="Enter Stock Quantity"
              className={cssClass}
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-1">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Stock Status</label>
            <select
              name="stockStatus"
              className={
                "w-full px-3 text-[15px] py-[11px] border rounded-md  placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              }
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
              className={
                "w-full px-3 text-[15px] py-[11px] border rounded-md  placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              }
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
              className={
                "w-full px-3 text-[15px] py-2 border rounded-md  placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              }
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
              className={cssClass}
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
            {variants.map((variant) => (
              <li key={variant.id} className="border-b py-1">
                {variant.name}: ${variant.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            name="description"
            className={cssClass}
          ></textarea>
        </div>

        <div className="mt-4 w-full">
          <input
            required
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          disabled={variants.length === 0}
          className={`${
            variants.length > 0
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-400"
          } text-xs mt-4 p-2 rounded`}
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
