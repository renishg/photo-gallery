import React from 'react';
import {Provider} from 'react-redux';

import {AppNavigation} from 'src/core/navigation';
import {store} from 'src/core/redux';
import {RealmProvider} from './core/realm';

const App = () => {
  return (
    <RealmProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </RealmProvider>
  );
};

export default App;
