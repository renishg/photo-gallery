import React from 'react';
import {Provider} from 'react-redux';

import {AppNavigation} from 'src/core/navigation';
import {store} from 'src/core/redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
