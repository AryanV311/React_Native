//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import ModalView from './Screens/ModalView';
import PullToRefreshPage from './Screens/PullToRefreshPage';

export type RootStackParamList = {
    Home:undefined,
    ModalView:undefined,
    RefreshPage:undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home Screen'}} />
            <Stack.Screen name="ModalView" component={ModalView} options={{title:'Modal View'}} />
            <Stack.Screen name="RefreshPage" component={PullToRefreshPage} options={{title:'Refresh Page'}} />
        </Stack.Navigator>
    );
};


export default RootNavigator;
