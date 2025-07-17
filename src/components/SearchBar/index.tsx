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
}

const SearchBar: FC<SearchBarProps> = props => {
  const {
    onClickSearch,
    placeholder,
  } = props;

  const [query, setQuery] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickSearch(query);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />

      <SearchButton onClick={() => onClickSearch(query)}>
        <Search size={16} />
        Search
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
