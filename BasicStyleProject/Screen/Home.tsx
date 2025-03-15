//import liraries
import React from 'react';
import { ScrollView, Pressable, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FlatCards from '../Components/FlatCards';
import ElevatedCards from '../Components/ElevatedCards';
import FancyCard from '../Components/FancyCard';
import ActionCard from '../Components/ActionCard';
import ContactList from '../Components/ContactList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamsList,'Home'>

const Home = ({navigation}:HomeProps) => {
    return (
        <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('BackGroundChanger')}>
            <Text style={styles.linkText}>
                Click here to go BackgroundColor Page
            </Text>
        </TouchableOpacity>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    link:{
        paddingHorizontal:8,
        marginTop:10,
    },
    linkText:{
        fontSize:24,
        fontWeight:'bold',
    },
});


export default Home;
