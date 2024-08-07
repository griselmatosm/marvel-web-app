/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, screen } from '@testing-library/react';
import { CharacterResume } from '..';
import { render } from '../../../__tests__/tests-utils';
import { FavoritesProvider } from '../../../contexts/FavoritesContext';
import { Character } from '../../../interfaces/Character';

const character: Character = {
  id: 1,
  name: 'Spider-Man',
  description: 'Friendly neighborhood Spider-Man',
  thumbnail: {
    path: 'http://path/to/image',
    extension: 'jpg',
  },
};

describe('CharacterResume', () => {
  it('renders CharacterResume component', () => {
    render(
      <FavoritesProvider>
        <CharacterResume character={character} />
      </FavoritesProvider>
    );

    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    expect(screen.getByText('Friendly neighborhood Spider-Man')).toBeInTheDocument();
    expect(screen.getByAltText('Spider-Man')).toBeInTheDocument();
  });

  it('favorites button toggles correctly', () => {
    render(
      <FavoritesProvider>
        <CharacterResume character={character} />
      </FavoritesProvider>
    );

    const button = screen.getByRole('button');

    // Initially, HeartIconEmpty should be rendered
    expect(screen.getByTestId('heart-icon-empty')).toBeInTheDocument();

    fireEvent.click(button);

    // After clicking, HeartIconFilled should be rendered
    expect(screen.getByTestId('heart-icon-filled')).toBeInTheDocument();
  });
});
