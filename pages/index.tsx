import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CommentsComponent from '../src/components/comments.component';
import { Article, FlexDiv, SVGS, Wrap } from '../src/components/common';
import Header from '../src/components/header.component';
import NewPostsComponent from '../src/components/newPosts.component';
import PostComponent, { IFCPost } from '../src/components/post.component';
import ProfileComponent, { IProfile as IFCProfile } from '../src/components/profile.component';
import { Comment, NewPost, Post, Viral } from '../src/models/viral.model';
import { RootState } from '../src/store/rootReducer';
import { toggleViralPopup } from '../src/store/viral/viral.actions';
import { selectIsShowViralPopup } from '../src/store/viral/viral.selectors';
import PopupComponent from '../src/components/popup.component';

const API_DOMAIN = process.env.API_DOMAIN;

const DefaultWrap = styled(Article)`
  border-bottom: 1px solid #ededed;
`;

const PostWrap = styled(DefaultWrap)`
  padding-top: 8.6vw;
  padding-bottom: 8.6vw;
  @media (min-width: 480px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const CommentInputWrap = styled(DefaultWrap)`
  .comment-input {
    margin: 1vw 0;
    &__control {
      flex: 1;
      align-items: center;
      border-radius: 20px;
      border: solid 1px #e0e0e0;
      background-color: #f9f9f9;
      font-size: 4.5vw;
      line-height: 1;
      letter-spacing: -0.6px;
      color: #898888;
      padding: 0 4.5vw;
    }
    &__ico-send {
      margin-left: 4vw;
      width: 8.9vw;
      height: 8.9vw;
    }
    @media (min-width: 480px) {
      margin: 4px 0;
      &__control {
        font-size: 16px;
        padding: 0 5.7%;
      }
      &__ico-send {
        margin-left: 16px;
        width: 42px;
        height: 42px;
      }
    }
  }
`;

const ShowMoreButtonWrap = styled(DefaultWrap)`
  display: flex;
  border: none;
  background-color: #ffe95e;
  justify-content: center;
  align-items: center;
  height: 17.5vw;
  font-size: 4.5vw;
  color: #000000;
  .ico-chevron-down {
    height: 4.5vw;
    width: 4.5vw;
    margin-left: 1.25vw;
  }
  @media (min-width: 480px) {
    height: 56px;
    font-size: 18px;
    .ico-chevron-down {
      height: 16px;
      width: 16px;
      margin-left: 6px;
    }
  }
`;

const EMPTY_PROFILE: IFCProfile = {
  profileImgUrl: '/static/images/profile.jpeg',
  userName: '소희:)',
  userAge: '26',
  userAddress: '경기도 고양시',
  userJob: '패션디자이너',
  distance: '652m',
  timestamp: '1시간 전'
};

const EMPTY_POST: IFCPost = {
  imageUrls: ['/static/images/mainImage.jpg'],
  text: `안녕하세요~
  뭔가 올린다는게 부끄럽기도하고 쑥스럽기도 하네요. 제가 지금 타지역에 있다보니 친구들이 전부 서울, 경기도에 있어서 소개받는 것도 누군가를 만난다는 것도 쉽지 않은거 같아서 용기내어 글 올려봅니다.`
};

interface Props {
  profile?: IFCProfile;
  post?: IFCPost;
  comments?: Comment[];
  newPosts?: NewPost[];
  isShowViralPopup: boolean;
  onToggleViralPopup: () => void;
}

class Index extends Component<Props> {
  static async getInitialProps({ query }) {
    const { id: postId } = query;
    const { data } = await axios.get<Viral>(`${API_DOMAIN}/posts/${postId}/viral`).catch(() => {
      return {
        data: undefined
      };
    });

    if (_.isUndefined(data)) {
      return {
        profile: EMPTY_PROFILE,
        post: EMPTY_POST
      };
    } else {
      const { post, like_count, liked_user, comments, new_posts } = data as Viral;
      const { post_author, created_at, images, content } = post as Post;

      const modifiedProfile: IFCProfile = {
        profileImgUrl: post_author.image,
        userName: post_author.name,
        userAge: moment(post_author.birth)
          .fromNow()
          .replace('년 전', ''),
        userAddress: '서울시 서초구',
        userJob: post_author.job_title,
        userSchool: post_author.school,
        distance: '652m',
        timestamp: moment(created_at).fromNow()
      };

      const modifiedPost: IFCPost = {
        imageUrls: images.map(image => image.url),
        text: content,
        likeCount: like_count,
        likedUsers: liked_user
      };

      return {
        profile: modifiedProfile,
        post: modifiedPost,
        comments,
        newPosts: _.slice(new_posts, 0, 5)
      };
    }
  }

  shouldComponentUpdate(nextProps) {
    const { isShowViralPopup: prev } = this.props;
    const { isShowViralPopup: next } = nextProps;
    return prev !== next;
  }

  onClickToggle(): void {
    const { onToggleViralPopup } = this.props;
    onToggleViralPopup();
  }

  render() {
    const { profile, post, comments, newPosts, isShowViralPopup, onToggleViralPopup } = this.props;
    return (
      <main>
        {isShowViralPopup && (
          <PopupComponent
            onClickBackground={onToggleViralPopup}
            onClickButton={() => {
              return;
            }}
          />
        )}
        <Wrap>
          <Header />
          <PostWrap>
            <ProfileComponent {...profile} onClickChat={onToggleViralPopup} />
            <PostComponent {...post} onClickLike={onToggleViralPopup} />
          </PostWrap>
          <DefaultWrap>
            <CommentsComponent comments={comments} />
          </DefaultWrap>
          <CommentInputWrap>
            <FlexDiv className="comment-input">
              <FlexDiv className="comment-input__control" onClick={() => onToggleViralPopup()}>
                댓글을 입력해 주세요...
              </FlexDiv>
              <SVGS.ICO_SEND className="comment-input__ico-send" />
            </FlexDiv>
          </CommentInputWrap>
          <ShowMoreButtonWrap onClick={() => onToggleViralPopup()}>
            <span>더보기</span>
            <SVGS.ICO_CHEVRON_DOWN className="ico-chevron-down" />
          </ShowMoreButtonWrap>
          <NewPostsComponent newPosts={newPosts} onClickNewPost={onToggleViralPopup} />
        </Wrap>
      </main>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isShowViralPopup: selectIsShowViralPopup(state)
});

const mapDispatchToProps = {
  onToggleViralPopup: toggleViralPopup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
