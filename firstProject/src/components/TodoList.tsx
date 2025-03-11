import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Todo } from '../types';
import { TodoItem } from './TodoItem';

interface TodoListprops {
    todoList: Todo[]
    onDeleteTodo: (id:string) => void
    onToggleTodo:(id:string) => void
    onEditTodo: (id:string, newText:string) => void
}

export const TodoList : React.FC<TodoListprops> = ({todoList, onDeleteTodo, onToggleTodo, onEditTodo}) => {
    return <ScrollView style={styles.container}>
        {
            todoList.map(todo =>
                <TodoItem key={todo.id} onToggle={() => onToggleTodo(todo.id)} onDelete={() => onDeleteTodo(todo.id)} todo={todo} onEdit={newText => onEditTodo(todo?.id, newText)} />
             )
        }
    </ScrollView>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20,
    },
}
);