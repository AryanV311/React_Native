/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { InputTodo } from './src/components/InputTodo';
import { Todo } from './src/types';
import { TodoList } from './src/components/TodoList';



function App(): React.JSX.Element {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text:string) => {

    console.log(text);

    setTodoList([...todoList, {
      id:Date.now().toString(),
      text,
      completed:false,
    }]
  );
  };

  const deleteTodo = (id:string) => {
    setTodoList(
      todoList.filter(item => item.id !== id)
    );
  };

  const toggleTodo = (id:string) => {
    setTodoList(
      todoList.map(item => item.id === id ? {
        ...item,
        completed: !item.completed,
      } : item,
    )
    );
  };

  const editTodo = (id:string, newText:string) => {
    // console.log(id, newText);
    setTodoList(
      todoList.map(item => item.id === id ? {
        ...item,
        text: newText,
      } : item
    ),
    );
  };

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Todo App</Text>
        <InputTodo onAddTodo={addTodo}/>
        <TodoList onEditTodo={editTodo}  onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} todoList={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  headerText:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },
});

export default App;
