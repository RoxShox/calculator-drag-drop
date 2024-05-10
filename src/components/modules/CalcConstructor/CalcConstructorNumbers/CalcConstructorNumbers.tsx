import { useDnD } from "../../../../hooks/useDnD"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { setNum } from "../../../../store/slices/calcLogics"
import { removeElement } from "../../../../store/slices/calcElements"

import Button from "../../../elements/Button/Button"

import { CalcElementName } from "../../../../types"

import { calculatorNums } from "../../../../constants"

import clsx from "clsx"
import styles from "./CalcConstructorNumbers.module.css"

const CalcConstructorNumbers = () => {
	const dispatch = useAppDispatch()
	const { isChecked } = useAppSelector((state) => state.checkbox)

	const { dragRef, dropTarget, getItem, isHover } = useDnD(
		CalcElementName.NUMBERS
	)

	const handleClickBtn = (number: string) => {
		dispatch(setNum(number))
	}

	const handleDblClickItem = () => {
		if (!isChecked) {
			dispatch(removeElement(CalcElementName.NUMBERS))
		}
	}

	const classnamesNumbers = clsx(styles.numbers__wrap, {
		["item__border"]: isHover && getItem.name !== CalcElementName.DISPLAY,
	})

	return (
		<div ref={dropTarget} onDoubleClick={handleDblClickItem}>
			<div className={classnamesNumbers} ref={isChecked ? null : dragRef}>
				{calculatorNums.map((num) => (
					<Button
						key={num}
						value={num}
						style={clsx(styles.number, num === "0" && styles.number__big)}
						onClick={() => handleClickBtn(num)}
					/>
				))}
			</div>
		</div>
	)
}

export default CalcConstructorNumbers
