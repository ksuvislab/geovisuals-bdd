/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/data-models/road_network.js":
/*!************************************************!*\
  !*** ./src/server/data-models/road_network.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Create mongoose schema\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    name: String,\n    features: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Array\n}, { collection: 'road_network' });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('RoadNetwork', schema));\n\n//# sourceURL=webpack:///./src/server/data-models/road_network.js?");

/***/ }),

/***/ "./src/server/data-models/streets.js":
/*!*******************************************!*\
  !*** ./src/server/data-models/streets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n\n    trip_id: String,\n    tracepoints_coords: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Array,\n    matchings: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Mixed\n\n}, { collection: 'street' });\n\n//schema.index({ locations: '2dsphere'});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Street', schema));\n\n//# sourceURL=webpack:///./src/server/data-models/streets.js?");

/***/ }),

/***/ "./src/server/data-models/train.js":
/*!*****************************************!*\
  !*** ./src/server/data-models/train.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n\n    trip_id: String,\n    start_timestamp: Number,\n    end_timestamp: Number,\n    video_file: String,\n    locations: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Mixed,\n    speeds: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Array,\n    timestamps: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Array,\n    time_of_day: String,\n    weather: String,\n    scene: String,\n    image: String,\n    segments: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Mixed,\n    frame_index: Number\n\n}, { collection: 'train' });\n\nschema.index({ locations: '2dsphere' });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Train', schema));\n\n//# sourceURL=webpack:///./src/server/data-models/train.js?");

/***/ }),

/***/ "./src/server/data-models/val.js":
/*!***************************************!*\
  !*** ./src/server/data-models/val.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar schema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n\n    trip_id: String,\n    start_timestamp: Number,\n    end_timestamp: Number,\n    video_file: String,\n    locations: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Mixed,\n    speeds: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Array,\n    timestamps: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Array,\n    time_of_day: String,\n    weather: String,\n    scene: String,\n    image: String,\n    segments: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.Mixed,\n    frame_index: Number\n\n}, { collection: 'val' });\n\nschema.index({ locations: '2dsphere' });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Val', schema));\n\n//# sourceURL=webpack:///./src/server/data-models/val.js?");

/***/ }),

/***/ "./src/server/routes/query.js":
/*!************************************!*\
  !*** ./src/server/routes/query.js ***!
  \************************************/
/*! exports provided: query_all, query_all_streets, query_count, query_find_intersection, query_find_roadnetwork_intersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query_all\", function() { return query_all; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query_all_streets\", function() { return query_all_streets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query_count\", function() { return query_count; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query_find_intersection\", function() { return query_find_intersection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query_find_roadnetwork_intersection\", function() { return query_find_roadnetwork_intersection; });\n/* harmony import */ var _data_models_train__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-models/train */ \"./src/server/data-models/train.js\");\n/* harmony import */ var _data_models_val__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-models/val */ \"./src/server/data-models/val.js\");\n/* harmony import */ var _data_models_streets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-models/streets */ \"./src/server/data-models/streets.js\");\n/* harmony import */ var _data_models_road_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-models/road_network */ \"./src/server/data-models/road_network.js\");\n/* harmony import */ var JSONStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JSONStream */ \"JSONStream\");\n/* harmony import */ var JSONStream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(JSONStream__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction query_all(req, res, err) {\n    var query = req.query;\n    var model = query.model_type == 'train' ? _data_models_train__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _data_models_val__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n    model.aggregate([]).cursor().exec().pipe(JSONStream__WEBPACK_IMPORTED_MODULE_4__[\"stringify\"]()).pipe(res);\n}\n\nfunction query_all_streets(req, res, err) {\n    var model = _data_models_streets__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n    model.aggregate([]).cursor().exec().pipe(JSONStream__WEBPACK_IMPORTED_MODULE_4__[\"stringify\"]()).pipe(res);\n}\n\nfunction query_count(req, res, err) {\n    let query = req.query;\n    let model = query.model_type == 'train' ? _data_models_train__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _data_models_val__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    let key = query.key;\n    let value = query.value;\n\n    let query_obj = {};\n    query_obj[key] = value;\n\n    model.count(query_obj).exec(function (err, result) {\n        if (err) return res.end(err);\n        res.json(result);\n    });\n}\n\n// Find any trip that intersect inside the bounding box\n// Example query to find both values\n// db.getCollection('train').find({'time_of_day':{ $in: [\"night\", \"daytime\"]}});\nfunction query_find_intersection(req, res, err) {\n\n    let query = req.query;\n    let model = query.model_type == 'train' ? _data_models_train__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : _data_models_val__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    let bounding_box = JSON.parse(query.bbox);\n    //let weather = query.weather;\n    //let scene = query.scene;\n    //let time_of_day = query.time_of_day;\n\n    model.find({\n        locations: {\n            $geoIntersects: {\n                $geometry: bounding_box\n            }\n            //,\n            /*\n            $and: [\n                /*{ 'predict': { $exists: true }},*/\n            /*{ actual: { $exists: true }},*/\n            //{ 'weather': (weather !== 'all') ? weather : { $exists: true }},\n            //{ 'scene': (scene !== 'all') ? scene : { $exists: true }},\n            //{ 'time_of_day': (time_of_day !== 'all') ? time_of_day : { $exists: true }}\n            /*\n            { 'weather': (weather[0] !== 'all') ? { $in: weather } : { $exists: true }},\n            { 'scene': (scene[0] !== 'all') ? { $in: scene } : { $exists: true }},\n            { 'time_of_day': (time_of_day[0] !== 'all') ? { $in: time_of_day } : { $exists: true }}*/\n            //]\n        } }).exec(function (err, result) {\n        if (err) return res.end(err);\n        res.json(result);\n    });\n}\n\nfunction query_find_roadnetwork_intersection(req, res, err) {\n    let query = req.query;\n    let model = _data_models_road_network__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n    model.aggregate([]).cursor().exec().pipe(JSONStream__WEBPACK_IMPORTED_MODULE_4__[\"stringify\"]()).pipe(res);\n}\n\n//# sourceURL=webpack:///./src/server/routes/query.js?");

