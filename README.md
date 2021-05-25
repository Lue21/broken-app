3 пункт самопроверки в PR:


Ошибки компиляции: (+30 баллов)

1. ReferenceError: Router is not defined. Router() исправлено на require('express').Router(). в строке 1 файла 'usercontroller.js’.

2. Error: Cannot find module 'bcrypt’. Установлен модуль bcrypt. 

3. Uncaught TypeError: require(...).import is not a function. В файле db.js на 18 строку добавлено: module.exports = sequelize;

4. Uncaught. В файле game.js в строке 1 добавлено: ‘module.exports =‘.

5. ReferenceError: routers is not defined. В файле gamecontroller.js в строке 116 исправлено: ‘module.exports = routers‘ на ‘module.exports = router‘.

6. TypeError: require(...).import is not a function. В файле validate-session.js в строке 2 исправлено: var User = require('sequelize') на
var User = require('./../db’).



Ошибки в логике: (+18 баллов)

1. Добавлена строка 5 "DB_PORT=5433" в ".evn" файл. В db.js добавлено "port: process.env.DB_PORT" в строке 7 и "process.env.DB_PORT" в строке 4.

2. В файле 'app.js' в строке 16 добавлено "app.listen(process.env.APP_PORT, function() {", а так же в файле .env в строке 6 добавлено "APP_PORT=4000".

3. Error: Dialect needs to be explicitly supplied as of v4.0.0. Переустановка пакета 'PG'. NPM uninstall pg/  npm install "pg".


Рефактор: (+5 бвллов)

1. var заменен на const.


итог: 53 балла
