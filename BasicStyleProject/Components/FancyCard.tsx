//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headerText}>Flat Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{uri:'https://i.pinimg.com/736x/31/0a/de/310ade410a59d5b04cdb17f0dd576df2.jpg'}} 
                style={styles.image} />

                <View style={styles.cardBody}>
                    <Text style={styles.title}>Ram Mandir 🚩</Text>
                    <Text style={styles.label}>Ayodhya , Ram Nagari</Text>
                    <Text style={styles.description}>The Ram Mandir in Ayodhya is a grand temple dedicated to Lord Ram, marking his believed birthplace. Built after a historic Supreme Court ruling in 2019, it replaced the Babri Masjid site and symbolizes faith and cultural heritage. The temple was inaugurated on January 22, 2024.</Text>
                    <Text style={styles.footer}> Jai Shree Ram 🙏</Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        paddingHorizontal:8,
      },
      image:{
        height:180,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:8,
        elevation:1,
      },
      card:{
        width:350,
        height:390,
        marginVertical:12,
        marginHorizontal:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },
      cardElevated:{
        backgroundColor:'#DAE0E2',
        shadowOffset:{
            height:1,
            width:1,
        },
        elevation:4,
      },
      cardBody:{
        flexGrow:1,
        paddingHorizontal:12,
      },
      title:{
        fontWeight:'bold',
        fontSize:20,
      },
      label:{
        fontSize:16,
        fontWeight:'light',
        marginBottom:6,
      },
      description:{
        fontSize:14,
        marginTop:4,
        marginBottom:12,
        flexShrink:1,
      },
      footer:{
        fontSize:16,
        color:'#EE5A24',
        elevation:1,
      }
});

export default FancyCard;
