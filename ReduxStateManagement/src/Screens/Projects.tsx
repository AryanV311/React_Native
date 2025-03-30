//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Projects = () => {
    return (
        <View style={styles.container}>
            <Text>Projects</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Projects;
