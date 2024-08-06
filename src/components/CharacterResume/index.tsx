/* eslint-disable react/react-in-jsx-scope */
import { CharacterWithIsFavorite, useFavorites } from '../../contexts/FavoritesContext';
import { Character } from "../../interfaces/Character";
import { HeartIconEmpty, HeartIconFilled } from '../Icon';
import styles from './CharacterResume.module.css';

export const CharacterResume = ({ character }: { character: Character }) => {

  const { toggleFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some((favorite) => favorite.id === character.id);

  const handleClick = () => {
    const newFavorite: CharacterWithIsFavorite = {
      id: character.id,
      isFavorite: isFavorite,
      name: character.name,
      description: character.description,
      thumbnail: character.thumbnail,
    };
    toggleFavorite(newFavorite);
  }
  return (
    <section className={styles.characterResumeContainer}>
      <div className={styles.characterResumeContent}>
        <img className={styles.characterImage} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <div className={styles.characterResumeInfo}>
          <div className={styles.characterResumeInfoHeader}>
            <h2>{character.name}</h2>
            <button onClick={handleClick}>
              {isFavorite ? <HeartIconFilled className={styles.heartIcon} color='var(--color-primary)' size={24} /> : <HeartIconEmpty className={styles.heartIcon} color='var(--color-white)' size={24} />}
            </button>
          </div>
          <p>{character.description}</p>
        </div>
      </div>
    </section>
  )
}