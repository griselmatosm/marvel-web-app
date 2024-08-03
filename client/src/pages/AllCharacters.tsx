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

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading characters</p>}
      {!isLoading && characters.length === 0 && <p>No results found</p>}
      {!isLoading && characters.length > 0 &&
        <>
          <Searcher placeholder="Search by name" count={count} onSearch={setSearchTerm} />
          <CharactersList characters={characters} />
        </>}
    </main>
  )
}