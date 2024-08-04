import useSWR from "swr";
import { Character } from "../interfaces/Character";
import { characters, fetcher } from "../services/marvelService";

interface CharacterList {
  results: Character[];
  count: number;
}

export const useCharacters = (nameStartsWith?: string) => {
  const { data, error, isValidating, isLoading } = useSWR<{
    data: CharacterList;
  }>(characters(nameStartsWith), fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000,
  });

  console.log({ data, error, isValidating, isLoading });

  return {
    data: { results: data?.data?.results || [], count: data?.data?.count || 0 },
    isLoading: isLoading,
    isError: error,
  };
};
