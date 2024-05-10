export const calculate = (
	prevValue: string,
	currentValue: string,
	operation: string
): number => {
	if (!prevValue || !operation) return Number(currentValue)

	let result
	switch (operation) {
		case "/":
			result = +prevValue / +currentValue
			break

		case "+":
			result = +prevValue + +currentValue
			break
		case "*":
			result = +prevValue * +currentValue
			break
		case "-":
			result = +prevValue - +currentValue
			break
	}

	if (String(result).includes(".")) {
		return Number(result?.toFixed(3))
	}
	return Number(result)
}
