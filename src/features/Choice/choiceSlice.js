import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	choice: '',
	userChoice: '',
	house: '',
	selected: false,
	completed: false,
	result: '',
};

export const choiceSlice = createSlice({
	name: 'choice',
	initialState,
	reducers: {
		chooseOption: (state, action) => {
			state.choice = action.payload;
		},
		setUser: (state, action) => {
			state.userChoice = action.payload;
		},
		setHouse: (state, action) => {
			state.house = action.payload;
		},
		selected: (state, action) => {
			state.selected = action.payload;
		},
		gameStatus: state => {
			state.completed = true;
		},
		setResult: (state, action) => {
			state.result = action.payload;
		},
		resetGame: state => {
			state.choice = '';
			state.selected = false;
			state.completed = false;
			state.house = '';
			state.result = '';
		},
	},
});

export const {
	chooseOption,
	selected,
	gameStatus,
	resetGame,
	setHouse,
	setResult,
	setUser,
} = choiceSlice.actions;

export default choiceSlice.reducer;
