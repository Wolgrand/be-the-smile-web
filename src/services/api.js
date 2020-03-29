import axios from "axios";

const api = axios.create({
  baseURL: "https://be-the-smile.herokuapp.com"
});

export default api;
