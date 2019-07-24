import * as _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CommentsComponent from '../src/components/comments.component';
import { Article, FlexDiv, SVGS, Wrap } from '../src/components/common';
import Header from '../src/components/header.component';
import NewPostsComponent, { IFCNewPost } from '../src/components/newPosts.component';
import PopupComponent from '../src/components/popup.component';
import PostComponent, { IFCPost } from '../src/components/post.component';
import ProfileComponent, { IFCProfile } from '../src/components/profile.component';
import { Comment } from '../src/models/viral.model';
import { RootState } from '../src/store/rootReducer';
import { fetchViralData, toggleViralPopup } from '../src/store/viral/viral.actions';
import { selectIsShowViralPopup, selectViralPageData } from '../src/store/viral/viral.selectors';

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

export interface ViralPageProps {
  isShowViralPopup: boolean;
  viralPageData: IViralPageData;
  onToggleViralPopup: () => void;
}

export interface IViralPageData {
  profile?: IFCProfile;
  post?: IFCPost;
  comments?: Comment[];
  newPosts?: IFCNewPost[];
}

class ViralPage extends Component<ViralPageProps> {
  static async getInitialProps({ query, store }) {
    const { id: postId } = query;
    await store.dispatch(fetchViralData(postId));
    return {};
  }

  onClickToggle(): void {
    const { onToggleViralPopup } = this.props;
    onToggleViralPopup();
  }

  render() {
    const { onToggleViralPopup, isShowViralPopup, viralPageData } = this.props;
    const { profile, post, comments, newPosts } = viralPageData;
    return (
      <main>
        <PopupComponent
          isShow={isShowViralPopup}
          onClickBackground={onToggleViralPopup}
          onClickButton={() => {
            return;
          }}
        />
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
  isShowViralPopup: selectIsShowViralPopup(state),
  viralPageData: selectViralPageData(state)
});

const mapDispatchToProps = {
  onToggleViralPopup: toggleViralPopup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViralPage);
