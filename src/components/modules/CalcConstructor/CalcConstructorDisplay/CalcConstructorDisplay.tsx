import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { removeElement } from "../../../../store/slices/calcElements"

import { CalcElementName } from "../../../../types"

import styles from "./CalcConstructorDisplay.module.css"

const CalcConstructorDisplay = () => {
	const { currentValue } = useAppSelector((state) => state.calcLogics)
	const { isChecked } = useAppSelector((state) => state.checkbox)

	const dispatch = useAppDispatch()

	const handleDblClickItem = () => {
		if (!isChecked) {
			dispatch(removeElement(CalcElementName.DISPLAY))
		}
	}

	return (
		<div
			ref={null}
			className={styles.display}
			onDoubleClick={handleDblClickItem}
		>
			<p className={styles.display__value}>{currentValue}</p>
		</div>
	)
}

export default CalcConstructorDisplay
