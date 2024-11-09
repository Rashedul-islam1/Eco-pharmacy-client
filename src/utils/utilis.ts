import axios from "axios";

export const imageUpload = async (image: any) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=ccd67764f47f2584913195d2ea305f96`,
    formData
  );
  return data;
};

export const baseApiKey = "https://eco-pharmacy-server.vercel.app/api/v1";
