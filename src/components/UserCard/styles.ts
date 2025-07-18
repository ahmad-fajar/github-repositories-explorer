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

export const ShowMoreBtn = styled.div`
  width: 100%;
  padding: 4px 8px;
  margin: 8px 0;
  font-size: 12px;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
