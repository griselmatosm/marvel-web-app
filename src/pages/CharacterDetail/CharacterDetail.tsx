/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterResume } from '../../components/CharacterResume';
import { ComicList } from '../../components/ComicList';
import { useLoading } from '../../contexts/LoadingContext';
import { useCharacterDetail } from '../../hooks/useCharacterDetail';
import styles from './CharacterDetail.module.css';

export const CharacterDetail = () => {
  const { characterId } = useParams()
  const { data: character, isError, isLoading, isValidating } = useCharacterDetail(characterId ?? '')
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading, setIsLoading])

  if (isLoading || isValidating) return null

  return (
    <main>
      {character && <CharacterResume character={character} />}
      {isError && <div>Error fetching character</div>}
      <section className={styles.comicsSection}>
        <ComicList />
      </section>
    </main >
  )
}