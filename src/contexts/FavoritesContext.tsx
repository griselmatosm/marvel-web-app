/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useEffect, useState } from 'react';
import { Character } from '../interfaces/Character';

type isFavoriteCharacter = {
  isFavorite: boolean
}
export type CharacterWithIsFavorite = Character & isFavoriteCharacter


interface FavoritesContextType {
  favorites: CharacterWithIsFavorite[],
  toggleFavorite: (character: CharacterWithIsFavorite) => void
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

const FavoritesProvider = ({ children }: { children: JSX.Element }) => {
  const [favorites, setFavorites] = useState<CharacterWithIsFavorite[]>([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const toggleFavorite = (character: CharacterWithIsFavorite) => {

    const isFavorite = favorites.some((favorite) => favorite.id === character.id);
    if (isFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== character.id);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      const newFavorite: CharacterWithIsFavorite = { id: character.id, isFavorite: true, name: character.name, description: character.description, thumbnail: character.thumbnail };
      const newFavorites = [...favorites, newFavorite];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }




  };
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
export { FavoritesProvider, useFavorites };
