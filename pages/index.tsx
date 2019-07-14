import Link from 'next/link';
import styled from 'styled-components';
import Header from '../src/components/header/header';
import { Flex, Wrap, Article, ProfileImg, UnderlinedText } from '../src/components/common';
import ReactSVG from 'react-svg';

const PostWrap = styled(Article)`
  padding-top: 10vw;
  padding-bottom: 8vw;
`;

const ProfileSection = styled.section`
  display: flex;
  height: 15vw;
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    padding: 0.5vw 0 0.5vw 5vw;
    &__top {
      justify-content: space-between;
      font-size: 4vw;
    }
    &__bottom {
      justify-content: space-between;
      font-size: 3.5vw;
      letter-spacing: -0.2px;
      color: #898888;
    }
    &__userInfo {
      font-size: 4.5vw;
      font-weight: 500;
      letter-spacing: -0.6px;
      color: #060505;
    }
    &__userInfo--age {
      @extend .profile__userInfo;
      margin-right: 3vw;
    }
    &__btn-chat {
      font-size: 3.5vw;
      letter-spacing: -0.2px;
      color: #060505;
    }
    &__ico-chat {
      width: 4.5vw;
      height: 4.5vw;
    }
    &__timestamp {
      font-size: 3.5vw;
      letter-spacing: -0.2px;
      color: #b3b2b2;
    }
    &__distance {
      color: #b3b2b2;
    }
  }
`;

const Index = () => {
  return (
    <main>
      <Wrap>
        <Header />
        <PostWrap>
          <ProfileSection>
            <ProfileImg src="/static/images/profile.jpeg" />
            <div className="profile">
              <Flex className="profile__top">
                <Flex>
                  <span className="profile__userInfo--name">소희:)</span>
                  <span className="profile__userInfo">&nbsp; ,&nbsp;</span>
                  <span className="profile__userInfo--age">26</span>
                  <Flex>
                    <ReactSVG
                      beforeInjection={svg => {
                        svg.classList.add('profile__ico-chat');
                      }}
                      src="/static/svg/ic-chat-y-5.svg"
                    />
                    <UnderlinedText
                      {...{
                        text: '1:1 대화'
                      }}
                    />
                  </Flex>
                </Flex>
                <span className="profile__timestamp">1시간 전</span>
              </Flex>
              <Flex className="profile__bottom">
                <Flex>
                  <span>경기도 일산시</span>
                  <span>&nbsp;・&nbsp;</span>
                  <span>패션디자이너</span>
                </Flex>
                <span className="profile__distance">652m</span>
              </Flex>
            </div>
          </ProfileSection>
        </PostWrap>
      </Wrap>
    </main>
  );
};

export default Index;
