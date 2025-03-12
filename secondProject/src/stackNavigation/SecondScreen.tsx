import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackParamList } from './StackNavigationDemo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type StackSecondScreenNavigationProp = StackNavigationProp<StackParamList,'SecondScreen'>

type StackSecondScreenRouteProp = RouteProp<StackParamList,'SecondScreen'>

export const SecondScreen: React.FC = () => {

    const navigation = useNavigation<StackSecondScreenNavigationProp>();
    const route = useRoute<StackSecondScreenRouteProp>();


    return(
        <View>
            <Text>
                Second Screen
            </Text>
            <Text>Item ID: {route.params.itemId}</Text>
            <Button onPress={() => navigation.goBack()}  title="Go back to Screen 1" />
        </View>
    );
};