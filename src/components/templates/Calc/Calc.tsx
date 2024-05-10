import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import CalcElements from "../../modules/CalcElements/СalcElements"

import styles from "./Calc.module.css"
import ConstructorWrapper from "../../modules/CalcConstructor/ConstructorWrapper/ConstructorWrapper"
import CheckboxConstructor from "../../modules/SwitchConstructor/SwitchConstructor"

const Calc = () => {
	return (
		<div className={styles.calc__container}>
			<CheckboxConstructor />
			<div className={styles.calc__wrap}>
				<DndProvider backend={HTML5Backend}>
					<CalcElements />
					<ConstructorWrapper />
				</DndProvider>
			</div>
		</div>
	)
}

export default Calc
