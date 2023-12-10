import {PropsWithChildren} from 'react';
import {GetPhotosResponse} from 'src/core/api/types';

const publicPhoto = {
  id: '14412870627',
  owner: '85737574@N02',
  secret: '5a469dda2a',
  server: '3896',
  farm: 4,
  title: 'Neighbours',
  ispublic: 1,
  isfriend: 0,
  isfamily: 0,
  is_primary: 0,
  has_comment: 0,
};

const privatePhoto = {
  id: '9422871791',
  owner: '52846362@N04',
  secret: 'db45e0b7ed',
  server: '3754',
  farm: 4,
  title: 'No one is free, even birds are chained to the sky',
  ispublic: 0,
  isfriend: 0,
  isfamily: 0,
  is_primary: 0,
  has_comment: 0,
};

export const mockGetPhotosResponse: GetPhotosResponse = {
  photos: {
    page: 1,
    pages: 1,
    perpage: 100,
    total: 13,
    photo: [publicPhoto, privatePhoto],
  },
  stat: 'ok',
};

export const writeMock = jest.fn().mockImplementation((callback) => callback());

export const createMock = jest.fn();

export const mockUseQuery = jest.fn().mockImplementation(() => {
  return mockGetPhotosResponse.photos.photo;
});

export const mockCreateRealmContext = jest.fn().mockReturnValue({
  RealmProvider: ({children}: PropsWithChildren) => children,
  useRealm: jest.fn().mockReturnValue({
    write: writeMock,
    create: createMock,
  }),
  useObject: jest.fn().mockReturnValue({}),
  useQuery: mockUseQuery,
});

export const mockNavigation = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
};
