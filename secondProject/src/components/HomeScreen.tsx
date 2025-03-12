import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from '../RootNavigator';


type HOmeScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Home'>


export const HomeScreen: React.FC = () => {

    const navigation = useNavigation<HOmeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button onPress={() => navigation.navigate('StackDemo')} title="Stack Navigation Demo" />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    },

})