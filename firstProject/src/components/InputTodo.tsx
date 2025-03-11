import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface todoInputprops {
    onAddTodo : (text:string) => void
}

export const InputTodo : React.FC<todoInputprops> = ({onAddTodo}) => {

    const [value, setValue] = useState('');

    const handleAddTodo = () => {
        if(value.trim()){
            onAddTodo(value.trim());
            setValue('');
        }
    };

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Add todo here ...." value={value} onChangeText={setValue} />

            <TouchableOpacity onPress={handleAddTodo} style={styles.addToBtn}>
                <Text style={styles.addToBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20,
    },
    input:{
        flex:1,
        borderColor:'#cccccc',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:10,
    },
    addToBtn:{
        backgroundColor:'#007aff',
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
    },
    addToBtnText:{
        color:'#fff',
        fontWeight:'bold',
    },
}
);

