/* eslint-disable react/react-in-jsx-scope */

import { Character } from "../../interfaces/Character";
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const isFavorite = true;
  return (
    <article className={styles.characterCard}>
      <img className={styles.characterImage} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <div className={styles.characterInfo}>
        <h2>{character.name}</h2>
        <img src={isFavorite ? "/heart_icon_filled.svg" : "/heart_icon_empty.svg"} />
      </div>
    </article>
  )
}