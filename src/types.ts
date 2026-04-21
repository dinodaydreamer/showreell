export type Category = 'TVC' | 'FILM' | 'MV' | 'Fashion' | 'REEL';

export interface BilingualText {
  en: string;
  vi: string;
}

export interface Project {
  id: string;
  title: BilingualText;
  category: Category;
  youtubeId: string;
  thumbnail: string;
  description?: BilingualText;
}

export interface Service {
  title: BilingualText;
  description: BilingualText;
}
