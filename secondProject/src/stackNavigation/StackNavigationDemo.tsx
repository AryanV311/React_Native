

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FirstScreen } from './FirstScreen';
import { SecondScreen } from './SecondScreen';

export type StackParamList = {
    FirstScreen:undefined;
    SecondScreen:{
        itemId: number
    }
}


const Stack = createStackNavigator<StackParamList>();

export const StackNavigationDemo: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{title:'First Screen'}} name="FirstScreen" component={FirstScreen} />
            <Stack.Screen options={({route}) => ({title: `Item ${route.params.itemId}`})} name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
    );
// eslint-disable-next-line eol-last
};