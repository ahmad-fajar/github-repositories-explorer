import React, { FC, memo } from 'react';

import { Star } from 'lucide-react';
import {
  RepoDesc,
  RepoHeader,
  RepositoryContainer,
  StarCount,
} from './styles';

export interface RepositoryCardProps {
  repositoryDescription: string;
  repositoryName: string;
  star: number;
}

const RepositoryCard: FC<RepositoryCardProps> = props => {
  const { repositoryDescription, repositoryName, star } = props;

  return (
    <RepositoryContainer>
      <RepoHeader>
        <p>{repositoryName}</p>
        <StarCount>
          {star}
          <Star fill="black" size={14} />
        </StarCount>
      </RepoHeader>

      <RepoDesc>{repositoryDescription}</RepoDesc>
    </RepositoryContainer>
  );
};

export default memo(RepositoryCard);
