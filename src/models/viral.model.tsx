export interface Viral {
  post: Post;
  liked_user: LikedUser[];
  like_count: number;
  comments: Comment[];
  new_posts: NewPost[];
}

export interface Comment {
  id: number;
  content: boolean;
  created_at: string;
  order: number;
  group: number;
  status: number; // 1: 보이는 댓글, 2: 비밀 댓글, 3: 프로필 댓글
}

export interface LikedUser {
  user_id: number;
  image: string;
  name: string;
  birth: string;
  job_title: string;
  expiry_date: null;
  created_at: string;
  location: Location;
}

export interface Location {
  lon: number;
  lat: number;
}

export interface NewPost {
  id: number;
  content: string;
  created_at: string;
  image: null;
  image_total: number;
  post_author: PostAuthor;
}

export interface PostAuthor {
  id: number;
  job: string;
  geom?: Geom;
  name: string;
  birth: string;
  image: string;
  gender: string;
  school: string;
  job_title: string;
}

export interface Geom {
  type: string;
  coordinates: number[];
}

export interface Post {
  id: number;
  content: string;
  created_at: string;
  images: Image[];
  image_total: number;
  post_author: PostAuthor;
}

export interface Image {
  id: number;
  url: string;
  order: number;
}
