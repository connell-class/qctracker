import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://my-json-server.typicode.com/JordanHunnicutt/NewJsonRepo",
});