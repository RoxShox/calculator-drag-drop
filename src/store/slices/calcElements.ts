import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { CalcElementName } from "../../types"

export interface CounterState {
	dropCalcElements: Array<string>
	isDropDisplay: boolean
}
interface IChangeElementPositionAction {
	name: CalcElementName
	replaceableEl: CalcElementName
}

const initialState: CounterState = {
	dropCalcElements: [],
	isDropDisplay: false,
}

export const calcElementsSlice = createSlice({
	name: "calcElementsSlice",
	initialState,
	reducers: {
		setDisplay: (state, action: PayloadAction<boolean>) => {
			state.isDropDisplay = action.payload
		},
		addDropCalcElement: (state, action) => {
			if (state.dropCalcElements.indexOf(action.payload) !== -1) {
				state.dropCalcElements = state.dropCalcElements.filter(
					(el) => el !== action.payload
				)
			}

			state.dropCalcElements = [...state.dropCalcElements, action.payload]
		},
		removeElement: (state, action) => {
			if (action.payload === CalcElementName.DISPLAY) {
				state.isDropDisplay = false
			}
			state.dropCalcElements = state.dropCalcElements.filter(
				(el) => el !== action.payload
			)
		},
		changeElementPositionInConstructor: (
			state,
			action: PayloadAction<IChangeElementPositionAction>
		) => {
			if (action.payload.name !== action.payload.replaceableEl) {
				state.dropCalcElements.filter((el) => el !== action.payload.name)
				const arr = state.dropCalcElements.filter(
					(el) => el !== action.payload.name
				)
				console.log(arr)

				const leftSide = arr.slice(
					0,
					state.dropCalcElements.indexOf(action.payload.replaceableEl)
				)

				const rightSide = arr.slice(
					state.dropCalcElements.indexOf(action.payload.replaceableEl)
				)
				console.log(leftSide)
				console.log(rightSide)

				state.dropCalcElements = [
					...leftSide,
					action.payload.name,
					...rightSide,
				]
			}
		},
	},
})

export const {
	setDisplay,
	addDropCalcElement,
	changeElementPositionInConstructor,
	removeElement,
} = calcElementsSlice.actions

export default calcElementsSlice.reducer
