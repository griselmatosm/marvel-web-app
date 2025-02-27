/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { CharactersList } from '../components/CharactersList';
import { Searcher } from '../components/Searcher';
import { useFavorites } from '../contexts/FavoritesContext';
import { useLoading } from '../contexts/LoadingContext';

export const Favorites = () => {
  const { favorites } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setFilteredFavorites(
      favorites.filter((favorite) =>
        favorite.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, favorites]);

  useEffect(() => {
    setIsLoading(false)
  }, [setIsLoading])

  return (
    <main style={{ padding: "48px 48px 0" }}>
      <h1 style={{ textTransform: 'uppercase' }}>Favorites</h1>
      <Searcher placeholder='Search a character...' count={favorites.length} onSearch={setSearchTerm} />
      {favorites.length > 0 && <CharactersList characters={filteredFavorites} />}
    </main>
  )
}