//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDisPatch, RootState } from '../store/store';
import { addTask, deleTask, fetchTasks, Task } from '../store/tasksSlice';
import Animated, { FadeInRight, FadeOutLeft, Layout } from 'react-native-reanimated';




const TaskList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch<AppDisPatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const status = useSelector((state:RootState) => state.tasks.status);

  const handleAddNewTask = () => {
    if(newTask.trim()){
        dispatch(addTask({
            title:newTask.trim(),
            completed:false,
        }));

        setNewTask('');
        setIsModalVisible(false);
    }
  };

  const handleDeleteTask = (taskId:string) => {
    Alert.alert('Delete task', 'Are you sure that tou want to delete the task?',[
      {
        text:'Cancel', style:'cancel'
      },
      {
        text:'Delete',
        style:'destructive',
        onPress: () => dispatch(deleTask(taskId)),
      },
    ]
    );
  };

  const createRenderItems = ({item}: {item:Task}): Task => {
    return (
      <Animated.View
    entering={FadeInRight}
    exiting={FadeOutLeft}
    layout={Layout.springify()}
    >
      <TouchableOpacity style={[styles.taskItem, item.completed && styles.completedTaskItem]}>
      <Text style={[styles.taskItemtxt, item.completed && styles.completedTaskItemtxt]}>{item.title} </Text>
      <TouchableOpacity style={styles.delteTaskBtn} onPress={() => handleDeleteTask(item.id)}>
        <Text style={styles.deletebtnText}>Delete</Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
    );
  };

  useEffect(() => {
    if(status === 'idle'){
        dispatch(fetchTasks());
    }
  },[status,dispatch])

  return (
    <View style={styles.container}>

      <FlatList
      data={tasks}
      renderItem={createRenderItems}
      keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.addBtn}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <KeyboardAvoidingView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add new task</Text>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Enter a new Task ..."
              placeholderTextColor="#999999"
              autoFocus
              style={styles.input}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.canceleBtn]}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.closeText}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleAddNewTask}
                style={[styles.modalBtn, styles.submitBtn]}
                >
                <Text style={styles.closeText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  addBtn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 100,
    height: 50,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 4,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    width: '90%',
    maxWidth: 400,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  closeBtn: {
    padding: 8,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    elevation: 4,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginLeft: 10,
  },
  canceleBtn: {
    backgroundColor: '#EA7773',
  },
  submitBtn: {
    backgroundColor: '#10A881',
  },
  taskItem:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#cccccc',
    padding:12,
    marginVertical:8,
    borderRadius:8,
  },
  completedTaskItem:{
    opacity:0.5,
  },
  taskItemtxt:{
    marginLeft:10,
    fontSize:16,
    // flex:1,
    flex:1,
  },
  completedTaskItemtxt:{
    textDecorationLine:'line-through',
  },
  delteTaskBtn:{
    backgroundColor:'#005bc5',
    padding:12,
    borderRadius:25,
  },
  deletebtnText:{
    color:'#fff',
    fontWeight:'bold',
  },
});

export default TaskList;
