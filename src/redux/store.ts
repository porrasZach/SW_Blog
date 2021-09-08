import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/rootSlice';
import { authReducer } from './slices/authSlice';

// const reducer = () => combineReducers({
//     rootReducer,
//     authReducer
// });

export const store = configureStore({
    reducer: {
        
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch