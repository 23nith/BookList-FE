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

export type ListItem = {
  id: number;
  book_id: number;
  user_id: number;
  rating: number;
  notes: string;
  start_date: Date;
  finish_date: Date | null;
  book: IBook;
}

