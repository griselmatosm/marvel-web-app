/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoading } from '../../contexts/LoadingContext';
import { useCharacterComics } from "../../hooks/useCharacterComics";
import { Comic } from '../../interfaces/Comic';
import { ComicCard } from "../Comic";
import styles from './ComicList.module.css';

export const ComicList = () => {
  const { characterId } = useParams()
  const { data: comics, isError: isErrorComics, isLoading: isLoadingComics, isValidating: isValidatingComics } = useCharacterComics(characterId ?? '')

  const { setIsLoading } = useLoading();
  useEffect(() => {
    setIsLoading(isLoadingComics)
  }, [isLoadingComics, setIsLoading])

  if (isLoadingComics || isValidatingComics) return null
  if (isErrorComics) return <div>Error loading character</div>

  return (<>
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