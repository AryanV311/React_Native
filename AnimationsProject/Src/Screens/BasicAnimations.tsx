//import liraries
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

// create a component
const BasicAnimations = () => {

    const animation = useRef(new Animated.Value(0)).current;

    const handleStartAnimation = () => {
        Animated.timing(animation, {
            toValue:1,
            duration:2500,
            useNativeDriver:false,
        }).start(() => animation.setValue(0));
    };

    const backgroundColor = animation.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:['#45CE30','#F4C724', '#E71C23']
    });

    const rotate = animation.interpolate({
        inputRange:[0, 1],
        outputRange:['0deg', '360deg'],
    });

    const borderRadius = animation.interpolate({
        inputRange:[0,0.5,1],
        outputRange:[5,50,100],
    });

    const size = animation.interpolate({
        inputRange:[0,1],
        outputRange:[100, 300],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>BasicAnimations</Text>

            <Animated.View style={[styles.box, {backgroundColor:backgroundColor, transform:[{rotate:rotate}], borderRadius:borderRadius, width:size, height:size}]}>
                <Text style={[styles.boxTxt]}>
                    Animate here
                </Text>
            </Animated.View>
            <Button title="Start Animation" onPress={handleStartAnimation} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical:20,
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
    },
    box:{
        width:100,
        height:100,
        marginVertical:10,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.5,
        shadowRadius:3.5,
        elevation:5,
    },
    boxTxt:{
        fontSize:16,
        fontWeight:'bold',
    }
});

//make this component available to the app
export default BasicAnimations;
