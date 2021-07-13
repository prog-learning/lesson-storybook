import { StyledTalkCard } from './TalkCard.styled';

export const TalkCard = ({ imgSrc, message }) => {
  return (
    <StyledTalkCard>
      <div className='image-icon'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='message'>{message}</div>
    </StyledTalkCard>
  );
};
