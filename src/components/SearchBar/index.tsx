import React, { FC, useState } from 'react';

import { Search } from 'lucide-react';
import {
  SearchContainer,
  SearchInput,
  SearchButton
} from './styles';

interface SearchBarProps {
  onClickSearch: (searchQuery: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const SearchBar: FC<SearchBarProps> = props => {
  const {
    onClickSearch,
    placeholder,
    isLoading,
  } = props;

  const [query, setQuery] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  const searchHandler = () => {
    if (isLoading) return;
    onClickSearch(query);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        disabled={isLoading}
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />

      <SearchButton onClick={searchHandler} disabled={isLoading}>
        <Search size={16} />
        {isLoading ? 'Searching...' : 'Search'}
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
