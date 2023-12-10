import React, {PropsWithChildren, useCallback} from 'react';
import {Provider} from 'react-redux';

import {AppStore, RootState, setupStore} from 'src/core/redux';
import {RealmProvider} from 'src/core/realm';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export type MockStateProps = {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  initialParams?: Record<string, unknown>;
};

export type WrapperProps = PropsWithChildren<MockStateProps>;

export const Wrapper = ({
  children,
  preloadedState = {},
  store = setupStore(preloadedState),
  initialParams,
}: WrapperProps) => {
  const Component = useCallback(() => {
    return <>{children}</>;
  }, [children]);

  return (
    <Provider store={store}>
      <RealmProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Component}
              initialParams={initialParams}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RealmProvider>
    </Provider>
  );
};
