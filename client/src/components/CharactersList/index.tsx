/* eslint-disable react/react-in-jsx-scope */

import { Character } from "../../interfaces/Character";
import { CharacterCard } from '../CharacterCard';
import styles from './CharactersList.module.css';
interface CharactersListProps {
  characters: Character[]
}
export const CharactersList = ({ characters }: CharactersListProps) => {

  return (
    <ul className={styles.charactersList}>
      {characters.map(character => <li key={character.id}> <CharacterCard character={character} /> </li>)}
    </ul>
  )
}