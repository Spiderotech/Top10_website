import axios from "axios";
import { baseUrl } from "./constant";
console.log(baseUrl);
const instance = axios.create({
  
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});
export default instance;