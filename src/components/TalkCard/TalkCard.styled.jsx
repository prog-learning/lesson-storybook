import styled from 'styled-components';

export const StyledTalkCard = styled.div`
  display: flex;
  .image-icon {
    margin: 16px 20px 0 0;
    z-index: 99;
    img {
      width: 80px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }
  .message {
    width: 300px;
    position: relative;
    padding: 24px;
    background-color: #a1f29d;
    font-size: 18px;
    color: #222;
    border-radius: 12px;

    &:before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-radius: 50%;
      transform: rotate(45deg);
      border-top: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-left: 25px solid #a1f29d;
      position: absolute;
      top: 22px;
      left: -15px;
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-radius: 50%;
      transform: rotate(45deg);
      border-top: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-left: 25px solid #ffffff; // 背景色
      position: absolute;
      top: 40px;
      left: -25px;
    }
  }
`;
