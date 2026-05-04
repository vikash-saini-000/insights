import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});;
export const getAllUsers = () => API.get("/user/all");
export const deleteUser = (id) => API.delete(`/user/${id}`);
export default API;