import { useDrag } from "react-dnd"

import { useAppSelector } from "../../../../hooks/redux"

import Button from "../../../elements/Button/Button"

import { CalcElementName } from "../../../../types"

import styles from "./CalcSigns.module.css"
import clsx from "clsx"

const CalcSigns = () => {
	const { dropCalcElements } = useAppSelector((state) => state.calcElements)
	const isDropSigns = dropCalcElements.filter(
		(el) => el === CalcElementName.SIGNS
	)
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: "calcElement",
		item: { name: CalcElementName.SIGNS },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}))

	const classnames = clsx(styles.signs__wrap, {
		[styles.signs__opacity]: isDropSigns.length > 0 || isDragging,
	})

	return (
		<div className={classnames} ref={isDropSigns.length > 0 ? null : dragRef}>
			<Button value="/" style={styles.sign} onClick={() => {}} />
			<Button value="*" style={styles.sign} onClick={() => {}} />
			<Button value="-" style={styles.sign} onClick={() => {}} />
			<Button value="+" style={styles.sign} onClick={() => {}} />
		</div>
	)
}

export default CalcSigns
