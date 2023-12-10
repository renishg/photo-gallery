import {RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {OwnerText} from '../OwnerText';
import {renderWithProviders} from 'src/utils/testUtils';

describe('<OwnerText/>', () => {
  let instance: RenderAPI;

  const text = 'Owner: 101';
  const top = 10;

  beforeEach(() => {
    instance = renderWithProviders(<OwnerText text={text} top={top} />);
  });

  afterEach(() => {
    instance.unmount();
    jest.clearAllMocks();
  });

  it('should render text', () => {
    expect(instance.getByText(text)).toBeOnTheScreen();
  });
});
