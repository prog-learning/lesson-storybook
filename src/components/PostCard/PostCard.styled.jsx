import styled, { css } from 'styled-components';

export const StyledPostCard = styled.div`
  /* reset */
  h2,
  p {
    padding: 0;
    margin: 0;
  }

  /* style */
  width: 300px;
  font-size: 16px;
  padding: 12px 24px;
  border: 2px solid #333;
  border-radius: 12px;
  box-shadow: 0 0 8px #ccc;

  > h2 {
    font-size: 20px;
    padding-bottom: 4px;
    margin-bottom: 12px;
  }
  > p {
    font-size: 14px;
  }
  > .tag-list {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    .tag {
      font-size: 10px;
      border-radius: 4px;
      padding: 2px 4px;
      margin: 4px;
    }
  }
  > small {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    text-align: right;
  }

  ${({ dark }) =>
    dark
      ? css`
          color: #fff;
          background-color: #333;
          > h2 {
            border-bottom: 1px solid #fff;
          }
          > .tag-list > .tag {
            border: 0.5px solid #fff;
          }
        `
      : css`
          color: #333;
          background-color: #fff;
          > h2 {
            border-bottom: 1px solid #333;
          }
          > .tag-list > .tag {
            border: 0.5px solid #333;
          }
        `};

  &:hover {
    animation: hurueru 0.5s infinite;
    @keyframes hurueru {
      0% {
        transform: translate(0px, 0px) rotateZ(0deg);
      }
      25% {
        transform: translate(2px, 2px) rotateZ(1deg);
      }
      50% {
        transform: translate(0px, 2px) rotateZ(0deg);
      }
      75% {
        transform: translate(2px, 0px) rotateZ(-1deg);
      }
      100% {
        transform: translate(0px, 0px) rotateZ(0deg);
      }
    }
  }
`;
