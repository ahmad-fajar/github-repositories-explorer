import React, { FC, memo, useState } from 'react';

import RepositoryCard, { RepositoryCardProps } from '@/components/RepositoryCard';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  RepositoriesContainer,
  UserCardContainer,
  UserCardHeader,
} from './styles';

export interface UserCardProps {
  username: string;
  repositories: RepositoryCardProps[];
}

const UserCard: FC<UserCardProps> = props => {
  const { username, repositories } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Chevron = isOpen ? ChevronUp : ChevronDown;

  const repositoryCards = repositories.map(repository => (
    <RepositoryCard
      key={repository.repositoryName}
      repositoryName={repository.repositoryName}
      repositoryDescription={repository.repositoryDescription}
      star={repository.star}
    />
  ));

  return (
    <UserCardContainer>
      <UserCardHeader>
        <p>{username}</p>
        <Chevron onClick={() => setIsOpen(!isOpen)} />
      </UserCardHeader>

      {isOpen && (
        <RepositoriesContainer>
          {repositoryCards}
        </RepositoriesContainer>
      )}
    </UserCardContainer>
  );
};

export default memo(UserCard);
