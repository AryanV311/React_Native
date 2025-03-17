//import liraries
import { JSX, PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CurrencyProps = PropsWithChildren<{
    name:string,
    flag:string
}>

const CurrencyButton = (props: CurrencyProps): JSX.Element => {
    return (
        <View style={styles.container}>
             <Text style={styles.flag}>{props.flag}</Text>
             <Text style={styles.country}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },
    flag: {
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    country: {
        fontSize: 14,
        color: '#2d3436',
    }
});

export default CurrencyButton;
