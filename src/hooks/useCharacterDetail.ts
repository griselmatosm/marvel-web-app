import useSWR from "swr";
import { Character } from "../interfaces/Character";
import { fetcher, getCharacterDetailUrl } from "../services/marvelService";

export const useCharacterDetail = (characterId: string) => {
  const { data, error, isValidating, isLoading } = useSWR<{
    data: { results: Character[] };
  }>(getCharacterDetailUrl(characterId), fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000,
  });
  return {
    data: data?.data?.results[0] || null,
    isLoading,
    isValidating,
    isError: error,
  };
};
