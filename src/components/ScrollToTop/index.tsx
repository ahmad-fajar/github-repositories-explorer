import React, { FC, memo } from 'react';
import styled from 'styled-components';

import { ChevronUp } from '@/components/icons/Chevron';

type ScrollToTopProps = {
  onClick: () => void;
};

const ScrollToTop: FC<ScrollToTopProps> = props => {
  const { onClick } = props;
  return (
    <UpBtn onClick={onClick}>
      <ChevronUp stroke="grey" />
    </UpBtn>
  );
}

const UpBtn = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 12px;
  left: 12px;
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgrey;
  background-color: white;
`;

export default memo(ScrollToTop);
