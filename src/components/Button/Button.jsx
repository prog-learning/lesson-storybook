import { StyledButton } from './Button.styled';

export const Button = ({
  label,
  color,
  bgColor,
  round = false,
  size = 'middle',
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      bgColor={bgColor}
      round={round}
      size={size}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
