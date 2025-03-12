
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FlatCards = () => {
    return (
        <View>
      <Text style={styles.headerText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>winking 😉</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>red 😉</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>red 😉</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>red 😉</Text>
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
    container:{
      flex:1,
      flexDirection:'row',
      padding:8,
    },
    card:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height:100,
      width:100,
      borderRadius:8,
      margin:8,
    },
    cardOne:{
      backgroundColor:'#e46523',
    },
    cardTwo:{
      backgroundColor:'green',
    },
    cardThree:{
      backgroundColor:'blue',
    },
    text:{
      color:'#fff',
      fontWeight:'bold',
    },
  });


export default FlatCards;
