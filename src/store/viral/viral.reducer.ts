import * as viralActions from './viral.types';
import { IViralData } from '../../../pages/viral';
import { IProfile } from '../../components/profile.component';
import { IPost } from '../../components/post.component';
import { CommentModel } from '../../models/viral.model';
import { INewPost } from '../../components/newPosts.component';

export const EMPTY_PROFILE: IProfile = {
  profileImgUrl: '/static/images/profile.jpeg',
  userName: '소희:)',
  userAge: '26',
  userJob: '패션디자이너',
  distance: '652m',
  timestamp: '1시간 전',
  userSchool: '서울대'
};

export const EMPTY_POST: IPost = {
  imageUrls: ['/static/images/mainImage.jpg'],
  text: `안녕하세요~
  뭔가 올린다는게 부끄럽기도하고 쑥스럽기도 하네요. 제가 지금 타지역에 있다보니 친구들이 전부 서울, 경기도에 있어서 소개받는 것도 누군가를 만난다는 것도 쉽지 않은거 같아서 용기내어 글 올려봅니다.`,
  likeCount: 122,
  likedUsers: [],
};

export const EMPTY_COMMENTS: CommentModel[] = [];

export const EMPTY_NEW_POSTS: INewPost[] = [];

export interface ViralState {
  viralData: IViralData;
  isShowViralPopup: boolean;
}

const INITIAL_STATE: ViralState = {
  viralData: {
    profile: EMPTY_PROFILE,
    post: EMPTY_POST,
    comments: EMPTY_COMMENTS,
    newPosts: EMPTY_NEW_POSTS,
  } as IViralData,
  isShowViralPopup: false,
};

export default function viral(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case viralActions.TOGGLE_VIRAL_POPUP:
      return {
        ...state,
        isShowViralPopup: !state.isShowViralPopup,
      };
    case viralActions.FETCH_VIRAL_DATA_SUCCESS:
      return {
        ...state,
        viralData: action.viralData
      };
    default:
      return state;
  }
}
