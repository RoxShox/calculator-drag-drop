import { useDnD } from "../../../../hooks/useDnD"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { removeElement } from "../../../../store/slices/calcElements"
import { setOperation } from "../../../../store/slices/calcLogics"

import Button from "../../../elements/Button/Button"

import { CalcElementName } from "../../../../types"

import { calculatorSigns } from "../../../../constants"

import clsx from "clsx"
import styles from "./CalcConstructorSigns.module.css"

const CalcConstructorSigns = () => {
	const { isChecked } = useAppSelector((state) => state.checkbox)
	const dispatch = useAppDispatch()

	const { dragRef, dropTarget, getItem, isHover } = useDnD(
		CalcElementName.SIGNS
	)

	const handleClickBtn = (sign: string) => {
		dispatch(setOperation(sign))
	}

	const handleDblClickItem = () => {
		if (!isChecked) {
			dispatch(removeElement(CalcElementName.SIGNS))
		}
	}

	const classnamesSigns = clsx(styles.signs__wrap, {
		["item__border"]: isHover && getItem.name !== CalcElementName.DISPLAY,
	})

	return (
		<div ref={isChecked ? null : dragRef} onDoubleClick={handleDblClickItem}>
			<div className={classnamesSigns} ref={dropTarget}>
				{calculatorSigns.map((sign) => (
					<Button
						key={sign}
						value={sign}
						style={styles.sign}
						onClick={() => handleClickBtn(sign)}
					/>
				))}
			</div>
		</div>
	)
}

export default CalcConstructorSigns
