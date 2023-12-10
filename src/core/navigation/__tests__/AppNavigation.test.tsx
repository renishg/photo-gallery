import React from 'react';
import {RenderAPI, render} from '@testing-library/react-native';
import {AppNavigation} from '../AppNavigation';
import {MockScreen} from 'src/utils/testUtils';

jest.mock('src/screens', () => ({
  HomeScreen: () => <MockScreen text="Home" />,
  PhotoDetailScreen: () => <MockScreen text="PhotoDetail" />,
}));

describe('<AppNavigation/>', () => {
  let instance: RenderAPI;

  beforeEach(() => {
    instance = render(<AppNavigation />);
  });

  afterEach(() => {
    instance.unmount();
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(instance.getByText('Home')).toBeTruthy();
  });
});
