import { useDrag } from "react-dnd"

import { useAppSelector } from "../../../../hooks/redux"

import { CalcElementName } from "../../../../types"

import styles from "./CalcDisplay.module.css"
import clsx from "clsx"

const CalcDisplay = () => {
	const { isDropDisplay } = useAppSelector((state) => state.calcElements)

	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: "calcElement",
		item: { name: CalcElementName.DISPLAY },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}))

	const classnames = clsx(styles.display, {
		[styles.display__opacity]: isDropDisplay || isDragging,
	})

	return (
		<div className={classnames} ref={isDropDisplay ? null : dragRef}>
			<p className={styles.display__value}>0</p>
		</div>
	)
}

export default CalcDisplay
