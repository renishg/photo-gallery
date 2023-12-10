import React, {PropsWithChildren, ReactElement} from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {setupStore} from 'src/core/redux';
import {MockStateProps, Wrapper} from './Wrapper';

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'> & MockStateProps;

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    initialParams,
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const wrapper = ({children}: PropsWithChildren) => (
    <Wrapper store={store} initialParams={initialParams}>
      {children}
    </Wrapper>
  );

  return {store, ...render(ui, {wrapper, ...renderOptions})};
};
