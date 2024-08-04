import useSWR from "swr";
import { characterDetail, fetcher } from "../services/marvelService";

export const useCharacterDetail = (characterId: string) => {
  const { data, error, isValidating, isLoading } = useSWR(
    characterDetail(characterId),
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
