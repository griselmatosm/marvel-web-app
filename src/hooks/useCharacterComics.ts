import useSWR from "swr";
import { Comic } from "../interfaces/Comic";
import { fetcher, getCharacterComicsUrl } from "../services/marvelService";

interface ComicApiResponse {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: [{ type: string; date: string }];
}

export const useCharacterComics = (characterId: string) => {
  const { data, error, isValidating, isLoading } = useSWR(
    getCharacterComicsUrl(characterId),
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
    }
  );
  const comics = data?.data?.results.map((comic: ComicApiResponse) => ({
    id: comic.id,
    title: comic.title,
    thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    releaseDate: comic.dates.find((date) => date.type === "onsaleDate")?.date,
  }));
  return {
    data: (comics as Comic[]) || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
