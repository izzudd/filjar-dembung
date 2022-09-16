type DateTime = string | Date;
type PostContent = string | any;
type Url = string;

export interface PostStrip {
  id: number;
  slug: string;
  title: string;
  image: Url;
  excerpt?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface PostData extends PostStrip {
  body: PostContent;
  relatedPost?: PostStrip[];
}

export interface Posts {
  count: number;
  posts: PostStrip[];
}

export interface SearchResult {
  query: string;
  count: number;
  posts: PostStrip[];
}

export interface CommonProps {
  ticketPrice: number;
  openAt: string;
  closeAt: string;
  operationalDay: string[] | string;
}
