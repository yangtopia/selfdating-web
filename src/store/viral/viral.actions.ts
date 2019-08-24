import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';
import getConfig from 'next/config';
import { IViralData } from '../../../pages/viral';
import { INewPost } from '../../components/newPosts.component';
import { IPost } from '../../components/post.component';
import { IProfile } from '../../components/profile.component';
import * as viralActions from './viral.types';
import { ViralModel } from '../../models/viral.model';

const { publicRuntimeConfig } = getConfig();
const API_DOMAIN = publicRuntimeConfig.API_DOMAIN;

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

export function fetchViralDataSuccess(viralData: IViralData) {
  return {
    type: viralActions.FETCH_VIRAL_DATA_SUCCESS,
    viralData,
  }
}

export const fetchViralData = (postId: number = 150) => (dispatch) => {
  dispatch(fetchViralDataStart(postId));
  return axios.get<ViralModel>(`${API_DOMAIN}/${postId}/viral`).then(response => {
    const viralModel = response.data;
    const initialViralPageData: IViralData= (() => {
      if (_.isNil(viralModel)) {
        return {
          profile: EMPTY_PROFILE,
          post: EMPTY_POST,
          comments: [],
          newPosts: [],
        };
      } else {
        const { post, like_count, liked_user, comments, new_posts } = viralModel;
        const { post_author, created_at, images, content } = post;

        const modifiedProfile: IProfile = {
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

        const modifiedPost: IPost = {
          imageUrls: images.map(image => image.url),
          text: content,
          likeCount: like_count,
          likedUsers: liked_user,
        };

        const modifiedNewPosts: INewPost[] = _.chain(new_posts)
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
