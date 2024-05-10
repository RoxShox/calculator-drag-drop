export const convertExpotential = (result: number) => {
	if (
		result.toString().length > 8 ||
		(result.toExponential && result.toString().includes("."))
	) {
		return result.toExponential(4)
	}
	return result.toString().replace(".", ",")
}
