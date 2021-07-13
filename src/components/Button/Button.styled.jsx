import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  /* reset */
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  /* style */
  font-size: 16px;
  padding: 12px 24px;
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'gray')};
  ${({ round }) => round && 'border-radius: 50vh'};

  ${({ size }) =>
    size === 'big' &&
    css`
      font-size: 56px;
      width: 500px;
      height: 180px;
    `};
  &:hover {
    transform: scale(0.94);
  }
  &:active {
    transform: scale(0.9);
  }
`;
