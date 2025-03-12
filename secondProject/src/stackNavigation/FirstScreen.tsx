import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackParamList } from './StackNavigationDemo';
import { useNavigation } from '@react-navigation/native';

type StackFirstScreenNavigationProp = StackNavigationProp<StackParamList,'FirstScreen'>

export const FirstScreen: React.FC = () => {

    const navigation = useNavigation<StackFirstScreenNavigationProp>()

    return(
        <View>
            <Text>
                Welcome to First Screen
                <Button onPress={() => navigation.navigate('SecondScreen', {itemId: 100})} title="Go to the Screen 2" />
            </Text>
        </View>
    );
};