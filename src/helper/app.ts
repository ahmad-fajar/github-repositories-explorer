import { UseQueryResult } from '@tanstack/react-query';
import {
  GitHubUser,
  RepositoryResp,
} from '@/types';
import { UserCardProps } from '@/components/UserCard';

export const parseReponses = (
  users: GitHubUser[],
  repositoriesResp: UseQueryResult<RepositoryResp, Error>[],
): UserCardProps[] => {
  const result: UserCardProps[] = [];

  let temp: UserCardProps;
  users.forEach((user, i) => {
    temp = {} as UserCardProps;
    temp.username = user.login;
    temp.id = user.id;
    temp.repositories = repositoriesResp?.[i]?.data?.map(repository => ({
      repositoryDescription: repository.description,
      repositoryName: repository.name,
      repositoryUrl: repository.html_url,
      star: repository.stargazers_count,
    })) || [];
    result.push(temp);
  });

  return result;
};
