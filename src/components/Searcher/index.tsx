/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import styles from './Searcher.module.css';

interface SearcherProps {
  placeholder?: string;
  count: number;
  onSearch: (searchTerm: string) => void;
}

const Counter = ({ count }: { count: number }) => <p className={styles.counter}>{count} results</p>;

export const Searcher = ({ placeholder, count, onSearch }: SearcherProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce

  // Actualiza la búsqueda cuando se cambia el valor debounced
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <search className={styles.searcher}>
      <form className={styles.searcherContainer} onSubmit={(e) => e.preventDefault()}>
        <img className={styles.searcherIcon} src="/search_icon.svg" alt="search icon" />
        <input
          className={styles.searcherInput}
          type="search"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
      <Counter count={count} />
    </search>
  );
};
