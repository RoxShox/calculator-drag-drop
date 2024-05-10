import { useDrag } from "react-dnd"

import { useAppSelector } from "../../../../hooks/redux"

import Button from "../../../elements/Button/Button"

import { CalcElementName } from "../../../../types"
import { calculatorNums } from "../../../../constants"

import clsx from "clsx"
import styles from "./CalcNumbers.module.css"

const CalcNumbers = () => {
	const { dropCalcElements } = useAppSelector((state) => state.calcElements)
	const isDropNumber = dropCalcElements.filter(
		(el) => el === CalcElementName.NUMBERS
	)
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: "calcElement",
		item: { name: CalcElementName.NUMBERS },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}))

	const classnames = clsx(styles.numbers__wrap, {
		[styles.number__opacity]: isDropNumber.length > 0 || isDragging,
	})

	return (
		<div className={classnames} ref={isDropNumber.length > 0 ? null : dragRef}>
			{calculatorNums.map((num) => (
				<Button
					key={num}
					value={num}
					style={clsx(styles.number, num === "0" && styles.number__big)}
				/>
			))}
		</div>
	)
}

export default CalcNumbers
