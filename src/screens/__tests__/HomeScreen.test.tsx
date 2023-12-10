import React from 'react';
import {
  act,
  fireEvent,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import {HomeScreen} from '../HomeScreen';
import {renderWithProviders} from 'src/utils/testUtils';
import {axiosInstance} from 'src/core/api/axios';
import {
  mockGetPhotosResponse,
  mockUseQuery,
  mockNavigation,
} from 'src/utils/testUtils/mocks';

describe('<HomeScreen/>', () => {
  let instance: RenderAPI;
  const error = 'Something went wrong';

  const data = mockGetPhotosResponse.photos.photo;

  describe('with valid data', () => {
    beforeEach(async () => {
      await waitFor(() => {
        instance = renderWithProviders(<HomeScreen />);
      });
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render all images', () => {
      expect(instance.getAllByRole('button').length).toBe(data.length);
    });

    it('should navigate on item press', () => {
      const button = instance.getAllByRole('button')[0];
      act(() => {
        fireEvent.press(button);
      });
      expect(mockNavigation.navigate).toHaveBeenCalledWith('PhotoDetail', {
        item: data[0],
      });
    });

    it('should not display error', () => {
      expect(instance.queryByText(error)).toBeFalsy();
    });
  });

  describe('with zero data', () => {
    beforeEach(async () => {
      mockUseQuery.mockReturnValue([]);
      await waitFor(() => {
        instance = renderWithProviders(<HomeScreen />);
      });
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render all images', () => {
      expect(instance.queryAllByRole('button').length).toBe(0);
    });

    it('should not display error', () => {
      expect(instance.queryByText(error)).toBeFalsy();
    });
  });

  describe('with error', () => {
    beforeEach(async () => {
      jest
        .spyOn(axiosInstance, 'get')
        .mockRejectedValue('Something went wrong');
      await waitFor(() => {
        instance = renderWithProviders(<HomeScreen />);
      });
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render error', () => {
      expect(instance.getByText(error)).toBeOnTheScreen();
    });
  });
});
