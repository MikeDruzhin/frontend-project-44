# Makefile
install: # устанавливает модули руководстувуясь локфайлом
	npm ci
brain-games: # запускает игру без глобальной установки
	node bin/brain-games.js
publish: # выполняет отладку публикации пакета
	npm publish --dry-run
	