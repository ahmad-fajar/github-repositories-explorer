import React, { ReactNode, useState } from 'react';

import useGetRepositories from '@/hooks/useGetRepositories';
import useGetUsers from '@/hooks/useGetUsers';

import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import {
  AppContainer,
  Frame,
  SearchQuery
} from './style';

import { parseReponses } from '@/helper/app';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: users = [], isLoading: isLoadingUsers } = useGetUsers(searchQuery);

  const repositories = useGetRepositories(users.map(user => user.login));
  const isLoadingRepositories = repositories.some(repository => repository.isLoading);
  const isLoading = isLoadingUsers || isLoadingRepositories;

  const searchHandler = (sQuery: string): void => {
    setSearchQuery(sQuery);
  };

  const cardData = parseReponses(users, repositories);
  const userCards: ReactNode[] = cardData.map(card => {
    return (
      <UserCard
        key={card.id}
        id={card.id}
        username={card.username}
        repositories={card.repositories}
      />
    );
  });

  return (
    <AppContainer>
      <Frame>
        <SearchBar
          onClickSearch={searchHandler}
          placeholder="Enter username"
          isLoading={isLoading}
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
