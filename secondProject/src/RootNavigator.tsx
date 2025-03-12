import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from './components/HomeScreen';
import { StackNavigationDemo } from './stackNavigation/StackNavigationDemo';


export type RootStackParamsList = {
    Home: undefined;
    StackDemo:undefined;
}


const Stack = createStackNavigator();

export const RootNavigator: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
        </Stack.Navigator>
    );
}