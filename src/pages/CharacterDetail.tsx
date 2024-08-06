/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom';
import { CharacterResume } from '../components/CharacterResume';
import { ComicList } from '../components/ComicList';
import { useCharacterComics } from '../hooks/useCharacterComics';
import { useCharacterDetail } from '../hooks/useCharacterDetail';

import styles from './CharacterDetail.module.css';

export const CharacterDetail = () => {
  const { characterId } = useParams()
  const { data: character, isError, isLoading, isValidating } = useCharacterDetail(characterId ?? '')
  const { data: comics } = useCharacterComics(characterId ?? '')
  console.log("comics", comics);

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isValidating) {
    return <div>Validating...</div>
  }

  return (
    <main>
      {character && <CharacterResume character={character} />}
      <section className={styles.comicsSection}>
        {comics &&
          <ComicList comics={comics} />
        }
      </section>
    </main >
  )
}