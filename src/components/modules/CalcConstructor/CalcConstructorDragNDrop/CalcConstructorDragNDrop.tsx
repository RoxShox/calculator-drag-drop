import React, { useEffect } from "react"
import { ConnectDropTarget } from "react-dnd"

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux"
import { clearCalcState } from "../../../../store/slices/calcLogics"

import { CalcElementName } from "../../../../types"

import iconDrop from "../../../../assets/img/icon-drop.svg"

import styles from "./CalcConstructorDragNDrop.module.css"
import clsx from "clsx"

type CalcConstructorDragNDrop = {
	dropTarget: ConnectDropTarget
	isHover: boolean
	getItem: { name: string }
}

const CalcConstructorDragNDrop: React.FC<CalcConstructorDragNDrop> = ({
	dropTarget,
	isHover,
	getItem,
}) => {
	const { dropCalcElements, isDropDisplay } = useAppSelector(
		(state) => state.calcElements
	)
	const { isChecked } = useAppSelector((state) => state.checkbox)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!isChecked) {
			dispatch(clearCalcState())
		}
	}, [isChecked, dispatch])

	const haveElemConstructor = !!dropCalcElements.length || isDropDisplay

	const classNames = clsx(styles.drop__wrap, {
		[styles.drop__background]: isHover && !haveElemConstructor,
		[styles.drop__delete_border]: haveElemConstructor,
		["item__border"]:
			isHover &&
			getItem.name !== CalcElementName.DISPLAY &&
			haveElemConstructor,
	})

	return (
		<div ref={dropTarget} className={classNames}>
			{!haveElemConstructor && (
				<div className={styles.drop__info}>
					<img src={iconDrop} alt="" />
					<h3 className={styles.drop__info__title}>Перетащите сюда</h3>
					<p className={styles.drop__info__descr}>
						любой элемент из левой панели
					</p>
				</div>
			)}
		</div>
	)
}

export default CalcConstructorDragNDrop
