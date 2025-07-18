# github-repositories-explorer

A React application to search GitHub user and their repositories.

## Features
- Search GitHub users by username.
- Display each user's repositories with following informations:
  - Repository name.
  - Link to repository (click on repository name).
  - Description.
  - Star count.

## Tech Stack
- React
- Vite
- TanStack Query
- Styled Components
- Lucide React
- Typescript

## Prerequisites
- Node v20 or higher.
- NPM or Yarn.

## How to use
- Clone repository.
- Install dependencies `yarn` or `npm install`.
- Start development server `yarn dev` or `npm run dev`.
- App run in `localhost:3000/github-repositories-explorer/`.

## Deployment
This app is deployed at GitHub pages. To deploy new changes, follow steps below:
- Commit all new changes.
- Run `yarn deploy`.
- Visit [https://ahmad-fajar.github.io/github-repositories-explorer/](https://ahmad-fajar.github.io/github-repositories-explorer/).
- There might be a delay before the changes reflected on GitHub page (cache). 

## Limitations
- Display only top 5 users returned from GitHub.
- This app uses API GitHub without authentication. Hence subject to certain limitations.
- Unauthenticated users are limited to 60 requests per hour ([source](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#primary-rate-limit-for-unauthenticated-users)).
- This app use `/users/{username}/repos` endpoint to get repository list. According to [GitHub documentation](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user), this endpoint will return only public repositories if called without authentication.
