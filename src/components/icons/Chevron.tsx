import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'lucide-react';

export const ChevronDown = ChevronDownIcon;

export const ChevronUp = styled(ChevronDown)`
  transform: rotate(180deg);
  transition: transform 0.2s;
`;
