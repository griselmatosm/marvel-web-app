import axios from "axios";

const API_BASE_URL = "/api";

export const fetcher = (url: string) => {
  return axios.get(url).then((response) => response.data);
};

export const characters = API_BASE_URL + "/characters";
