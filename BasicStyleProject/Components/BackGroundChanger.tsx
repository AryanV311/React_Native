//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native';

const BackGroundChanger = () => {

    const [randomBgColor, setRandomBgColor] = useState('#FFFFFF');

    const randomColorGenerator = () => {
        let hex = '123456789ABCDEF';
        let color = '#';

        for(let i = 0; i < 6; i++){
            color += hex[Math.floor(Math.random() * 16)];
        }

        setRandomBgColor(color);
    };

    return (
        <>
        <StatusBar backgroundColor={randomBgColor}/>
        <View style={[styles.container, {backgroundColor: randomBgColor}]}>
            <TouchableHighlight style={styles.button} onPress={randomColorGenerator}>
                <View style={styles.actionBtn}>
                    <Text style={styles.actionBtnText}>Click to change BackgroundColor</Text>
                </View>
            </TouchableHighlight>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn:{
        borderRadius:12,
        backgroundColor:'#6A1B4D',
        paddingVertical:10,
        paddingHorizontal:20,
    },
    actionBtnText:{
        color:'#FFFFFF',
        fontSize:24,
    },
    button:{
        borderRadius:12,
        // backgroundColor:'red',
    },
});

export default BackGroundChanger;
