import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ecom-clone-7a138/us-central1/api",
});

export default instance;
