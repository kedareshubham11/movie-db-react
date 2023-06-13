import axios from "axios";

const axios_instance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
});

export default axios_instance;
