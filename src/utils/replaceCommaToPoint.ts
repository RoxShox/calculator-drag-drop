export const replaceCommaToPoint = (displayNumber: string) =>
	displayNumber.includes(",") ? displayNumber.replace(",", ".") : displayNumber
