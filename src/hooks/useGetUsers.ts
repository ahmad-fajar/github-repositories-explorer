import { useQuery } from '@tanstack/react-query';
import fetchGithub from './axios';
import { GitHubUser, UserResp } from '@/types';

const useGetUsers = (username: string) => useQuery<GitHubUser[]>({
  queryKey: ['users', username],
  queryFn: () => fetchGithub
    .get<UserResp>(`/search/users?q=${username}&per_page=5&page=1`)
    .then(res => res.data.items),
  enabled: !!username,
  initialData: [],
});

export default useGetUsers;
