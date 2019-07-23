import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { FlexDiv, FlexSection, Image, ProfileImg, SVGS, UnderlinedText } from './common';
import { NewPost } from '../models/viral.model';
import isEmpty from 'lodash/isEmpty';

const Wrap = styled(FlexSection)`
  flex-direction: column;
  .title {
    justify-content: center;
    align-items: center;
    padding: 6.7vw 0;
    &__text--label {
      font-size: 5vw;
      font-weight: bold;
      color: #000000;
    }
    &__text--underline {
      height: 2vw;
      background-color: #ffe95e;
    }
  }
  @media (min-width: 480px) {
    .title {
      padding: 24px 0;
      &__text--label {
        font-size: 18px;
      }
      &__text--underline {
        height: 11px;
      }
    }
  }
`;

const NewPostWrap = styled(FlexDiv)`
  margin: 4.3vw 0;
  padding: 0 4.3vw;
  .newPost {
    position: relative;
    flex: 1;
    &__userImg {
      width: 15vw;
      height: 15vw;
      margin-right: 4vw;
      border: 0.5px solid #ededed;
      border-radius: 50%;
      &.isHidden {
        visibility: hidden;
      }
    }
    &__content-wrap {
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      .content {
        font-size: 4vw;
        font-weight: bold;
        line-height: 1;
        letter-spacing: -0.4px;
        color: #060505;
      }
      .user-info {
        font-size: 3.5vw;
        line-height: 1;
        letter-spacing: -0.2px;
        color: #898888;
      }
      .content-info {
        font-size: 3.1vw;
        line-height: 1;
        letter-spacing: -0.2px;
        color: #b3b2b2;
      }
    }
    &__thumbnail {
      position: absolute;
      bottom: 0;
      right: 0;
      &.isHidden {
        visibility: hidden;
      }
      .image {
        width: 8.9vw;
        height: 8.9vw;
        border: 0.5px solid #ededed;
        border-radius: 4px;
      }
      .ico {
        position: absolute;
        bottom: 2px;
        left: 2px;
        width: 45%;
        height: 45%;
      }
      .image-total {
        position: absolute;
        bottom: 2px;
        right: 2px;
        font-size: 3.1vw;
        line-height: 1.27;
        color: #ffffff;
      }
    }
  }
  @media (min-width: 480px) {
    margin: 16px 0;
    padding: 0 16px;
    .newPost {
      &.isHidden {
        visibility: hidden;
      }
      &__userImg {
        width: 52px;
        height: 52px;
        margin-right: 8px;
      }
      &__content-wrap {
        .content {
          font-size: 14px;
        }
        .user-info {
          font-size: 12px;
        }
        .content-info {
          font-size: 11px;
        }
      }
      &__thumbnail {
        &.isHidden {
          visibility: hidden;
        }
        .image {
          width: 32px;
          height: 32px;
        }
        .image-total {
          font-size: 11px;
        }
      }
    }
  }
`;

interface INewPost {
  newPosts?: NewPost[];
  onClickNewPost?: () => void;
}

const NewPostComponent = ({ newPosts = [], onClickNewPost }: INewPost) => {
  return (
    <Wrap>
      <FlexDiv className="title">
        <UnderlinedText
          labelClassName="title__text--label"
          underlineClassName="title__text--underline"
          text="최신 셀프소개글"
        />
      </FlexDiv>
      {newPosts.map((newPost, idx) => (
        <NewPostWrap key={idx}>
          <FlexDiv className="newPost">
            <ProfileImg
              className={`newPost__userImg ${isEmpty(newPost.post_author.image) ? 'isHidden' : ''}`}
              key={idx}
              src={newPost.post_author.image}
            />
            <FlexDiv className="newPost__content-wrap" onClick={() => onClickNewPost()}>
              <div className="content">{newPost.content}</div>
              <div className="user-info">{`${newPost.post_author.id} ・ ${moment(newPost.post_author.birth)
                .fromNow()
                .replace('년 전', '')}세 ・ ${newPost.post_author.job_title}`}</div>
              <div className="content-info">{`24km ・ ${moment(newPost.created_at).fromNow()}`}</div>
            </FlexDiv>
            <div className={`newPost__thumbnail ${isEmpty(newPost.image) ? 'isHidden' : ''}`}>
              <Image className="image" src={newPost.image} />
              <SVGS.ICO_PHOTO className="ico" />
              <span className="image-total">{newPost.image_total}</span>
            </div>
          </FlexDiv>
        </NewPostWrap>
      ))}
    </Wrap>
  );
};

export default NewPostComponent;
