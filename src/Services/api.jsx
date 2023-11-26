import axios from "axios";

const api = axios.create({
  baseURL: `https://c272-2804-24bc-ccbb-9500-2933-ad5b-cafe-beb0.ngrok-free.app/api`
});

export default api;