/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {Op, Sequelize} = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nconst {initDatabase} = __webpack_require__(/*! ./server/database/database.ts */ \"./src/server/database/database.ts\");\nconst {initAPI} = __webpack_require__(/*! ./server/api.ts */ \"./src/server/api.ts\");\n\nconst { Server } = __webpack_require__(/*! socket.io */ \"socket.io\")\n\nconst express = __webpack_require__(/*! express */ \"express\")\nconst app = express()\n\napp.use(express.json())\n\nconst http = __webpack_require__(/*! http */ \"http\")\nconst server = http.createServer(app)\nconst io = new Server(server, {\n    cors: {\n        origin: 'http://localhost',\n        methods: ['GET', 'POST']\n    }}\n)\n\nconst port = process.env.PORT || 2000\nserver.listen(port)\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config()\n\ninitDatabase()\ninitAPI(app)\n\napp.use('/', express.static('./dist'))\n\nconsole.log('Port: ' + port)\n\n//# sourceURL=webpack://quiz.host/./src/server.ts?");

/***/ }),

/***/ "./src/server/api.ts":
/*!***************************!*\
  !*** ./src/server/api.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initAPI: () => (/* binding */ initAPI)\n/* harmony export */ });\nconst PACKAGE = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nconst prefix = '/api'\nconst authToken = process.env.AUTH_TOKEN\n\nconst initAPI = (app) => {\n\n    const checkAuth = (request) => {\n        return request.cookies && request.cookies.auth === authToken\n    }\n\n    app.get(prefix + '/version', async (request, response) => {\n        response.json(\n            {\n                version: PACKAGE.version,\n            })\n    })\n\n    let routes = [];\n    app._router.stack.forEach(function (r) {\n        if (r.route && r.route.path) {\n            routes.push(r.route.path)\n        }\n    })\n\n    app.get(prefix, function (request, response) {\n        response.json(routes);\n    })\n}\n\n\n\n//# sourceURL=webpack://quiz.host/./src/server/api.ts?");

/***/ }),

/***/ "./src/server/database/database.ts":
/*!*****************************************!*\
  !*** ./src/server/database/database.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   getTokens: () => (/* binding */ getTokens),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   getUsers: () => (/* binding */ getUsers),\n/* harmony export */   initDatabase: () => (/* binding */ initDatabase),\n/* harmony export */   setToken: () => (/* binding */ setToken)\n/* harmony export */ });\nlet {Op, Sequelize} = __webpack_require__(/*! sequelize */ \"sequelize\");\n// require(\"sqlite3\");\nlet {initModels, USER, TOKEN} = __webpack_require__(/*! ./models.ts */ \"./src/server/database/models.ts\");\n\n\n// console.log(process.env.DATABASE_URL)\n\n//  TODO Sync TODO TODO\nlet FORCE = false\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config()\n\nlet sequelize\n\n// console.log(process.env.DATABASE_URL)\n\nconst initDatabase = () => {\n\n    // SQLite database file path\n    const dbPath = './database.sqlite';\n\n    try {\n        sequelize = new Sequelize({\n            dialect: 'sqlite',\n            storage: dbPath, // Path to database file\n            logging: false,\n        });\n    } catch (e) {\n        console.log(e);\n    }\n\n    console.log(sequelize)\n\n    // Auth\n    try {\n        sequelize.authenticate().then(() => {\n            console.log('Connection has been established successfully')\n        })\n    } catch (error) {\n        console.error('Unable to connect to the database:', error)\n    }\n\n    sequelize.sync({force: FORCE, alter: true}).then(async () => {\n        console.log('DB SYNC' + (FORCE ? ' FORCE' : ''))\n    })\n\n    // Models\n    initModels(sequelize)\n}\n\nconst getUsers = async (limit = '1000', order = 'createdAt') => {\n    return await USER.findAll({\n        order: [\n            [order, 'DESC'],\n        ],\n        limit: parseInt(limit),\n    })\n}\n\nconst getUser = async (uuid) => {\n    const user = USER.findOne({where: {uuid: uuid}})\n    return user\n}\n\nconst getToken = async (tokenName) => {\n    const token = TOKEN.findOne({where: {title: tokenName}})\n    return token\n}\n\nconst getTokens = async (limit = '1000', order = 'createdAt') => {\n    return await TOKEN.findAll({\n        order: [\n            [order, 'DESC'],\n        ],\n        limit: parseInt(limit),\n    })\n}\n\nconst setToken = async (aiToken) => {\n}\n\n// const updatePoints = async (clientUser) => {\n//     let user = await USER.findOne({where: {uuid: clientUser.uuid}})\n//     const updateApproved = true\n//     if (user && updateApproved) {\n//         user.stats.points = clientUser.stats.points + 1\n//         await user.save()\n//     }\n// }\n//\nconst updateUser = async (clientUser) => {\n\n    // TODO check here if points change > 1 user go to type ai\n\n    let [user, created] = await USER.findOrCreate({where: {uuid: clientUser.uuid}, clientUser})\n    return user\n}\n\n\n\n\n\n//# sourceURL=webpack://quiz.host/./src/server/database/database.ts?");

