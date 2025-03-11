import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Todo } from '../types';
import { TodoEdit } from './TodoEdit';

interface TodoItemProps {
    todo : Todo;
    onDelete: () => void
    onToggle:() => void
    onEdit:(newText:string) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, onEdit}) => {
    // console.log('tdodo item:', todo);

    const [isEditing, setIsEditing] = useState(false);

    const handleEditTodo = (newText: string) => {
        onEdit(newText);
        setIsEditing(false);
    };

    if(isEditing){
        return <TodoEdit todo={todo} onSave={handleEditTodo} onCancel={() => setIsEditing(false)}/>;
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle} style={styles.todoText}>
                <Text style={[styles.text, todo?.completed && styles.completed]}>{todo.text}</Text>
            </TouchableOpacity>

            <View  style={styles.btnContainer}>
                <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.editBtn}>
                    <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1,
    },
    todoText:{
        flex:1,
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
    },
    completed:{
        textDecorationLine:'line-through',
        color:'#888888',
    },
    btnContainer:{
        flexDirection:'row',
    },
    editBtn:{
        backgroundColor:'#007aff',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginRight:5,
    },
    deleteBtn:{
        backgroundColor:'#ff3b30',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginRight:5,
    },
    btnText:{
        color:'#fff',
        fontSize:15,
    },

}
);