import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';
import { IViralPageData } from '../../../pages';
import { IFCNewPost } from '../../components/newPosts.component';
import { IFCPost } from '../../components/post.component';
import { IFCProfile } from '../../components/profile.component';
import { Post, Viral } from '../../models/viral.model';
import * as viralActions from './viral.types';

const API_DOMAIN = process.env.API_DOMAIN;
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

export function toggleViralPopup() {
  return {
    type: viralActions.TOGGLE_VIRAL_POPUP
  };
}

export function fetchViralDataStart(postId: number) {
  return {
    type: viralActions.FETCH_VIRAL_DATA,
    postId,
  }
}

export function fetchViralDataSuccess(viralPageData: IViralPageData) {
  return {
    type: viralActions.FETCH_VIRAL_DATA_SUCCESS,
    viralData: viralPageData,
  }
}

export const fetchViralData = (postId: number = 150) => (dispatch) => {
  dispatch(fetchViralDataStart(postId));
  return axios.get<Viral>(`${API_DOMAIN}/posts/${postId}/viral`).then(response => {
    const viralData = response.data;
    const initialViralPageData: IViralPageData = (() => {
      if (_.isNil(viralData)) {
        return {
          isShowViralPopup: false,
          profile: EMPTY_PROFILE,
          post: EMPTY_POST
        };
      } else {
        const { post, like_count, liked_user, comments, new_posts } = viralData as Viral;
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

        const modifiedNewPosts: IFCNewPost[] = _.chain(new_posts)
          .slice(0, 5)
          .map(newPost => {
            return {
              postAuthorImageUrl: newPost.post_author.image,
              postContent: newPost.content,
              postAuthorName: newPost.post_author.name,
              postAuthorAge: `${moment(newPost.post_author.birth)
                .fromNow()
                .replace('년 전', '')}세`,
              postAuthorJobTitle: newPost.post_author.job_title,
              postCreatedAt: moment(newPost.created_at).fromNow(),
              postImageUrl: newPost.image,
              postImageTotal: newPost.image_total,
              postDistance: _.sample(_.range(1, 30))
            };
          }).value();

        return {
          isShowViralPopup: false,
          profile: modifiedProfile,
          post: modifiedPost,
          comments,
          newPosts: modifiedNewPosts
        };
      }
    })();
    dispatch(fetchViralDataSuccess(initialViralPageData));
  })
}
