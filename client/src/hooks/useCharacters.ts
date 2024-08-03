import useSWR from "swr";
import { Character } from "../interfaces/Character";
import { characters, fetcher } from "../services/marvelService";

interface CharacterList {
  results: Character[];
  count: number;
}

export const useCharacters = () => {
  const { data, error, isValidating, isLoading } = useSWR<{
    data: CharacterList;
  }>(characters, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });
  return {
    data: { results: data?.data?.results || [], count: data?.data?.count || 0 },
    isLoading: isLoading || isValidating,
    isError: error,
  };
};
