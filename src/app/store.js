import { configureStore } from '@reduxjs/toolkit';
import choiceReducer from '../features/Choice/choiceSlice';

export const store = configureStore({
	reducer: {
		choice: choiceReducer,
	},
});
