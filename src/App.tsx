import React, { ReactNode, useEffect, useState } from 'react';

import { ToastProvider, useToast } from '@/context/ToastContext';
import useGetRepositories from '@/hooks/useGetRepositories';
import useGetUsers from '@/hooks/useGetUsers';

import ErrorBoundary from '@/components/ErrorBoundary';
import SearchBar from '@/components/SearchBar';
import { ToastType } from '@/components/Toast';
import UserCard from '@/components/UserCard';
import {
  AppContainer,
  Frame,
  SearchQuery
} from './style';

import { parseReponses } from '@/helper/app';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { toast } = useToast();

  const {
    data: users = [],
    isLoading: isLoadingUsers,
    error: errorUsers,
  } = useGetUsers(searchQuery);

  const repositories = useGetRepositories(users.map(user => user.login));
  const isLoadingRepositories = repositories.some(
    repository => repository.isLoading,
  );
  const isLoading = isLoadingUsers || isLoadingRepositories;

  const searchHandler = (sQuery: string): void => {
    setSearchQuery(sQuery);
  };

  const { result: cardData, repositoryError } = parseReponses(users, repositories);
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

  const errorMessage = repositoryError || errorUsers;
  useEffect(() => {
    if (errorMessage) {
      toast({ message: errorMessage as string, type: ToastType.error });
    }
  }, [errorMessage]);

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

const Wrapped = () => (
  <ErrorBoundary>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ErrorBoundary>
);

export default Wrapped;
