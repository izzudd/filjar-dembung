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

interface APIResponse<T, A = void> extends A {
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
