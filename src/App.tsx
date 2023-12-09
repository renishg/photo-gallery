import React from 'react';
import {Provider} from 'react-redux';

import {AppNavigation} from 'src/core/navigation';
import {store} from 'src/core/redux';
import {RealmProvider} from './core/realm';
import {NetworkManager} from './components/NetworkManager';

const App = () => {
  return (
    <Provider store={store}>
      <NetworkManager>
        <RealmProvider>
          <AppNavigation />
        </RealmProvider>
      </NetworkManager>
    </Provider>
  );
};

export default App;
