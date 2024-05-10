import React from "react"
import { useAppSelector } from "../../../hooks/redux"
import clsx from "clsx"
import styles from "./Button.module.css"
type ButtonProps = {
	style: any
	value: string
	onClick?: (value: string) => void
}

const Button: React.FC<ButtonProps> = ({ style, value, onClick }) => {
	const { isChecked } = useAppSelector((store) => store.checkbox)

	const handleClick = () => {
		if (onClick) {
			onClick(value)
		}
	}

	return (
		<button
			className={clsx(style, !isChecked && styles.btn__pointer_active)}
			onClick={handleClick}
		>
			{value}
		</button>
	)
}

export default Button
