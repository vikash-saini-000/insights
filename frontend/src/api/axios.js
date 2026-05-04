import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});;
export const getAllUsers = () => API.get("/api/user/all");
export const deleteUser = (id) => API.delete(`/api/user/${id}`);
export default API;