import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "slice",
	initialState: {
		id: "",
	},
	reducers: {
		setId: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const selectId = (state) => state.auth.id;

export const { setId } = slice.actions;

export default slice.reducer;
