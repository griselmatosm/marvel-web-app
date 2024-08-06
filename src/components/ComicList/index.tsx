/* eslint-disable react/react-in-jsx-scope */
import { Comic } from '../../interfaces/Comic';
import { ComicCard } from "../Comic";
import styles from './ComicList.module.css';

export const ComicList = ({ comics }: { comics: Comic[] }) => {
  return (
    <>
      <h2 className={styles.comicListTitle}>Comics</h2>
      <div className={styles.comicListWrapper}>
        <ul className={styles.comicListContainer}>
          {comics?.map((comic: Comic) => (
            <li key={comic.id}>
              <ComicCard comic={comic} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}