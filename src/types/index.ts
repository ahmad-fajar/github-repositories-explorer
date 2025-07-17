export type UserResp = {
  items: GitHubUser[];
};

export type GitHubUser = {
  id: number;
  login: string;
  html_url: string;
};

export type RepositoryResp = Repository[];

export type Repository = {
  id: number;
  description: string;
  html_url: string;
  name: string;
  stargazers_count: number;
};

export type GitHubError = {
  documentation_url: string;
  message: string;
  status: number;
};