/***/ }),

/***/ "./src/server/database/models.ts":
/*!***************************************!*\
  !*** ./src/server/database/models.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TOKEN: () => (/* binding */ TOKEN),\n/* harmony export */   USER: () => (/* binding */ USER),\n/* harmony export */   initModels: () => (/* binding */ initModels)\n/* harmony export */ });\n\n// lang domain\nconst {DataTypes, Model} = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nclass USER extends Model {\n}\n\nclass TOKEN extends Model {\n}\n\nlet initModels = (sequelize) => {\n\n    USER.init({\n        id: {\n            type: DataTypes.INTEGER,\n            primaryKey: true,\n            autoIncrement: true,\n        },\n        uuid: {\n            type: DataTypes.STRING,\n            unique: true\n        },\n        name: {\n            type: DataTypes.STRING,\n        },\n        tokens: {\n            type: DataTypes.JSONB,\n        },\n    }, {sequelize, modelName: 'user', timestamps: true})\n\n}\n\n\n\n//# sourceURL=webpack://quiz.host/./src/server/database/models.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"quiz.host\",\"version\":\"0.1.4\",\"description\":\"Quiz host stand server\",\"main\":\"server.ts\",\"scripts\":{\"start\":\"node dist/server.js\",\"watch\":\"webpack --watch --config webpack.config.js\",\"watch-server\":\"webpack --watch --config webpack.server.config.js\",\"build\":\"NODE_ENV=production webpack --stats-error-details\",\"test\":\"mocha --require babel-mocha.js\",\"outdated\":\"npm outdated\",\"depcheck\":\"npx depcheck\",\"audit\":\"npm audit\"},\"author\":\"mpakunderscore\",\"license\":\"\",\"devDependencies\":{\"@babel/plugin-transform-react-jsx\":\"^7.21.5\",\"@babel/plugin-transform-runtime\":\"^7.21.4\",\"@babel/preset-env\":\"^7.24.0\",\"@babel/preset-react\":\"^7.23.3\",\"@types/express\":\"^4.17.21\",\"@types/node\":\"^20.2.1\",\"@types/react\":\"^18.2.6\",\"babel-loader\":\"^9.1.3\",\"bufferutil\":\"^4.0.8\",\"copy-webpack-plugin\":\"^12.0.2\",\"css-loader\":\"^6.7.4\",\"stream-browserify\":\"^3.0.0\",\"style-loader\":\"^3.3.3\",\"terser-webpack-plugin\":\"^5.3.10\",\"ts-loader\":\"^9.4.2\",\"typescript\":\"^5.0.4\",\"utf-8-validate\":\"^5.0.10\",\"webpack-bundle-analyzer\":\"^4.10.1\",\"webpack-cli\":\"^5.1.4\",\"webpack-node-externals\":\"^3.0.0\"},\"dependencies\":{\"dotenv\":\"^16.3.1\",\"express\":\"^4.18.2\",\"pg\":\"^8.11.3\",\"pg-hstore\":\"^2.3.4\",\"react\":\"^18.2.0\",\"react-dom\":\"^18.2.0\",\"sequelize\":\"^6.37.1\",\"socket.io\":\"^4.7.1\",\"socket.io-client\":\"^4.7.1\",\"sqlite3\":\"^5.1.7\"},\"eslintConfig\":{\"extends\":\"react-app\"},\"browserslist\":{\"production\":[\">0.2%\",\"not dead\",\"not op_mini all\"],\"development\":[\"last 1 chrome version\",\"last 1 firefox version\",\"last 1 safari version\"]}}');\n\n//# sourceURL=webpack://quiz.host/./package.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;