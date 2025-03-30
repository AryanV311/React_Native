import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Task = {
    id:string,
    title:string,
    completed:boolean
}

interface TasksState {
    tasks:Task[],
    status: 'idle' | 'succeeded' | 'failed' | 'loading',
    error: string | null,
}

const initialState: TasksState = {
    tasks: [],
    status:'idle',
    error:null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async() => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
});

export const addTask = createAsyncThunk('tasks/addTask', async(task: Omit<Task, 'id'>) => {
    const newTask = {...task, id:Date.now().toString()};
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    tasks.push(newTask);

    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask;

}
);

export const deleTask = createAsyncThunk('tasks/deleteTasks', async(taskId:string, {getState}) => {
    const state = getState() as {tasks : TasksState}
    const updatedTask = state.tasks.tasks.filter(item => item.id !== taskId);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));

    return taskId;
});


const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchTasks.pending, state => {
            state.status = 'loading';
        }).addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
            state.status = 'succeeded';
            state.tasks = action.payload;
        }).addCase(fetchTasks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        }).addCase(addTask.fulfilled, (state,action) => {
            state.tasks.push(action.payload);
        }).addCase(deleTask.fulfilled, (state,action:PayloadAction<string>) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload)
        });
    },
});

export default tasksSlice.reducer;
