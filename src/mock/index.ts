import { UserCardProps } from '@/components/UserCard';

type Dummy = UserCardProps & {
  id: number;
};

export const dummyData: Dummy[] = [
  {
    id: 1,
    username: 'dummyuser1',
    repositories: [
      {
        repositoryName: 'dummyrepo1',
        repositoryDescription: 'dummydesc1',
        star: 10,
      },
      {
        repositoryName: 'dummyrepo12',
        repositoryDescription: 'dummydesc1',
        star: 10,
      },
    ],
  },
  {
    id: 2,
    username: 'dummyuser2',
    repositories: [
      {
        repositoryName: 'dummyrepo2',
        repositoryDescription: 'dummydesc2',
        star: 20,
      },
      {
        repositoryName: 'dummyrepo22',
        repositoryDescription: 'dummydesc2',
        star: 20,
      },
      {
        repositoryName: 'dummyrepo23',
        repositoryDescription: 'dummydesc2',
        star: 20,
      },
    ],
  },
  {
    id: 3,
    username: 'dummyuser3',
    repositories: [
      {
        repositoryName: 'dummyrepo3',
        repositoryDescription: 'dummydesc3',
        star: 30,
      },
      {
        repositoryName: 'dummyrepo42',
        repositoryDescription: 'dummydesc4',
        star: 40,
      },
      {
        repositoryName: 'dummyrepo52',
        repositoryDescription: 'dummydesc5',
        star: 50,
      },
    ],
  },
  {
    id: 4,
    username: 'dummyuser4',
    repositories: [
      {
        repositoryName: 'dummyrepo4',
        repositoryDescription: 'dummydesc4',
        star: 40,
      },
      {
        repositoryName: 'dummyrepo54',
        repositoryDescription: 'dummydesc5',
        star: 50,
      },
    ],
  },
  
];
