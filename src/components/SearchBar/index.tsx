import React, { FC } from 'react';

import { Search } from 'lucide-react';
import {
  SearchContainer,
  SearchInput,
  SearchButton
} from './styles';

interface SearchBarProps {
  username: string;
  onChange: (username: string) => void;
  onClickSearch: () => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = props => {
  const {
    onChange,
    onClickSearch,
    placeholder,
    username,
  } = props;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={username}
        onChange={(e) => onChange(e.target.value.trim())}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />

      <SearchButton onClick={onClickSearch}>
        <Search size={16} />
        Search
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
