import { StyledIconButton } from './IconButton.styled';

export const IconButton = ({ svg, bgColor, onClick }) => {
  return (
    <StyledIconButton bgColor={bgColor} onClick={onClick}>
      {svg}
    </StyledIconButton>
  );
};
