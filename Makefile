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
	
