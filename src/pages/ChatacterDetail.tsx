/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom';
import { CharacterResume } from '../components/CharacterResume';
import { useCharacterDetail } from '../hooks/useCharacterDetail';
import { Character } from '../interfaces/Character';

export const CharacterDetail = () => {
  const { characterId } = useParams()
  const { data: character, isError, isLoading, isValidating } = useCharacterDetail(characterId || '')
  console.log({ characterId });
  console.log({ character });

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isValidating) {
    return <div>Validating...</div>
  }

  const characterDetail: Character = {
    id: character?.id,
    name: character?.name,
    description: character?.description,
    thumbnail: {
      path: character?.thumbnail.path,
      extension: character?.thumbnail.extension
    },
  }

  return (
    <main>
      <CharacterResume character={characterDetail} />
    </main>
  )
}