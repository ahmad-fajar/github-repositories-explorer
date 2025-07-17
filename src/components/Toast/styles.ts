import styled, { css, keyframes } from 'styled-components';
import { ToastPosition, ToastType } from './index';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const getToastColor = (type: ToastType) => {
  const colors = {
    [ToastType.success]: css`
      background-color: #ecfdf5;
      border-color: #34d399;
      color: #065f46;
    `,
    [ToastType.error]: css`
      background-color: #fee2e2;
      border: 1px solid #ef4444;
      color: #dc2626;
    `,
  };
  return colors[type];
};

export const ToastContainer = styled.div<{ position: ToastPosition }>`
  position: fixed;
  ${({ position }) => {
    const positions = {
      [ToastPosition.top]: css`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `,
      [ToastPosition.middle]: css`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `,
      [ToastPosition.bottom]: css`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `,
    };
    return positions[position];
  }}
  z-index: 9999;
  animation: ${slideIn} 0.3s ease-in-out;

  &.exit {
    animation: ${slideOut} 0.3s ease-in-out forwards;
  }
`;

export const ToastContent = styled.div<{ type?: ToastType }>`
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 500px;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  ${({ type = ToastType.success }) => getToastColor(type)}
`;

export const ToastIcon = styled.div<{ type?: ToastType }>`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    ${({ type = ToastType.success }) => {
      const colors = {
        success: css`color: #34d399;`,
        error: css`color: #f87171;`,
      };
      return colors[type];
    }}
  }
`;

export const ToastMessage = styled.p`
  margin: 0;
  flex: 1;
  font-size: 0.875rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  svg {
    color: currentColor;
  }
`;
