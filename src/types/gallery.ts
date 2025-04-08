
export type GalleryRegion = 'india' | 'international';

export type GalleryItem = {
  id: number;
  image: string;
  title: string;
  location: string;
  region: GalleryRegion;
};
