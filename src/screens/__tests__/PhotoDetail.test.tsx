import React from 'react';
import {RenderAPI} from '@testing-library/react-native';
import {PhotoDetailScreen} from '../PhotoDetailScreen';
import {renderWithProviders} from 'src/utils/testUtils';
import {mockGetPhotosResponse, mockNavigation} from 'src/utils/testUtils/mocks';

describe('<PhotoDetail/>', () => {
  let instance: RenderAPI;

  describe('Public photo', () => {
    const item = mockGetPhotosResponse.photos.photo[0];

    beforeEach(() => {
      instance = renderWithProviders(<PhotoDetailScreen />, {
        initialParams: {
          item,
        },
      });
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render image', () => {
      expect(instance.getByRole('button')).toBeOnTheScreen();
    });

    it('should set options with title', () => {
      expect(mockNavigation.setOptions).toHaveBeenCalledWith({
        title: item.title,
      });
    });
  });

  describe('Private photo', () => {
    const item = mockGetPhotosResponse.photos.photo[1];

    beforeEach(() => {
      instance = renderWithProviders(<PhotoDetailScreen />, {
        initialParams: {
          item,
        },
      });
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render image', () => {
      expect(instance.getByRole('button')).toBeOnTheScreen();
    });

    it('should set options with title', () => {
      expect(mockNavigation.setOptions).toHaveBeenCalledWith({
        title: item.title,
      });
    });
  });
});
