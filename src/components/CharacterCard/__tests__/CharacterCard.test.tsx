/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { CharacterCard } from '..';
import { render } from '../../../__tests__/tests-utils';
import { Character } from '../../../interfaces/Character';

const character: Character = {
  id: 1011334,
  name: '3-D Man',
  description: '',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb7214',
    extension: 'jpg',
  },
};

describe('CharacterCard', () => {
  it('should render CharacterCard component', async () => {
    render(<CharacterCard character={character} />);

    await waitFor(() => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });

  it('favorite button toggles correctly', async () => {
    render(<CharacterCard character={character} />);
    const favoriteButton = screen.getByRole('button');
    // Initially, HeartIconEmpty should be rendered
    expect(screen.getByTestId('heart-icon-empty')).toBeInTheDocument();

    fireEvent.click(favoriteButton);

    // After clicking, HeartIconFilled should be rendered
    expect(screen.getByTestId('heart-icon-filled')).toBeInTheDocument();
  })
})