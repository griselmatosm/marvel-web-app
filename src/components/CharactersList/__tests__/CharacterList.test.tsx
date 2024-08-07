/* eslint-disable react/react-in-jsx-scope */
import { screen } from '@testing-library/react';
import { CharactersList } from '..';
import { render } from '../../../__tests__/tests-utils';
import { Character } from '../../../interfaces/Character';

const characters: Character[] = [
  {
    id: 1,
    name: 'Spider-Man',
    description: 'Friendly neighborhood Spider-Man',
    thumbnail: {
      path: 'http://path/to/image1',
      extension: 'jpg',
    },
  },
  {
    id: 2,
    name: 'Iron Man',
    description: 'Genius, billionaire, playboy, philanthropist',
    thumbnail: {
      path: 'http://path/to/image2',
      extension: 'jpg',
    },
  },
];

describe('CharacterList', () => {
  it('should render CharacterList component', async () => {
    render(<CharactersList characters={characters} />);

    const characterNames = characters.map(character => screen.getByText(character.name));
    characterNames.forEach(characterName => expect(characterName).toBeInTheDocument());

  });
})