import styled from 'styled-components';
import { FlexDiv, ProfileImg, UnderlinedText, SVGS } from './common';

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
    &__chat-label {
      font-size: 3.5vw;
      letter-spacing: -0.2px;
      color: #060505;
    }
    &__chat-label-under {
      height: 6px;
      background-color: #ffe95e;
      border-radius: 3px;
    }
  }
  @media (min-width: 480px) {
    height: 48px;
    margin-bottom: 24px;
    .profile {
      /* padding: 0.5vw 0 0.5vw 5vw; */
      &__top {
        font-size: 4vw;
      }
      &--left {
        width: 80%;
      }
      &__bottom {
        font-size: 12px;
      }
      &__userInfo {
        font-size: 16px;
        &.name {
          max-width: 40%;
        }
        &.age {
          margin-right: 3vw;
        }
      }
      &__chat-wrap {
        font-size: 12px;
      }
      &__btn-chat {
        font-size: 12px;
      }
      &__ico-chat {
        width: 16px;
        height: 16px;
      }
      &__timestamp {
        font-size: 12px;
      }
      &__chat-label {
        font-size: 12px;
      }
      &__chat-label-under {
      }
    }
  }
`;

export interface IProfile {
  profileImgUrl: string;
  userName: string;
  userAge: string;
  timestamp: string;
  userAddress?: string;
  userJob?: string;
  userSchool?: string;
  distance?: string;
  onClickChat?: () => void
}

const ProfileComponent = ({
  profileImgUrl,
  userName,
  userAge,
  userAddress,
  userSchool,
  timestamp,
  userJob,
  distance,
  onClickChat,
}: IProfile) => {
  return (
    <ProfileWrap>
      <ProfileImg className="profile__img" src={profileImgUrl} />
      <div className="profile">
        <FlexDiv className="profile__top">
          <FlexDiv className="profile--left">
            <span className="profile__userInfo name">{userName}</span>
            <span className="profile__userInfo">&nbsp; ,&nbsp;</span>
            <span className="profile__userInfo age">{userAge}</span>
            <FlexDiv className="profile__chat-wrap" onClick={() => onClickChat()}>
              <SVGS.ICO_CHAT className="profile__ico-chat" />
              <UnderlinedText
                labelClassName="profile__chat-label"
                underlineClassName="profile__chat-label-under"
                text="1:1 대화"
              />
            </FlexDiv>
          </FlexDiv>
          <span className="profile__timestamp">{timestamp}</span>
        </FlexDiv>
        <FlexDiv className="profile__bottom">
          <FlexDiv className="profile--left">
            <span>{userSchool}</span>
            <span>&nbsp;・&nbsp;</span>
            <span>{userJob}</span>
          </FlexDiv>
          <span className="profile__distance">{distance}</span>
        </FlexDiv>
      </div>
    </ProfileWrap>
  );
};

export default ProfileComponent;
