import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  @media (min-width: 480px) {
    max-width: 360px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Article = styled.article`
  padding-left: 7vw;
  padding-right: 7vw;
  /* background-color: beige; */
  @media (min-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
