//import liraries
//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';

// create a component
const ReanimatedCoreAnimtion = () => {
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.inputContainer]}>
                <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.inputComp}
                />
                <Animated.View style={styles.checkMark}>
                    <Text style={styles.checkMarkTxt}></Text>
                </Animated.View>
            </Animated.View>
            <Animated.View style={[styles.errorTxt]}>Email Error</Animated.View>
            <Animated.View style={[styles.inputContainer]}>
                <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputComp}
                />
                <Animated.View style={styles.checkMark}>
                    <Text style={styles.checkMarkTxt}></Text>
                </Animated.View>
            </Animated.View>
            <Animated.View style={[styles.errorTxt]}>Password Error</Animated.View>
            <Pressable style={[styles.submitButton]}>
                <Text style={styles.btnTxt}>Submit</Text>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor:'#f0f0f0',
        shadowColor:'#000',
        borderRadius:10,
        shadowOffset:{
            height:2,
            width:0
        },
        shadowOpacity:0.1,
        shadowRadius:10,
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,
    },
    inputComp:{
        flex:1,
        borderWidth:1,
        borderColor:'#ccc',
        paddingHorizontal:15,
        height:50,
        borderRadius:25,
        backgroundColor:'#fff',
        fontSize:18,
    },
    checkMark:{
        position:'absolute',
        right:15,
        alignItems:'center',
        justifyContent:'center',
        height:20,
        width:20,
    },
    checkMarkTxt:{
        color:'#40ad44',
        fontSize:16,
        fontWeight:'bold',
    },
    errorTxt:{
        color:'#ff5255',
        paddingHorizontal:15,
        fontSize:12,
        marginBottom:10,
    },
    submitButton:{
        backgroundColor:'#2196f3',
        paddingVertical:12,
        borderRadius:25,
        alignItems:'center',
        marginTop:10,
    },
    btnTxt:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
    }
});

//make this component available to the app
export default ReanimatedCoreAnimtion;

