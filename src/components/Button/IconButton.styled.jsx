import styled from 'styled-components';

export const StyledIconButton = styled.button`
  /* reset */
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  /* style */
  width: 60px;
  height: 60px;
  font-size: 16px;
  padding: 12px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'gray')};
  svg {
    color: #fff;
  }

  &:hover {
    transform: scale(0.94);
  }
  &:active {
    transform: scale(0.9);
  }
`;
