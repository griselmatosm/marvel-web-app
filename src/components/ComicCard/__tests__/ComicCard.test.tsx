/* eslint-disable react/react-in-jsx-scope */
import { screen } from '@testing-library/react';
import { ComicCard } from '..';
import { render } from '../../../__tests__/tests-utils';
import { Comic } from '../../../interfaces/Comic';

const comic: Comic = {
  id: 1,
  title: 'Amazing Spider-Man',
  releaseDate: '2024-08-06',
  thumbnail: 'http://path/to/image.jpg',
};

test('renders ComicCard component', () => {
  render(<ComicCard comic={comic} />);

  const year = new Date(comic.releaseDate).getFullYear();

  expect(screen.getByText(/Amazing Spider-Man/i)).toBeInTheDocument();
  expect(screen.getByText(year.toString())).toBeInTheDocument();
  expect(screen.getByAltText(/Amazing Spider-Man/i)).toBeInTheDocument();
});
