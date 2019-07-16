import React from 'react';
import styled from 'styled-components';
import { Image } from '../../src/components/common';

export interface IPost {
  imageUrls?: string[];
  text: string;
}

const Paragraph = styled.p`
  font-size: 5vw;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #060505;
`;

const PostComponent = ({ imageUrls, text }: IPost) => {
  return (
    <React.Fragment>
      {imageUrls.map((url, idx) => (
        <Image key={idx} src={url} />
      ))}
      <Paragraph>{text}</Paragraph>
    </React.Fragment>
  );
};

export default PostComponent;
