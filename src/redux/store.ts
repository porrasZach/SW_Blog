import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './slices/bookSlice';
import { rootReducer } from './slices/rootSlice';
import { blogReducer } from './slices/blogSlice';
import { rimReducer } from './slices/rimSlice';


export const store = configureStore({
    reducer: {
        book: bookReducer,
        root: rootReducer,
        blog: blogReducer,
        rim: rimReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;