import styled from 'styled-components';
import { Flex, ProfileImg, UnderlinedText, SVGS } from '../../src/components/common';

const ProfileWrap = styled.section`
  display: flex;
  height: 15vw;
  margin-bottom: 7.5vw;
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
    &--left {
      width: 80%;
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      &.name {
        max-width: 40%;
      }
      &.age {
        margin-right: 3vw;
      }
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

export interface IProfile {
  profileImgUrl: string;
  userName: string;
  userAge: string;
  timestamp: string;
  userAddress: string;
  userJob: string;
  distance: string;
}

const ProfileComponent = ({
  profileImgUrl,
  userName,
  userAge,
  userAddress,
  timestamp,
  userJob,
  distance
}: IProfile) => {
  return (
    <ProfileWrap>
      <ProfileImg src={profileImgUrl} />
      <div className="profile">
        <Flex className="profile__top">
          <Flex className="profile--left">
            <span className="profile__userInfo name">{userName}</span>
            <span className="profile__userInfo">&nbsp; ,&nbsp;</span>
            <span className="profile__userInfo age">{userAge}</span>
            <Flex>
              <SVGS.ICO_CHAT className="profile__ico-chat" />
              <UnderlinedText text="1:1 대화" />
            </Flex>
          </Flex>
          <span className="profile__timestamp">{timestamp}</span>
        </Flex>
        <Flex className="profile__bottom">
          <Flex className="profile--left">
            <span>{userAddress}</span>
            <span>&nbsp;・&nbsp;</span>
            <span>{userJob}</span>
          </Flex>
          <span className="profile__distance">{distance}</span>
        </Flex>
      </div>
    </ProfileWrap>
  );
};

export default ProfileComponent;
