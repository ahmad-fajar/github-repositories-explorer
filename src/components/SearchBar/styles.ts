import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SearchInput = styled.input<{ disabled?: boolean }>`
  padding: 12px 16px;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  font-size: 14px;
  background: ${({ disabled }) => disabled ? '#c5c5c5' : '#f6f8fa'};
  color: ${({ disabled }) => disabled ? '#80ade1' : '#24292f'};
  
  &::placeholder {
    color: #656d76;
  }
  
  &:focus {
    outline: none;
    border-color: #0969da;
    background: white;
  }
`;

export const SearchButton = styled.button<{ disabled?: boolean }>`
  padding: 12px 24px;
  background: ${({ disabled }) => disabled ? '#80ade1' : '#0969da'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background: #0860ca;
  }
  
  &:active {
    background: #0757ba;
  }
`; 