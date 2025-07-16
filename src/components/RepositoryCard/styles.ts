import styled from 'styled-components';

export const RepositoryContainer = styled.div`
  background: #e0e0e0;
  padding: 12px 8px;
  border-radius: 8px;
  &:not(:first-child) {
    margin-top: 8px;
  }
`;
  
export const RepoHeader = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StarCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RepoDesc = styled.p`
  font-size: 14px;
  color: #666;
`;
