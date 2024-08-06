/* eslint-disable react/react-in-jsx-scope */
import { Comic } from '../../interfaces/Comic';
import styles from './Comic.module.css';

export const ComicCard = ({ comic }: { comic: Comic }) => {
  const year = new Date(comic.releaseDate).getFullYear();
  return (
    <div className={styles.comicContainer}>
      <img src={comic.thumbnail} alt={comic.title} />
      <h3>{comic.title}</h3>
      <p>{year}</p>
    </div>
  )
}