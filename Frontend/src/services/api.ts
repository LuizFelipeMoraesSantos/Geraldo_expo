import axios from "axios";

const api = axios.create({
  
  baseURL: "http://192.168.97.238", 
});

export default api;