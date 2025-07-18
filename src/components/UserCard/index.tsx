import React, { FC, memo, useState } from 'react';

import RepositoryCard, { RepositoryCardProps } from '@/components/RepositoryCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

import {
  RepositoriesContainer,
  UserCardContainer,
  UserCardHeader,
} from './styles';
import ShowMore from './ShowMore';

export interface UserCardProps {
  id: number;
  username: string;
  repositories: RepositoryCardProps[];
}

const UserCard: FC<UserCardProps> = props => {
  const { username, repositories } = props;
  const [shownRepos, setShownRepos] = useState<number>(5);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Chevron = isOpen ? ChevronUp : ChevronDown;

  const repoCount = repositories.length;
  const canShowMore = shownRepos <= repoCount;

  const repositoryCards = repositories.slice(0, shownRepos).map(repository => (
    <RepositoryCard
      key={repository.repositoryName}
      {...repository}
    />
  ));

  if (canShowMore) {
    repositoryCards.push(<ShowMore onClick={() => setShownRepos(prev => prev + 5)} key="show-more" />);
  }

  const chevronClickHandler = () => {
    if (isOpen) {
      setShownRepos(5);
    }
    setIsOpen(!isOpen);
  };

  return (
    <UserCardContainer>
      <UserCardHeader>
        <p>{username}</p>
        <Chevron onClick={chevronClickHandler} style={{ cursor: 'pointer' }} />
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
