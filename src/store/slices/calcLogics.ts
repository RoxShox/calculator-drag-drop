import { createSlice } from "@reduxjs/toolkit"

import { calculate } from "../../utils/calculate"
import { convertExpotential } from "../../utils/convertExpotential"
import { replaceCommaToPoint } from "../../utils/replaceCommaToPoint"

export interface CalcLogicsState {
	prevValue: string
	currentValue: string
	operation: string
	overwrite: boolean
}

const initialState: CalcLogicsState = {
	prevValue: "",
	currentValue: "0",
	operation: "",
	overwrite: true,
}

export const calcLogicsSlice = createSlice({
	name: "calcLogicsSlice",
	initialState,
	reducers: {
		setNum: (state, action) => {
			if (state.currentValue[0] === "0" && action.payload === "0") return
			if (state.currentValue.includes(",") && action.payload === ",") return
			if (state.currentValue.length > 8) return

			if (state.overwrite && action.payload !== ",") {
				state.currentValue = action.payload
			} else {
				state.currentValue = `${state.currentValue}${action.payload}`
			}
			state.overwrite = false
		},
		setOperation: (state, action) => {
			if (state.prevValue) {
				const val = calculate(
					replaceCommaToPoint(state.prevValue),
					replaceCommaToPoint(state.currentValue),
					state.operation
				)
				state.currentValue = convertExpotential(val)
				state.prevValue = `${val}`
			} else {
				state.prevValue = state.currentValue
				state.currentValue = "0"
			}
			state.operation = action.payload
			state.overwrite = true
		},

		equal: (state) => {
			const val = calculate(
				replaceCommaToPoint(state.prevValue),
				replaceCommaToPoint(state.currentValue),
				state.operation
			)
			state.currentValue = convertExpotential(val)
			state.prevValue = ""
			state.operation = ""
			state.overwrite = true
		},
		clearCalcState: (state) => {
			state.prevValue = ""
			state.currentValue = "0"
			state.operation = ""
			state.overwrite = true
		},
	},
})

export const { setNum, equal, setOperation, clearCalcState } =
	calcLogicsSlice.actions

export default calcLogicsSlice.reducer
