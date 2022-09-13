export interface IBook {
  title: string;
  author: string;
  cover_image_url: string;
  page_count: number;
  publisher: string;
  synopsis: string;
}

export interface FormValues {
  username: string;
  password: string;
}
