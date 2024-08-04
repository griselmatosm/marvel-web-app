/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { CharactersList } from '../components/CharactersList';
import { Searcher } from '../components/Searcher';
import { useFavorites } from '../contexts/FavoritesContext';
export const Favorites = () => {
  const { favorites } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  useEffect(() => {
    setFilteredFavorites(
      favorites.filter((favorite) =>
        favorite.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, favorites]);



  return (
    <>
      <h1 style={{ textTransform: 'uppercase' }}>Favorites</h1>
      <Searcher placeholder='Search a character...' count={favorites.length} onSearch={setSearchTerm} />
      {favorites.length > 0 && <CharactersList characters={filteredFavorites} />}
    </>
  )
}