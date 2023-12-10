import {axiosInstance} from 'src/core/api/axios';
import {API_CONSTANTS} from 'src/core/api/constants';
import {
  mockGetPhotosResponse,
  mockNavigation,
  mockCreateRealmContext,
} from 'src/utils/testUtils/mocks';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-community/netinfo', () => {
  return {
    useNetInfo: jest.fn().mockReturnValue({
      isConnected: true,
    }),
  };
});

jest.mock('@realm/react', () => {
  return {
    ...jest.requireActual('@realm/react'),
    createRealmContext: mockCreateRealmContext,
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => mockNavigation,
  };
});

jest.spyOn(axiosInstance, 'get').mockImplementation((_url, config) => {
  const response = {data: {}};
  if (config?.params.method === API_CONSTANTS.methods.getPhotos) {
    response.data = mockGetPhotosResponse;
  }
  return Promise.resolve(response);
});
