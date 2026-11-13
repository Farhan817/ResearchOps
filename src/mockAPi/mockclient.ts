import axios from "axios";

const mockApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Simulate 1-second network delay
mockApi.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return config;
});

export default mockApi;
