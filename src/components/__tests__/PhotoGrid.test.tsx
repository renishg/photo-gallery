import {fireEvent, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {PhotoGrid} from '../PhotoGrid';
import {mockGetPhotosResponse} from 'src/utils/testUtils/mocks';
import {renderWithProviders} from 'src/utils/testUtils';

describe('<PhotoGrid/>', () => {
  let instance: RenderAPI;

  const data = mockGetPhotosResponse.photos.photo;

  const onItemPress = jest.fn();

  beforeEach(() => {
    onItemPress.mockClear();
    instance = renderWithProviders(
      <PhotoGrid data={data} onItemPress={onItemPress} />,
    );
  });

  afterEach(() => {
    instance.unmount();
    jest.clearAllMocks();
  });

  it('should render all images', () => {
    expect(instance.getAllByRole('button').length).toBe(data.length);
  });

  it('should call onItemPress', () => {
    const button = instance.getAllByRole('button')[0];
    fireEvent.press(button);
    expect(onItemPress).toHaveBeenCalledWith(data[0]);
  });
});
