import {RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {ErrorText} from '../ErrorText';
import {renderWithProviders} from 'src/utils/testUtils';

describe('<ErrorText/>', () => {
  let instance: RenderAPI;

  const text = 'Something went wrong';

  beforeEach(() => {
    instance = renderWithProviders(<ErrorText text={text} />);
  });

  afterEach(() => {
    instance.unmount();
    jest.clearAllMocks();
  });

  it('should render text', () => {
    expect(instance.getByText(text)).toBeOnTheScreen();
  });
});
