/* eslint-disable react/react-in-jsx-scope */
import cx from 'classnames';
import { CharacterWithIsFavorite, useFavorites } from '../../contexts/FavoritesContext';
import { Character } from "../../interfaces/Character";
import { HeartIconEmpty, HeartIconFilled } from '../Icon';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {

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
    <article className={cx(styles.characterCard, { [styles.isFavorite]: isFavorite })}>
      <img className={styles.characterImage} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <div className={styles.characterInfo}>
        <h2>{character.name}</h2>
        <button onClick={handleClick}>
          {isFavorite ? <HeartIconFilled className={styles.heartIcon} color='#EC1D24' size={12} /> : <HeartIconEmpty className={styles.heartIcon} color='white' size={12} />}
        </button>
      </div>
    </article>
  )
}