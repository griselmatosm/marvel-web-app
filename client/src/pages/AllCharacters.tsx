/* eslint-disable react/react-in-jsx-scope */
import { CharactersList } from '../components/CharactersList';
import { useCharacters } from '../hooks/useCharacters';

export const AllCharacters = () => {
  const { data: { results: characters, count }, isError, isLoading } = useCharacters();

  console.log({ characters, isError, isLoading })
  return (
    <main style={{ padding: "0 48px" }}>
      <p>{count} results</p>
      <CharactersList characters={characters} />
    </main>
  )
}