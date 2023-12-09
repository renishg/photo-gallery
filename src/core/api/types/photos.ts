export type GetPhotosResponse = {
  photos: Photos;
  stat: string;
};

export type Photos = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
};

export type Photo = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  is_primary: number;
  has_comment: number;
};
