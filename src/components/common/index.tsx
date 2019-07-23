import ReactSVG from 'react-svg';
import styled from 'styled-components';

interface StringProps {
  [key: string]: string;
}

const SVGModel = ({ className, src }: StringProps) => (
  <ReactSVG
    beforeInjection={svg => {
      svg.classList.add(className);
    }}
    src={src}
  />
);

export const SVGS = {
  ICO_CHAT: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-chat-y-5.svg" />,
  ICO_HEART: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-heart-off.svg" />,
  ICO_CHEVRON_RIGHT: ({ className }: StringProps) => (
    <SVGModel className={className} src="/static/svg/ic-chevron-right-blk.svg" />
  ),
  ICO_CHEVRON_DOWN: ({ className }: StringProps) => (
    <SVGModel className={className} src="/static/svg/ic-chevron-down-2.svg" />
  ),
  ICO_SECRET: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-secret-blk.svg" />,
  ICO_VIEW: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-view-y-5.svg" />,
  ICO_SEND: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-send-off-g-300.svg" />,
  ICO_PHOTO: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-photo-y-5.svg" />,
  MODAL_POPUP: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/modal.svg" />
};

export const Image = styled.img`
  width: 100%;
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const FlexButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const FlexSection = styled.section`
  display: flex;
`;

export const Article = styled.article`
  padding-left: 4.5vw;
  padding-right: 4.5vw;
  @media (min-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ProfileImg = styled.img<{ isHidden?: boolean }>`
  border-radius: 50%;
  width: 15vw;
  height: 15vw;
  visibility: ${props => (props.isHidden ? 'hidden' : 'visible')};
  @media (min-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

export interface IUnderlinedText {
  text: string;
  labelClassName: string;
  underlineClassName: string;
}

export const UnderlinedText = ({ text, labelClassName, underlineClassName }: IUnderlinedText) => {
  const Label = styled.div`
    z-index: 1;
  `;
  const Underline = styled.div`
    position: absolute;
    width: 100%;
    bottom: 2px;
  `;
  return (
    <FlexDiv style={{ position: 'relative' }}>
      <Label className={labelClassName}>{text}</Label>
      <Underline className={underlineClassName} />
    </FlexDiv>
  );
};
