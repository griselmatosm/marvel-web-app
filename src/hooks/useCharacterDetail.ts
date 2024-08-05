import useSWR from "swr";
import { fetcher, getCharacterDetailUrl } from "../services/marvelService";

export const useCharacterDetail = (characterId: string) => {
  const { data, error, isValidating, isLoading } = useSWR(
    getCharacterDetailUrl(characterId),
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
    }
  );
  console.log("characterDetail", { data, error, isValidating, isLoading });
  return {
    data: data?.data?.results[0] || {},
    isLoading,
    isValidating,
    isError: error,
  };
};
