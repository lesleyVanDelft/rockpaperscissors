import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	choice: '',
	selected: false,
	completed: false,
};

export const choiceSlice = createSlice({
	name: 'choice',
	initialState,
	reducers: {
		chooseOption: (state, action) => {
			state.choice = action.payload;
		},
		selected: (state, action) => {
			state.selected = action.payload;
		},
		gameStatus: state => {
			state.completed = true;
		},
		resetGame: state => {
			state.choice = '';
			state.selected = false;
			state.completed = false;
		},
	},
});

export const { chooseOption, selected, gameStatus, resetGame } =
	choiceSlice.actions;

export default choiceSlice.reducer;
