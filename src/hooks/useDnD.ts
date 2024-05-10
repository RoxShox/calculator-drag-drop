import { useDrag, useDrop } from "react-dnd"
import {
	changeElementPositionInConstructor,
	setDisplay,
} from "../store/slices/calcElements"
import { useAppDispatch } from "./redux"
import { CalcElementName } from "../types"

export const useDnD = (name: CalcElementName) => {
	const dispatch = useAppDispatch()

	const changeElementOfConstructor = (item: { name: CalcElementName }) => {
		if (item.name === CalcElementName.DISPLAY) {
			dispatch(setDisplay(true))
		}
		dispatch(
			changeElementPositionInConstructor({
				name,
				replaceableEl: CalcElementName.EQUAL,
			})
		)
	}

	const [{ isHover, getItem }, dropTarget] = useDrop({
		accept: "calcElement",
		drop(item: { name: CalcElementName }) {
			changeElementOfConstructor(item)
		},
		collect: (monitor) => ({
			isHover: monitor.isOver(),
			getItem: monitor.getItem(),
		}),
	})

	const [{}, dragRef] = useDrag(() => ({
		type: "calcElement",
		item: { name: CalcElementName.EQUAL },
		collect: (monitor) => ({}),
	}))

	return { dragRef, isHover, getItem, dropTarget }
}
