import {fireEvent, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {Thumbnail} from '../Thumbnail';
import {mockGetPhotosResponse} from 'src/utils/testUtils/mocks';
import {renderWithProviders} from 'src/utils/testUtils';

describe('<Thumbnail/>', () => {
  let instance: RenderAPI;

  const item = mockGetPhotosResponse.photos.photo[0];

  describe('with onItemPress', () => {
    const onItemPress = jest.fn();

    beforeEach(() => {
      onItemPress.mockClear();
      instance = renderWithProviders(
        <Thumbnail item={item} onItemPress={onItemPress} />,
      );
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render image', () => {
      expect(instance.getByRole('button')).toBeOnTheScreen();
    });

    it('should call onItemPress', () => {
      const button = instance.getByRole('button');
      fireEvent.press(button);
      expect(onItemPress).toHaveBeenCalledWith(item);
    });
  });

  describe('without onItemPress', () => {
    beforeEach(() => {
      instance = renderWithProviders(
        <Thumbnail item={item} totalColumns={1} />,
      );
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render image', () => {
      expect(instance.getByRole('button')).toBeOnTheScreen();
    });
  });
});
