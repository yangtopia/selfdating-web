import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '../src/components/header';
import { Wrap, Article, Image } from '../src/components/common';
import Profile, { IProfile } from '../src/components/profile';
import Post, { IPost } from '../src/components/post';

const PostWrap = styled(Article)`
  padding-top: 10vw;
  padding-bottom: 8vw;
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
  뭔가 올린다는게 부끄럽기도하고 쑥스럽기도 하네요. 제가 지금 타지역에 있다보니 친구들이 전부 서울, 경기도에 있어서 소개받는 것도 누군가를 만난다는 것도 쉽지 않은거 같아서 용기내어 글 올려봅니다.`
};

const Index = () => {
  return (
    <main>
      <Wrap>
        <Header />
        <PostWrap>
          <Profile {...EMPTY_PROFILE} />
          <Post {...EMPTY_POST} />
        </PostWrap>
      </Wrap>
    </main>
  );
};

export default Index;
