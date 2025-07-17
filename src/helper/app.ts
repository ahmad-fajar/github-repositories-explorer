import { UseQueryResult } from '@tanstack/react-query';
import {
  GitHubUser,
  RepositoryResp,
} from '@/types';
import { UserCardProps } from '@/components/UserCard';

type ParsedResponses = {
  result: UserCardProps[];
  repositoryError: string;
};
export const parseReponses = (
  users: GitHubUser[],
  repositoriesResp: UseQueryResult<RepositoryResp, Error>[],
): ParsedResponses => {
  const result: UserCardProps[] = [];
  let repositoryError = '';

  let temp: UserCardProps;
  for (let i = 0, len = users.length; i < len; i++) {
    const { error } = repositoriesResp?.[i];
    if (error) {
      repositoryError = typeof error === 'string' ? error : 'Something went wrong';
      break;
    }

    temp = {} as UserCardProps;
    temp.username = users[i].login;
    temp.id = users[i].id;
    temp.repositories = repositoriesResp?.[i]?.data?.map(repository => ({
      repositoryDescription: repository.description,
      repositoryName: repository.name,
      repositoryUrl: repository.html_url,
      star: repository.stargazers_count,
    })) || [];

    result.push(temp);
  }

  if (repositoryError) {
    return { result: [], repositoryError };
  }

  return { result, repositoryError: '' };
};
