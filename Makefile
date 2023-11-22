# Makefile
install: # устанавливает модули руководстувуясь локфайлом
	npm ci
brain-games: # запускает игру без глобальной установки
	node bin/brain-games.js
publish: # выполняет отладку публикации пакета
	npm publish --dry-run
lint: # запускает eslint
	npx eslint .
brain-even: # запускает игру "Проверкаа на четность"
	node bin/brain-even.js
brain-calc: # запускает игру "Калькулятор"
	node bin/brain-calc.js
brain-gcd: # запускает игру "НОД"
	node bin/brain-gcd.js
brain-progression: # запускает игру "Арифметическая прогрессия"
	node bin/brain-progression.js
brain-prime: # запускает игру "Простое ли число"
	node bin/brain-prime.js
	
