import React, { ReactNode, useState } from 'react';

import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import {
  AppContainer,
  Frame,
  SearchQuery
} from './style';

import { dummyData } from '@/mock';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchHandler = () => {
    console.log('searchHandler', searchQuery);
  };

  const dummy = searchQuery ? dummyData : [];
  const userCards: ReactNode[] = dummy.map(card => {
    return (
      <UserCard
        key={card.id}
        username={card.username}
        repositories={card.repositories}
      />
    );
  });

  return (
    <AppContainer>
      <Frame>
        <SearchBar
          username={searchQuery}
          onChange={setSearchQuery}
          onClickSearch={searchHandler}
          placeholder="Enter username"
        />

        {searchQuery && (
          <SearchQuery>
            Search query: "{searchQuery}"
          </SearchQuery>
        )}

        {!!userCards.length && (
          <div>
            {userCards}
          </div>
        )}
      </Frame>
    </AppContainer>
  );
}

export default App;
