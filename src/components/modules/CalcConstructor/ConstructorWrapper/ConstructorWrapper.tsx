import { useDrop } from "react-dnd"

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import {
	addDropCalcElement,
	setDisplay,
} from "../../../../store/slices/calcElements"

import CalcConstructorDragNDrop from "../CalcConstructorDragNDrop/CalcConstructorDragNDrop"
import CalcConstructorDisplay from "../CalcConstructorDisplay/CalcConstructorDisplay"
import CalcConstructorNumbers from "../CalcConstructorNumbers/CalcConstructorNumbers"
import CalcConstructorEqual from "../CalcConstructorEqual/CalcConstructorEqual"
import CalcConstructorSigns from "../CalcConstructorSigns/CalcConstructorSigns"

import { CalcElementName } from "../../../../types"

import styles from "./ConstructorWrapper.module.css"
import clsx from "clsx"

const ConstructorWrapper = () => {
	const dispatch = useAppDispatch()
	const { dropCalcElements, isDropDisplay } = useAppSelector(
		(state) => state.calcElements
	)
	const handleDropCalcElements = (item: { name: string }) => {
		if (item.name === CalcElementName.DISPLAY) {
			dispatch(setDisplay(true))
		} else {
			dispatch(addDropCalcElement(item.name))
		}
	}

	const [{ isHover, getItem, canDrop }, dropTarget] = useDrop(() => ({
		accept: "calcElement",
		drop(item: { name: string }) {
			handleDropCalcElements(item)
		},
		collect: (monitor) => ({
			getItem: monitor.getItem(),
			canDrop: monitor.canDrop(),
			isHover: monitor.isOver(),
		}),
	}))

	const dropCalcElems = dropCalcElements.map((elem) => {
		switch (elem) {
			case CalcElementName.NUMBERS:
				return <CalcConstructorNumbers key={CalcElementName.NUMBERS} />
			case CalcElementName.EQUAL:
				return <CalcConstructorEqual key={CalcElementName.EQUAL} />
			case CalcElementName.SIGNS:
				return <CalcConstructorSigns key={CalcElementName.SIGNS} />
		}
	})

	const classnamesWrapper = clsx(styles.constructor__wrapper, {
		["item__border"]:
			canDrop && !isDropDisplay && getItem.name === CalcElementName.DISPLAY,
	})

	return (
		<div className={classnamesWrapper}>
			{isDropDisplay && <CalcConstructorDisplay />}
			{dropCalcElems}
			<CalcConstructorDragNDrop
				isHover={isHover}
				getItem={getItem}
				dropTarget={dropTarget}
			/>
		</div>
	)
}

export default ConstructorWrapper
