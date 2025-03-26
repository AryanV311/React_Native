//import liraries
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../RootNavigator';

interface Data {
    id:number,
    title:string,
    screen:string
}

const Screens:Data[] = [
    {
        id:1,
        title:'Modal View',
        screen:'ModalView',
    },
    {
        id:2,
        title:'Pull To refresh Page',
        screen:'RefreshPage',
    },
    {
        id:3,
        title:'Data Fetching',
        screen:'DataFetching',
    },
    {
        id:4,
        title:'Axios Demo',
        screen:'AxiosData',
    },
    {
        id:5,
        title:'Theme Screen',
        screen:'ThemeScreen',
    },
];

type HomeProps = NativeStackScreenProps<RootStackParamList>

const HomeScreen = ({navigation}: HomeProps) => {
    return (
        <View style={styles.container}>
            <FlatList data={Screens} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}>
                    <Text style={styles.txt}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:10,
    },
    txt:{
        fontSize:18,
        fontWeight:'bold',
    },
    btn:{
        backgroundColor:'#DAE0E2',
        paddingVertical:12,
        paddingHorizontal:8,
        borderRadius:10,
        elevation:4,
        marginBottom:10,
    },
});

export default HomeScreen;
