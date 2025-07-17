import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #f6f8fa;
  padding: 40px 20px;
  min-width: 300px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const SearchQuery = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #848484;
  margin: 16px 0;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;
