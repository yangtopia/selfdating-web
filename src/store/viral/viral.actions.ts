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
import { EMPTY_PROFILE, EMPTY_POST } from './viral.reducer';

const { publicRuntimeConfig } = getConfig();
const API_DOMAIN = publicRuntimeConfig.API_DOMAIN;

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

export const fetchViralData = (postId: number = 120) => (dispatch) => {
  dispatch(fetchViralDataStart(postId));
  return axios.get<ViralModel>(`${API_DOMAIN}/posts/${postId}/viral`).then(response => {
    const viralModel = response.data;
    const initialViralPageData: IViralData = (() => {
      if (_.isNil(viralModel)) {
        return {
          profile: _.get(viralModel, 'profile', EMPTY_PROFILE),
          post: _.get(viralModel, 'post', EMPTY_POST),
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
          userJob: post_author.job_title,
          userSchool: post_author.school,
          distance: `${_.random(999).toString()}m`,
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
              postDistance: _.random(200),
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
  }).catch(error => console.log(error));
}
