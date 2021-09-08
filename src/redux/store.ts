import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './slices/bookSlice';
import { rootReducer } from './slices/rootSlice';
import { blogReducer } from './slices/blogSlice';


export const store = configureStore({
    reducer: {
        book: bookReducer,
        root: rootReducer,
        blog: blogReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;