import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { changeCheckbox } from "../../../store/slices/switch"

import switchIconActiveRuntime from "../../../assets/img/checkbox-checked-active.svg"
import switchIconInActiveRuntime from "../../../assets/img/checkbox-checked-inactive.svg"
import switchIconActiveConstructor from "../../../assets/img/checkbox-constructor-active.svg"
import switchIconInActiveConstructor from "../../../assets/img/checkbox-constructor-inactive.svg"

import styles from "./SwitchConstructor.module.css"
import clsx from "clsx"

const CheckboxConstructor = () => {
	const { isChecked } = useAppSelector((state) => state.checkbox)
	const dispatch = useAppDispatch()

	const handleChange = () => {
		dispatch(changeCheckbox())
	}

	const switchBoxClassnames = clsx({
		[styles.switch__item_active__box]: !isChecked,
		[styles.switch__item_inactive__box]: isChecked,
	})

	return (
		<div className={styles.switch__container}>
			<div className={styles.switch__wrap} onClick={handleChange}>
				<div className={switchBoxClassnames}></div>
				<div className={styles.switch__item}>
					<img
						src={
							isChecked ? switchIconActiveRuntime : switchIconInActiveRuntime
						}
						alt=""
					/>
					<span className={styles.switch__item__text}>Runtime</span>
				</div>
				<div className={styles.switch__item}>
					<img
						src={
							isChecked
								? switchIconInActiveConstructor
								: switchIconActiveConstructor
						}
						alt=""
					/>
					<span className={styles.switch__item__text}>Constructor</span>
				</div>
			</div>
		</div>
	)
}

export default CheckboxConstructor
