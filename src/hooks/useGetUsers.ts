import { useQuery } from '@tanstack/react-query';

import { GitHubUser, UserResp } from '@/types';
import { githubFetch } from '@/utils/githubFetch';

const queryFn = (username: string) => () => githubFetch<UserResp>(`/search/users?q=${username}&per_page=5&page=1`)
  .then(res => res.items);

const useGetUsers = (username: string) => useQuery<GitHubUser[]>({
  queryKey: ['users', username],
  queryFn: queryFn(username),
  enabled: !!username,
  initialData: [],
  retry: false,
  // retry: 3,
  // retryDelay: 1000,
});

export default useGetUsers;
