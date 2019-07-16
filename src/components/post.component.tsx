import React from 'react';
import styled from 'styled-components';
import { Comment, LikedUser, NewPost } from '../models/post.model';
import { FlexDiv, FlexSection, Image, ProfileImg, SVGS } from './common';

export interface IPost {
  imageUrls?: string[];
  text: string;
  likeCount?: number;
  likedUsers?: LikedUser[];
  comments?: Comment[];
  newPosts?: NewPost[];
}

const Paragraph = styled.p`
  font-size: 5vw;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #060505;
`;

const PostWrap = styled(FlexSection)`
  flex-direction: column;
  .likePanel {
    padding: 3.5vw 0;
    font-size: 3.4vw;
    line-height: 3vw;
    letter-spacing: -0.4px;
    & > div {
      align-items: center;
    }
    &__ico-heart {
      margin-right: 1vw;
    }
    &__count {
      flex: 0.4;
      border-right: 1px solid #d2d2d2;
      border-radius: 0.5px;
      margin-right: 3.5vw;
    }
    &__users {
      flex: 1;
      overflow-x: scroll;
      scrollbar-width: none;
      position: relative;
    }
    &__users::-webkit-scrollbar {
      display: none;
    }
    &__userImg {
      margin-right: 2.2225vw;
    }
    &__number {
      flex: 0.1;
      margin-left: 3.5vw;
      position: relative;
      .users__overlay {
        position: absolute;
        left: -155%;
        width: 100%;
        height: 100%;
        background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }
  }
`;

const PostComponent = ({ imageUrls, text, likeCount, likedUsers }: IPost) => {
  return (
    <PostWrap>
      {imageUrls.map((url, idx) => (
        <Image key={idx} src={url} />
      ))}
      <Paragraph>{text}</Paragraph>
      <FlexSection className="likePanel">
        <FlexDiv className="likePanel__count">
          <SVGS.ICO_HEART className="likePanel__ico-heart" />
          <span>좋아요 {likeCount}</span>
        </FlexDiv>
        <FlexDiv className="likePanel__users">
          {likedUsers.map((user, idx) => (
            <ProfileImg className="likePanel__userImg" key={idx} size="6.67vw" src={user.image} />
          ))}
        </FlexDiv>
        <FlexDiv className="likePanel__number">
          <div className="users__overlay" />
          <span>{likedUsers.length}</span>
          <SVGS.ICO_CHEVRON_RIGHT />
        </FlexDiv>
      </FlexSection>
    </PostWrap>
  );
};

export default PostComponent;