/***/ }),

/***/ "./src/server/routes/router.js":
/*!*************************************!*\
  !*** ./src/server/routes/router.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ \"./src/server/routes/query.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/queryCount').get(_query__WEBPACK_IMPORTED_MODULE_1__[\"query_count\"]);\nrouter.route('/queryFindIntersection').get(_query__WEBPACK_IMPORTED_MODULE_1__[\"query_find_intersection\"]);\nrouter.route('/queryAll').get(_query__WEBPACK_IMPORTED_MODULE_1__[\"query_all\"]);\nrouter.route('/queryAllStreets').get(_query__WEBPACK_IMPORTED_MODULE_1__[\"query_all_streets\"]);\nrouter.route('/queryRoadnetwork').get(_query__WEBPACK_IMPORTED_MODULE_1__[\"query_find_roadnetwork_intersection\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/router.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_dev_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webpack.dev.config */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/router */ \"./src/server/routes/router.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n// Mongodb\n\n// express routers\n\n\n\n/**\n * webpack initialize\n */\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n      DIST_DIR = __dirname,\n      HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n      compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_dev_config__WEBPACK_IMPORTED_MODULE_4___default.a);\n\n// Connect to mongodb\nmongoose__WEBPACK_IMPORTED_MODULE_5___default.a.connect('mongodb://localhost/geovisuals_bdd');\nvar db = mongoose__WEBPACK_IMPORTED_MODULE_5___default.a.connection;\n// Handle mongo error\ndb.on('error', console.error.bind(console, 'Connection error: '));\ndb.once('open', function () {\n    console.log('Connected to mongodb ...');\n});\n\n// parse to json attached from request body\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_7___default.a.urlencoded({ extended: false }));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_7___default.a.json());\n\n// assets\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('data'));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('resources'));\n// express router\napp.use('/', _routes_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n    publicPath: _webpack_dev_config__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n}));\n\napp.get('*', (req, res, next) => {\n    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {\n\n        if (err) {\n            return next(err);\n        }\n\n        res.set('content-type', 'text/html');\n        res.send(result), res.end();\n    });\n});\n\nconst PORT = process.env.PORT || 80;\napp.listen(PORT, () => {\n    console.log(`App listening to ${PORT} ...`);\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst htmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n    // Define entry point.\n    entry: {\n        main: './src/index.js'\n    },\n    // Define webpack built.\n    output: {\n        path: path.join(__dirname, 'dist'),\n        publicPath: '/',\n        filename: '[name].js'\n    },\n    // Development mode\n    mode: 'development',\n    // Targeting to frontend\n    target: 'web',\n\n    devtool: '#source-map',\n\n    node: {\n        fs: 'empty'\n    },\n\n    module: {\n        rules: [{\n            test: /\\.js$/,\n            exclude: /node_modules/,\n            loader: 'babel-loader'\n        }, {\n            // Loads javascript into html template\n            // Entry point is set below\n            test: /\\.html$/,\n            use: [{\n                loader: 'html-loader'\n                // options: { minimize: true }\n            }]\n        }, {\n            test: /\\.css$/,\n            use: ['style-loader', 'css-loader']\n        }, {\n            test: /\\.(png|svg|jpg|gif|woff(2)?|ttf|eot|svg)$/,\n            use: ['file-loader']\n        }]\n    },\n\n    plugins: [new htmlWebpackPlugin({\n        template: './src/html/index.html',\n        filename: './index.html',\n        excludeChunks: ['server']\n    }), new webpack.ProvidePlugin({\n        $: 'jquery',\n        jQuery: 'jquery',\n        d3: 'd3',\n        turf: '@turf/turf',\n        mapboxgl: 'mapbox-gl',\n        axios: 'axios'\n    }), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({\n        'process.browser': 'true'\n    })]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "JSONStream":
/*!*****************************!*\
  !*** external "JSONStream" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"JSONStream\");\n\n//# sourceURL=webpack:///external_%22JSONStream%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ })

/******/ });