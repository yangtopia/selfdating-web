export interface ViralModel {
  post: PostModel;
  liked_user: LikedUserModel[];
  like_count: number;
  comments: CommentModel[];
  new_posts: NewPostModel[];
}

export interface CommentModel {
  id: number;
  content: boolean;
  created_at: string;
  order: number;
  group: number;
  status: number; // 1: 보이는 댓글, 2: 비밀 댓글, 3: 프로필 댓글
}

export interface LikedUserModel {
  user_id: number;
  image: string;
  name: string;
  birth: string;
  job_title: string;
  expiry_date: string;
  created_at: string;
  location: LocationModel;
}

export interface LocationModel {
  lon: number;
  lat: number;
}

export interface NewPostModel {
  id: number;
  content: string;
  created_at: string;
  image: string;
  image_total: number;
  post_author: PostAuthorModel;
}

export interface PostAuthorModel {
  id: number;
  job: string;
  geom?: GeomModel;
  name: string;
  birth: string;
  image: string;
  gender: string;
  school: string;
  job_title: string;
}

export interface GeomModel {
  type: string;
  coordinates: number[];
}

export interface PostModel {
  id: number;
  content: string;
  created_at: string;
  images: ImageModel[];
  image_total: number;
  post_author: PostAuthorModel;
}

export interface ImageModel {
  id: number;
  url: string;
  order: number;
}
