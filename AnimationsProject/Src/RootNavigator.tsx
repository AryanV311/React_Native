//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BasicAnimations from './Screens/BasicAnimations';
import HomeScreen from './Screens/HomeScreen';
import GestureAnimation from './Screens/GestureAnimation';
import ReanimatedCoreAnimtion from './Screens/ReanimatedCoreAnimation';

export type RootStackParamList = {
    Home:undefined,
    Animation:undefined,
    Gesture:undefined,
    Reanimated:undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}} />
            <Stack.Screen name="Animation" component={BasicAnimations} />
            <Stack.Screen name="Gesture" component={GestureAnimation} />
            <Stack.Screen name="Reanimated" component={ReanimatedCoreAnimtion} />
        </Stack.Navigator>
    );
};


export default RootNavigator;
