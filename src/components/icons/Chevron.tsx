import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

export const ChevronUp = styled(ChevronDown)`
  transform: rotate(180deg);
  transition: transform 0.2s;
`;

export { ChevronDown };
