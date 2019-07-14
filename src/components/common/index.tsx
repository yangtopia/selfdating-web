import styled from 'styled-components';
import { CSSProperties } from 'react';
import ReactSVG from 'react-svg';

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
  ICO_CHAT: ({ className }: StringProps) => <SVGModel className={className} src="/static/svg/ic-chat-y-5.svg" />
};

export const Image = styled.img`
  width: 100%;
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Article = styled.article`
  padding-left: 7vw;
  padding-right: 7vw;
  @media (min-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 15vw;
  height: 15vw;
`;

export interface IUnderlinedText {
  text: string;
  textStyle?: CSSProperties;
  lineHeight?: string;
  lineRadius?: string;
  lineColor?: string;
}

export const UnderlinedText = ({
  text,
  textStyle = { fontSize: '3.5vw', letterSpacing: '-0.2px', color: '#060505' },
  lineHeight = '6px',
  lineRadius = '3px',
  lineColor = '#ffe95e'
}: IUnderlinedText) => {
  const Label = styled.div`
    z-index: 1;
  `;
  const Underline = styled.div`
    position: absolute;
    width: 100%;
    bottom: 2px;
  `;
  return (
    <Flex style={{ position: 'relative' }}>
      <Label style={textStyle}>{text}</Label>
      <Underline style={{ height: lineHeight, backgroundColor: lineColor, borderRadius: lineRadius }} />
    </Flex>
  );
};
