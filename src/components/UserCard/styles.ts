import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const UserCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  background: #f2f2f2;
`;

export const RepositoriesContainer = styled.div`
  padding: 8px 0 8px 24px;
`;