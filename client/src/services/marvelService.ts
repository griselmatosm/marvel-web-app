import axios from "axios";

const API_BASE_URL = "/api";

export const fetcher = (url: string) => {
  return axios.get(url).then((response) => response.data);
};

export const characters = (nameStartsWith?: string) => {
  const params = new URLSearchParams({
    ...(nameStartsWith && { nameStartsWith }),
  });

  return `${API_BASE_URL}/characters?${params.toString()}`;
};
