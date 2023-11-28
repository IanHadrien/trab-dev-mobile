import axios from "axios";

const api = axios.create({
  baseURL: `https://5ce8-2804-24bc-ccbb-9500-f9df-8d87-b3cc-69a4.ngrok-free.app/api`
});

export default api;