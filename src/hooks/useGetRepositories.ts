import { useQueries } from '@tanstack/react-query';
import fetchGithub from './axios';

import { RepositoryResp } from '@/types';

const useGetRepositories = (usernames: string[]) => useQueries({
  queries: usernames.map(username => ({
    queryKey: ['repositories', username],
    queryFn: () => fetchGithub
      .get<RepositoryResp>(`/users/${username}/repos`)
      .then(res => res.data),
    enabled: !!username,
  })),
});

export default useGetRepositories;
