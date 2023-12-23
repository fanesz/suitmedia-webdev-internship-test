export interface IdeaType {
  title: string;
  small_image: {
    url: string;
  }[];
  medium_image: {
    url: string;
  }[];
  slug: string;
  published_at: string;
}

export interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}
