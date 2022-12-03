import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	choice: '',
	selected: false,
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
	},
});

export const { chooseOption, selected } = choiceSlice.actions;

export default choiceSlice.reducer;
