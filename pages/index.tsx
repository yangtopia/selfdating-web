import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Article, Wrap } from '../src/components/common';
import Header from '../src/components/header.component';
import PostComponent, { IPost } from '../src/components/post.component';
import ProfileComponent, { IProfile } from '../src/components/profile.component';
import { Post, ViralPost } from '../src/models/post.model';

const PostWrap = styled(Article)`
  padding-top: 8.6vw;
  padding-bottom: 8.6vw;
`;

const EMPTY_PROFILE: IProfile = {
  profileImgUrl: '/static/images/profile.jpeg',
  userName: '소희:)',
  userAge: '26',
  userAddress: '경기도 고양시',
  userJob: '패션디자이너',
  distance: '652m',
  timestamp: '1시간 전'
};

const EMPTY_POST: IPost = {
  imageUrls: ['/static/images/mainImage.jpg'],
  text: `안녕하세요~
  뭔가 올린다는게 부끄럽기도하고 쑥스럽기도 하네요. 제가 지금 타지역에 있다보니 친구들이 전부 서울, 경기도에 있어서 소개받는 것도 누군가를 만난다는 것도 쉽지 않은거 같아서 용기내어 글 올려봅니다.`,
};

export default class Index extends Component<{ profile?: IProfile; post?: IPost }> {
  static async getInitialProps({ query }) {
    const { id: postId } = query;
    const { data } = await axios.get<ViralPost>(`https://api.dev.selfdating.org/posts/${postId}/viral`).catch(() => {
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
      const { post, like_count, liked_user, comments, new_posts } = data as ViralPost;
      const { post_author, created_at, images, content } = post as Post;

      const modifiedProfile: IProfile = {
        profileImgUrl: post_author.image,
        userName: post_author.name,
        userAge: moment(post_author.birth)
          .fromNow()
          .replace('년 전', ''),
        userAddress: '서울시 서초구',
        userJob: post_author.job_title,
        distance: '652m',
        timestamp: moment(created_at).fromNow()
      };

      const modifiedPost: IPost = {
        imageUrls: images.map(image => image.url),
        text: content,
        likeCount: like_count,
        likedUsers: liked_user,
        comments,
        newPosts: new_posts
      };

      return {
        profile: modifiedProfile,
        post: modifiedPost
      };
    }
  }

  componentDidMount() {
    // try {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     const { latitude, longitude } = pos.coords;
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    const { profile, post } = this.props;
    return (
      <main>
        <Wrap>
          <Header />
          <PostWrap>
            <ProfileComponent {...profile} />
            <PostComponent {...post} />
          </PostWrap>
        </Wrap>
      </main>
    );
  }
}
