import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d92eace6822248e7ac9dd4ca788ebcd9",
  },
});
