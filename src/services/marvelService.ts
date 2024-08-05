import axios from "axios";
import md5 from "md5";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
console.log("PUBLIC_KEY", PUBLIC_KEY);
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

const TS = new Date().getTime();
const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

export const fetcher = (url: string) => {
  return axios.get(url).then((response) => response.data);
};

export const getCharactersUrl = (nameStartsWith?: string) => {
  const params = new URLSearchParams({
    ...(nameStartsWith && { nameStartsWith }),
    limit: "50",
  });

  return `${API_BASE_URL}/characters?${params}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
};

export const getCharacterDetailUrl = (characterId: string) => {
  return `${API_BASE_URL}/characters/${characterId}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
};
