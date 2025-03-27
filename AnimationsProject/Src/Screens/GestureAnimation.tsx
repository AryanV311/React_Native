//import liraries
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const GestureAnimation = () => {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponser = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder:() => true,
            onPanResponderMove: Animated.event([
                null,
                {
                    dx:pan.x, dy:pan.y,
                },
            ],
            {
                useNativeDriver:false,
            },
        ),
        onPanResponderRelease:() => {
            Animated.spring(pan, {
                toValue: {x:0, y:0},
                useNativeDriver:false,
            }).start();
        }
        })
    ).current;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Gesture Animation</Text>
            <Animated.View style={[styles.box, pan.getLayout()]} {...panResponser.panHandlers}>
                <Text style={styles.boxTxt}>Drag Me</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        padding:15,
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
    },
    box:{
        width:100,
        height:100,
        backgroundColor:'#2475B0',
        justifyContent:'center',
        alignItems:'center',
    },
    boxTxt:{
        fontSize:16,
        fontWeight:'bold',
    },
});

export default GestureAnimation;
