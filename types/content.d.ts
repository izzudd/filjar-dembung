type DateTime = string | Date;
type PostContent = string | any;
type Url = string;

interface CommonData {
  ID: number;
  CreatedAt: DateTime;
  UpdatedAt: DateTime;
}
export interface PostStrip extends CommonData {
  slug: string;
  title: string;
  image: Url;
  excerpt?: string;
}

export interface PostData extends PostStrip {
  body: PostContent;
  relatedPost?: PostStrip[];
}

export interface Operational {
  price: number;
  day: string;
  hour: string;
}

export interface Testimonial {
  identitas: string;
  testimoni: string;
}

export interface Info {
  description: string;
  linkImage: string[];
  success: boolean;
  statusCode: number;
}

export interface APIResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
  error?: string;
}

interface AuthToken {
  data: string;
  token: string;
}

// export type APIResponse<T, A> = APIResponse<T> | A;
