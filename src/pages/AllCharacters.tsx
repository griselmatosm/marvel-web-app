/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { CharactersList } from '../components/CharactersList';
import { Searcher } from '../components/Searcher';
import { useLoading } from '../contexts/LoadingContext';
import { useCharacters } from '../hooks/useCharacters';
import { Character } from '../interfaces/Character';

export const AllCharacters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCharacters, setDisplayedCharacters] = useState<Character[]>([]);
  const [displayedCount, setDisplayedCount] = useState(0);
  const { data: { results: characters, count }, isError, isLoading } = useCharacters(searchTerm);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(isLoading);
    if (!isLoading && characters.length > 0) {
      setDisplayedCharacters(characters);
      setDisplayedCount(count);
    }
  }, [isLoading, characters, count, setIsLoading]);

  return (
    <main style={{ padding: "48px 48px 0" }}>
      {(searchTerm || displayedCharacters.length > 0) && (
        <Searcher placeholder='Search a character...' count={displayedCount} onSearch={setSearchTerm} />
      )}
      {isError && displayedCharacters.length === 0 && <div>Error fetching characters</div>}
      {displayedCharacters.length > 0 && <CharactersList characters={displayedCharacters} />}
    </main>
  );
}