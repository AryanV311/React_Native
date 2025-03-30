import {configureStore} from '@reduxjs/toolkit';

import tasksReducer from './tasksSlice';
import projectReducer from './projectSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch