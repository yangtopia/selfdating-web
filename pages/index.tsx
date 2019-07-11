import Link from 'next/link';
import styled from 'styled-components';
import Header from '../src/components/header/header';
import { Wrap, Article, ProfileImg } from '../src/components/common';

const PostWrap = styled(Article)`
  padding-top: 31px;
  padding-bottom: 24px;
`;

const Profile = styled.section`
  display: flex;
  height: 48px;
  border: 1px solid blue;
  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
  }
`;

const Index = () => {
  return (
    <main>
      <Wrap>
        <Header />
        <PostWrap>
          <Profile>
            <ProfileImg src="http://placehold.it/48" />
            <div className="profile-info">
              <div style={{ fontSize: '16px' }}>소히:) , 26</div>
              <div style={{ fontSize: '12px', color: '#898888' }}>경기도 일산시・패션디자이너</div>
            </div>
          </Profile>
        </PostWrap>
      </Wrap>
    </main>
  );
};

export default Index;
