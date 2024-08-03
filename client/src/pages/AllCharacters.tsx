/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { CharactersList } from '../components/CharactersList';
import { Searcher } from '../components/Searcher';
import { useCharacters } from '../hooks/useCharacters';

export const AllCharacters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: { results: characters, count }, isError, isLoading } = useCharacters(searchTerm);

  console.log({ characters, isError, isLoading })
  return (
    <main style={{ padding: "48px 48px 0" }}>
      <Searcher placeholder='Search a character...' count={count} onSearch={setSearchTerm} />
      {isLoading && <p className="loading">Loading...</p>}
      {isError && <p className="error">Error loading characters</p>}
      {!isLoading && characters.length === 0 && <p className="loading">No results found</p>}
      {!isLoading && characters.length > 0 && <CharactersList characters={characters} />}
    </main>
  )
}