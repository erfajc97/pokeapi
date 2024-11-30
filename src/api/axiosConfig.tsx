import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://pokeapi.co/api/v2/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json", // Default Content-Type
  },
});

export default axiosInstance;
