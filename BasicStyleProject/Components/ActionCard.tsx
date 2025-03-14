//import liraries
import React from 'react';
import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native';

const ActionCard = () => {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                    What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image source={{uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} style={styles.cardImage}/>
                <View style={styles.bodyContainer}>
                <Text numberOfLines={4}>
                Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
                </Text>
            </View>
            <View style={styles.footerConatiner}>
                <TouchableOpacity onPress={() => openWebsite('https://ineuron.ai/')}>
                    <Text style={styles.socialLink}>Read more</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/aryanv1616/')}>
                    <Text  style={styles.socialLink}>Follow me</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:370,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'#8c7ae6',
        elevation:4,
        shadowOffset:{
            height:1,
            width:1,
        },
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontWeight:600,
        fontSize:16,
    },
    cardImage:{
        height:190,
    },
    bodyContainer:{
        padding:10,
    },
    footerConatiner:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLink:{
        fontSize:16,
        backgroundColor:'#F97F51',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:8,
    },
});

export default ActionCard;
