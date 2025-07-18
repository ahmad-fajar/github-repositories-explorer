import React, { FC, memo, ReactNode } from 'react';

import { ShowMoreBtn } from './styles';

interface ShowMoreProps {
  text?: string | ReactNode;
  onClick: () => void;
}

const ShowMore: FC<ShowMoreProps> = props => {
  const { text = 'Show more..' , onClick } = props;

  return (
    <ShowMoreBtn onClick={onClick}>
      {text}
    </ShowMoreBtn>
  );
};

export default memo(ShowMore);
