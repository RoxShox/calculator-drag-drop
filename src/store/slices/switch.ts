import { createSlice } from "@reduxjs/toolkit"

export interface CheckboxState {
	isChecked: boolean
}

const initialState: CheckboxState = {
	isChecked: false,
}

export const checkboxSlice = createSlice({
	name: "calcLogicsSlice",
	initialState,
	reducers: {
		changeCheckbox: (state) => {
			state.isChecked = !state.isChecked
		},
	},
})

export const { changeCheckbox } = checkboxSlice.actions

export default checkboxSlice.reducer
