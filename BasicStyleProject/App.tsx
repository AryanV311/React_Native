
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import BackGroundChanger from './Components/BackGroundChanger';

export type RootStackParamsList = {
  Home:undefined;
  BackGroundChanger:undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title: 'Styling Components'}} />
      <Stack.Screen name="BackGroundChanger" component={BackGroundChanger} options={{title: 'Background Changer Page'}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};


export default App;

