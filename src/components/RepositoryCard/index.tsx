import React, { FC, memo } from 'react';

import { Star } from 'lucide-react';
import {
  RepoDesc,
  RepoHeader,
  RepoName,
  RepositoryContainer,
  StarCount,
} from './styles';

export interface RepositoryCardProps {
  repositoryDescription: string;
  repositoryName: string;
  repositoryUrl: string;
  star: number;
}

const RepositoryCard: FC<RepositoryCardProps> = props => {
  const { repositoryDescription, repositoryName, repositoryUrl, star } = props;

  return (
    <RepositoryContainer>
      <RepoHeader>
        <RepoName href={repositoryUrl} target="_blank" rel="noopener noreferrer">
          {repositoryName}
        </RepoName>
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
