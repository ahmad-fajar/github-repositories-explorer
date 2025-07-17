import React, { FC, memo, useState } from 'react';

import RepositoryCard, { RepositoryCardProps } from '@/components/RepositoryCard';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  RepositoriesContainer,
  UserCardContainer,
  UserCardHeader,
} from './styles';

export interface UserCardProps {
  id: number;
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
      {...repository}
    />
  ));

  return (
    <UserCardContainer>
      <UserCardHeader>
        <p>{username}</p>
        <Chevron onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} />
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
