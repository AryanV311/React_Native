

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import RootNavigation from './src/Navigation/RootNavigations';
import { Provider } from 'react-redux';
import { store } from './src/store/store';


function App(): React.JSX.Element {

  return (
   <Provider store={store}>
    <NavigationContainer>
      <RootNavigation />
   </NavigationContainer>
   </Provider>
  );
}

export default App;
