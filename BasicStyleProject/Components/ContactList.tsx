import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const ContactList = () => {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container}>
               {contacts.map((item) => (
                <View key={item.uid} style={styles.userCard}>
                    <Image source={{uri:item.imageUrl}} style={styles.image} />
                 <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userStatus}>{item.name}</Text>
                 </View>
                </View>
               ))}
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container: {
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        borderRadius:10,
        padding:10,
        elevation:3,
    },
    image:{
        height:60,
        width:60,
        borderRadius: 60 / 2,
        marginRight:4,
    },
    userName:{
        fontSize:16,
        fontWeight:600,
    },
    userStatus:{
        fontSize:12,
    },
});


export default ContactList;
