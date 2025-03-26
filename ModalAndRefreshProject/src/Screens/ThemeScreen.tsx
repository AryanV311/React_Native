//import liraries
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../Context/ThemeContext';

const ThemeScreen = () => {

    const {theme, toggleTheme} = useTheme();

    const isDark = theme === 'dark';

    return (
        <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#ffffff'}]}>
            <Text style={[styles.header, {color : isDark ? "#ffffff" : "#000000"}]}>Theme Screen</Text>
            <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{false:'#767577', true:'#81b0ff'}}
            thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor={'#3e3e3e'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
    },
});

export default ThemeScreen;
