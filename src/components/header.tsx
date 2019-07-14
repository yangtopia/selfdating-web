import styled from 'styled-components';
import { Flex } from './common';

const TopBanner = styled.header`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vw;
  background: #ffe95e;
  padding: 0 7vw;
  @media (min-width: 480px) {
    padding: 0 75px;
    height: 56px;
  }
  .title {
    margin: 0;
    font-size: 4.2vw;
    font-weight: normal;
    @media (min-width: 480px) {
      font-size: 16px;
    }
  }
  .btn {
    align-items: center;
    border: solid 1px #000000;
    background-color: #ffffff;
    justify-content: center;
    border-radius: 16px;
    width: 22vw;
    height: 8vw;
    font-size: 3.8vw;
    @media (min-width: 480px) {
      width: 85px;
      height: 32px;
      font-size: 14px;
    }
  }
`;

const Header = () => {
  return (
    <TopBanner>
      <h1 className="title">
        <span>남사친, 여사친, 동네친구는 </span>
        <strong>#셀소!</strong>
      </h1>
      <Flex className="btn">앱다운로드</Flex>
    </TopBanner>
  );
};

export default Header;
