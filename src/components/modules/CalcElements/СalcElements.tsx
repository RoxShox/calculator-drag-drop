import { useAppSelector } from "../../../hooks/redux"

import CalcDisplay from "./CalcDisplay/CalcDisplay"
import CalcSigns from "./CalcSigns/CalcSigns"
import CalcNumbers from "./CalcNumbers/CalcNumbers"
import СalcEqual from "./СalcEqual/СalcEqual"

import clsx from "clsx"
import styles from "./CalcElements.module.css"

const CalcElements = () => {
	const { isChecked } = useAppSelector((state) => state.checkbox)
	const calcWrapClassnames = clsx("calc__wrapper", {
		[styles.calc__wrapper_inactive]: isChecked,
	})
	return (
		<div className={calcWrapClassnames}>
			<CalcDisplay />
			<CalcSigns />
			<CalcNumbers />
			<СalcEqual />
		</div>
	)
}

export default CalcElements
