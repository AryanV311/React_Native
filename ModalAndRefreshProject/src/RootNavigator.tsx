//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import ModalView from './Screens/ModalView';
import PullToRefreshPage from './Screens/PullToRefreshPage';
import DataFetching from './Screens/DataFetching';
import AxiosData from './Screens/AxiosData';
import ThemeScreen from './Screens/ThemeScreen';

export type RootStackParamList = {
    Home:undefined,
    ModalView:undefined,
    RefreshPage:undefined,
    DataFetching:undefined,
    AxiosData:undefined,
    ThemeScreen:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home Screen'}} />
            <Stack.Screen name="ModalView" component={ModalView} options={{title:'Modal View'}} />
            <Stack.Screen name="RefreshPage" component={PullToRefreshPage} options={{title:'Refresh Page'}} />
            <Stack.Screen name="DataFetching" component={DataFetching} options={{title:'Data Fetching'}} />
            <Stack.Screen name="AxiosData" component={AxiosData} options={{title:'Axios Demo'}} />
            <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{title:'Theme Screen'}} />
        </Stack.Navigator>
    );
};


export default RootNavigator;
