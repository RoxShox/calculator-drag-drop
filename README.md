# Проект: 

drag-and-drop конструктор, с помощью которого можно собрать калькулятор

## Правая часть экрана - холст

На холст можно бросать компоненты из палитры. Все элементы, брошенные на холст, располагаются вертикально.
При перетаскивании подсвечивается зона, куда вставится элемент 
Элемент удаляется с холста двойным кликом

### Сайдбар с набором компонентов. Их всего 4:

1) дисплей (на холсте он может находиться только в самом верху)
2) цифровой блок с кнопками от 0 до 9 и , (дробь)
3) кнопки операций: x, /, +, -
4) и отдельная кнопка =

Все компоненты одинаковой ширины.
Каждый элемент можно бросить на холст только один раз, затем они становятся неактивными (визуально - прозрачность 50%)

### Переключатель между режимом конструктора и runtime

- в режиме конструктора можно собирать интерфейс, но при нажатии на кнопки, они ничего не делают.
- в режиме runtime перетаскивать ничего нельзя (сайдбар скрывается), но работает калькулятор (или то что собрали). Нажимаем на кнопки и видим результат на дисплее.
- переключение сбрасывает состояние дисплея

### Стек

- TypeScript, React
- Redux Toolkit
- prettier
