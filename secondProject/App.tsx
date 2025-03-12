
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// import { RootNavigator } from './src/RootNavigator';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from './src/types/index.d';
import Home from './src/Screen/Home';
import Detail from './src/Screen/Detail';

export type RootStackParamsList = {
  Home:undefined;
  Detail: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      {/* <RootNavigator /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'Trending Product'}} />
        <Stack.Screen name="Detail" component={Detail} options={{title: 'Product details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
