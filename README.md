редактор в стиле киберпанк

Чёрный фон, зелёные буквы, в полный экран, без скролбаров, автоотступ, граница, микроскрол, моношрифт. Исходник прост, структура атомарна, управление традиционно. Платформонезависимый, ориентрован на вэбразработку.

Необходимые условия эксплуатации:
	http сервер с php
	chromium или его производная

Установка
	Скачать и распаковать на сервере.
	Настроить серверу авторизацию.
	Загрузить editor.html 

Управление
	Control + O Открыть файл
	Control + S Сохранить файл
	Control + Shift + S Сохранить изменив имя
	Control+ G Перейти на строку с определённым номером
	Escape - Скрыть строку ввода
	Alt + Arrow( Left, Up, Right, Down ) - скролят текст не меняя положение курсора
	Enter - новая строка с тем же числом пробелов в начале как у предъидущей
	Shift + Enter - новая строка без пробелов в начале

Настройки
	строка ввода: файл - editor.js, параметры - inputVerticalShift, inputSideSpace
	микроскрол: файл - text/text.js, параметры - widthScrollStep, heightScrollStep
