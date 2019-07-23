import styled from 'styled-components';
import { FlexButton } from './common';

const TopBanner = styled.header`
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
  .header {
    &__title {
      margin: 0;
      font-size: 4.2vw;
      font-weight: normal;
      @media (min-width: 480px) {
        font-size: 16px;
      }
    }
    &__btn {
      align-items: center;
      border: solid 1px #000000;
      background-color: #ffffff;
      justify-content: center;
      border-radius: 16px;
      width: 23vw;
      height: 9vw;
      font-size: 3.8vw;
      @media (min-width: 480px) {
        width: 85px;
        height: 32px;
        font-size: 14px;
      }
    }
  }
`;

const Header = () => {
  return (
    <TopBanner>
      <h1 className="header__title">
        <span>남사친, 여사친, 동네친구는 </span>
        <strong>#셀소!</strong>
      </h1>
      <FlexButton className="header__btn">
        <span>앱다운로드</span>
      </FlexButton>
    </TopBanner>
  );
};

export default Header;
