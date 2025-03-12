//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headerText}>Elevated Card</Text>
            <ScrollView horizontal={true} style={styles.conatiner}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>to</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>check</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>more...</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>😒</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>😊</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.text}>😁</Text>
                </View>
            </ScrollView>
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
      conatiner:{
        padding:8,
      },
      card:{
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:4,
        margin:8,
      },
      elevatedCard:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowOpacity:0.4,
        textShadowColor:'#E4E43c',
      },
      text:{
        fontSize:16,
        color:'#000',
        fontWeight:'bold',
      },
});

export default ElevatedCards;
