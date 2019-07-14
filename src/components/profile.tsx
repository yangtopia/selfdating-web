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

export interface IProfile {
  profileImgUrl: string;
  userName: string;
  userAge: string;
  timestamp: string;
  userAddress: string;
  userJob: string;
  distance: string;
}

const Profile = (props: IProfile) => {
  return (
    <ProfileWrap>
      <ProfileImg src={props.profileImgUrl} />
      <div className="profile">
        <Flex className="profile__top">
          <Flex>
            <span className="profile__userInfo--name">{props.userName}</span>
            <span className="profile__userInfo">&nbsp; ,&nbsp;</span>
            <span className="profile__userInfo--age">{props.userAge}</span>
            <Flex>
              <SVGS.ICO_CHAT className="profile__ico-chat" />
              <UnderlinedText text="1:1 대화" />
            </Flex>
          </Flex>
          <span className="profile__timestamp">{props.timestamp}</span>
        </Flex>
        <Flex className="profile__bottom">
          <Flex>
            <span>{props.userAddress}</span>
            <span>&nbsp;・&nbsp;</span>
            <span>{props.userJob}</span>
          </Flex>
          <span className="profile__distance">{props.distance}</span>
        </Flex>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
