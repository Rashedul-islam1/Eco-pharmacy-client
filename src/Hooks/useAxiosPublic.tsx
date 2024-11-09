import axios from "axios";

const axiosSecurePublic = axios.create({
  baseURL: "https://eco-pharmacy-server.vercel.app/api/v1",
});

const useAxiosPublic = () => {
  return axiosSecurePublic;
};

export default useAxiosPublic;
