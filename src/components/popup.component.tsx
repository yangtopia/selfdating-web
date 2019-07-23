import styled from 'styled-components';
import { FlexDiv, SVGS } from './common';

interface IFCModalPopup {
  isShow: boolean;
  onClickBackground?: () => any;
  onClickButton?: () => any;
}

const PopupWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 2;
`;
const PopupInnerWrap = styled(FlexDiv)`
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 20%;
  z-index: 1;
`;

const Button = styled.button`
  position: absolute;
  width: 161px;
  height: 32px;
  bottom: 8%;
  border-radius: 16px;
  border: solid 1px #000000;
  background-color: #ffe95e;
`;

const PopupComponent = ({ isShow, onClickBackground, onClickButton }: IFCModalPopup) => {
  return (
    isShow && (
      <PopupWrap onClick={() => onClickBackground()}>
        <PopupInnerWrap>
          <SVGS.MODAL_POPUP />
          <Button
            onClick={e => {
              onClickButton();
              e.stopPropagation();
            }}
          >
            <span>지금바로 다운받기!</span>
          </Button>
        </PopupInnerWrap>
      </PopupWrap>
    )
  );
};

export default PopupComponent;
