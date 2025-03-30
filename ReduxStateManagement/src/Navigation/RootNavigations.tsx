//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TaskList from '../Screens/Tasklist';
import Projects from '../Screens/Projects';

type RootStackParamList = {
    TaskList:undefined,
    Project:undefined,
}


const Tab = createBottomTabNavigator<RootStackParamList>();


const RootNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TaskList" component={TaskList} options={{title: 'Task List'}} />
            <Tab.Screen name="Project" component={Projects} options={{title: 'Projects'}} />
        </Tab.Navigator>
    );
};


export default RootNavigation;
