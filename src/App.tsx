import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigation} from 'src/core/navigation';
import {store} from 'src/core/redux';
import {RealmProvider} from './core/realm';
import {NetworkManager} from './core/components';

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NetworkManager>
          <RealmProvider>
            <AppNavigation />
          </RealmProvider>
        </NetworkManager>
      </Provider>
    </SafeAreaProvider>
  );
};
