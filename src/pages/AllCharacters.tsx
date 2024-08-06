/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { CharactersList } from '../components/CharactersList';
import { Searcher } from '../components/Searcher';
import { useLoading } from '../contexts/LoadingContext';
import { useCharacters } from '../hooks/useCharacters';

export const AllCharacters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: { results: characters, count }, isError, isLoading } = useCharacters(searchTerm);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading, setIsLoading])

  if (isLoading || isError) return null

  return (
    <main style={{ padding: "48px 48px 0" }}>
      <Searcher placeholder='Search a character...' count={count} onSearch={setSearchTerm} />
      {!isLoading && characters.length > 0 && <CharactersList characters={characters} />}
    </main>
  )
}