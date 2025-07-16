import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background: #f6f8fa;
  padding: 40px 20px;
`;

export const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
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
  min-width: 300px;
  max-width: 600px;
`;
