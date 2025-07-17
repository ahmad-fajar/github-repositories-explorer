import { useQueries } from '@tanstack/react-query';

import { RepositoryResp } from '@/types';
import { githubFetch } from '@/utils/githubFetch';

const queryFn = (username: string) => () => githubFetch<RepositoryResp>(`/users/${username}/repos`)
  .then(res => res);

const useGetRepositories = (usernames: string[]) => useQueries({
  queries: usernames.map(username => ({
    queryKey: ['repositories', username],
    queryFn: queryFn(username),
    enabled: !!username,
    retry: false,
    // retry: 3,
    // retryDelay: 1000,
  })),
});

export default useGetRepositories;
