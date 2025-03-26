/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/RootNavigator';
import { ThemeProvider } from './src/Context/ThemeContext';




function App(): React.JSX.Element {

  return (
    <ThemeProvider>
      <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
