import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {App} from '../App';

describe('<App/>', () => {
  let instance: RenderAPI;

  beforeEach(() => {
    instance = render(<App />);
  });

  afterEach(() => {
    instance.unmount();
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(instance).toBeTruthy();
  });
});
