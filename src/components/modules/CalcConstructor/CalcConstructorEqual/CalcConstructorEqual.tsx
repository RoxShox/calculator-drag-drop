import { useDnD } from "../../../../hooks/useDnD"
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { equal } from "../../../../store/slices/calcLogics"
import { removeElement } from "../../../../store/slices/calcElements"

import Button from "../../../elements/Button/Button"

import { CalcElementName } from "../../../../types"

import styles from "./CalcConstructorEqual.module.css"
import clsx from "clsx"

const CalcConstructorEqual = () => {
	const { isChecked } = useAppSelector((state) => state.checkbox)
	const dispatch = useAppDispatch()

	const { dragRef, dropTarget, getItem, isHover } = useDnD(
		CalcElementName.EQUAL
	)
	const handleDblClickItem = () => {
		if (!isChecked) {
			dispatch(removeElement(CalcElementName.EQUAL))
		}
	}

	const classnamesEqual = clsx(styles.equal__wrap, {
		["item__border"]: isHover && getItem.name !== CalcElementName.DISPLAY,
	})

	return (
		<div ref={isChecked ? null : dragRef} onDoubleClick={handleDblClickItem}>
			<div className={classnamesEqual} ref={dropTarget}>
				<Button
					value="="
					style={styles.equal__btn}
					onClick={() => dispatch(equal())}
				/>
			</div>
		</div>
	)
}

export default CalcConstructorEqual
