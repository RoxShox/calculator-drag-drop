import { useDrag } from "react-dnd"

import { useAppSelector } from "../../../../hooks/redux"

import Button from "../../../elements/Button/Button"

import { CalcElementName } from "../../../../types"

import styles from "./СalcEqual.module.css"
import clsx from "clsx"

const СalcEqual = () => {
	const { dropCalcElements } = useAppSelector((state) => state.calcElements)
	const isEqualInConstructor = dropCalcElements.includes(CalcElementName.EQUAL)

	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: "calcElement",
		item: { name: CalcElementName.EQUAL },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}))

	const classnames = clsx(styles.equal__wrap, {
		[styles.equal__opacity]: isEqualInConstructor || isDragging,
	})

	return (
		<div className={classnames} ref={isEqualInConstructor ? null : dragRef}>
			<Button value="=" style={styles.equal__btn} onClick={() => {}} />
		</div>
	)
}

export default СalcEqual
