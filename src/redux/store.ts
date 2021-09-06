import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/rootSlice';

export const store = configureStore({
    reducer,
    devTools: true
})

export const getState = ({  }) => {
	return {
		store: {
			message: null,

		},
		actions: {
			
		}
	};
};