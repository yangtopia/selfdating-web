import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { FlexDiv, FlexSection, Image, ProfileImg, SVGS } from './common';
import { Comment } from '../models/viral.model';

const Wrap = styled(FlexSection)`
  flex-direction: column;
`;

const CommentWrap = styled(FlexDiv)`
  margin: 4.3vw 0;
  @media (min-width: 480px) {
    margin: 16px 0;
  }
`;

const CommentIconWrap = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ededed;
  background-color: #fff7c7;
  width: 15vw;
  height: 15vw;
  @media (min-width: 480px) {
    width: 59px;
    height: 59px;
  }
  .ico {
    width: 6.67vw;
    height: 6.67vw;
  }
`;

const CommentIcon = ({ comment }: { comment: Comment }) => (
  <CommentIconWrap>
    {(() => {
      switch (comment.status) {
        case 1:
        case 2:
        default:
          return <SVGS.ICO_SECRET className="icon" />;
        case 3:
          return <SVGS.ICO_VIEW className="icon" />;
      }
    })()}
  </CommentIconWrap>
);

const CommentContentWrap = styled(FlexDiv)`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 3.75vw;
  line-height: 1;
  letter-spacing: -0.4px;
  color: #9f9f9f;
  padding: 0.5vw 0 0.5vw 5vw;
  .timestamp {
    font-size: 3vw;
  }
  @media (min-width: 480px) {
    font-size: 17px;
    .timestamp {
      font-size: 14px;
    }
  }
`;

const CommentContent = ({ comment }: { comment: Comment }) => (
  <CommentContentWrap>
    {(() => {
      switch (comment.status) {
        case 1:
        case 2:
        default:
          return <div>비밀 댓글입니다. 글작성자만 볼 수 있어요.</div>;
        case 3:
          return <div>*****님이 당신의 프로필을 조회했어요.</div>;
      }
    })()}
    <div className="timestamp">{moment(comment.created_at).fromNow()}</div>
  </CommentContentWrap>
);

const CommentsComponent = ({ comments = [] }: { comments: Comment[] }) => (
  <Wrap>
    {comments.map((comment, idx) => (
      <CommentWrap key={idx}>
        <CommentIcon comment={comment} />
        <CommentContent comment={comment} />
      </CommentWrap>
    ))}
  </Wrap>
);

export default CommentsComponent;
