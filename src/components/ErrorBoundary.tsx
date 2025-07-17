import React, {
  Component,
  ErrorInfo,
  FC,
  ReactNode,
} from 'react';
import styled from 'styled-components';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ErrView />;
    }
    return this.props.children;
  }
}

const ErrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrHeader = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
`;

const ErrMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 1rem 0 2rem;
`;

const ReloadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ErrView: FC = () => (
  <ErrContainer>
    <ErrHeader>Oops! Something went wrong</ErrHeader>
    <ErrMessage>Please try again later</ErrMessage>
    <ReloadButton onClick={() => window.location.reload()}>
      Reload
    </ReloadButton>
  </ErrContainer>
);

export default ErrorBoundary;
