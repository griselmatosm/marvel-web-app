/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { Searcher } from '..';
import { render } from '../../../__tests__/tests-utils';

const onSearchMock = jest.fn();

describe('Searcher', () => {
  it('should render Searcher component', async () => {
    render(<Searcher placeholder='Search a character...' onSearch={onSearchMock} count={10} />);
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    });
  });

  it('should call onSearch on input change with debounce', async () => {
    render(<Searcher placeholder="Search..." count={10} onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'Spider' } });

    // Wait for the debounce time + some buffer
    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith('Spider');
    }, { timeout: 600 });
  });

  it('should display the correct count', () => {
    render(<Searcher placeholder="Search..." count={10} onSearch={onSearchMock} />);
    expect(screen.getByText(/10 results/i)).toBeInTheDocument();
  });
})