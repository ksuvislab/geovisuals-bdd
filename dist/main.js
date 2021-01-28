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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./all.min.css */ "./node_modules/css-loader/index.js!./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d28c96cabe5302f1b2c90275cd3f4e69.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d10d00980077f67990f73b1961bc46e.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dfe5aa4344a2d8a29aec8d83fb3fb14e.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ce1e868452204695c8ac1c70f693c2d.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2 ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c9f225e8f69c622f681cf1ed973cc3d.woff2";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0232fe8b09de812c88e6cc27f57a3a88.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d0fdc7c20b0b0b1aaf27327547735fa3.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "398be22b2308585b84da8e858e2d7b60.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3cace4a04d941b5981ba32c6ce9afae1.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "847712aaabbeba674afdda86d31cab17.woff2";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "00bb62bc33034479d5e82a0fd1c5efe3.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2306f642b31b774ba1d8b6b784539e19.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "260d033f79f75d670fd09d8cf7c8bf8d.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4bfbf7eb4b19d9ff9293eb177b6d0070.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9ae050d1876ac1763eb6afe4264e6d5a.woff2";

/***/ }),

/***/ "./node_modules/@mapbox/extent/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@mapbox/extent/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Extent;

function Extent(bbox) {
    if (!(this instanceof Extent)) {
        return new Extent(bbox);
    }
    this._bbox = bbox || [Infinity, Infinity, -Infinity, -Infinity];
    this._valid = !!bbox;
}

Extent.prototype.include = function(ll) {
    this._valid = true;
    this._bbox[0] = Math.min(this._bbox[0], ll[0]);
    this._bbox[1] = Math.min(this._bbox[1], ll[1]);
    this._bbox[2] = Math.max(this._bbox[2], ll[0]);
    this._bbox[3] = Math.max(this._bbox[3], ll[1]);
    return this;
};

Extent.prototype.equals = function(_) {
    var other;
    if (_ instanceof Extent) { other = _.bbox(); } else { other = _; }
    return this._bbox[0] == other[0] &&
        this._bbox[1] == other[1] &&
        this._bbox[2] == other[2] &&
        this._bbox[3] == other[3];
};

Extent.prototype.center = function(_) {
    if (!this._valid) return null;
    return [
        (this._bbox[0] + this._bbox[2]) / 2,
        (this._bbox[1] + this._bbox[3]) / 2]
};

Extent.prototype.union = function(_) {
    this._valid = true;
    var other;
    if (_ instanceof Extent) { other = _.bbox(); } else { other = _; }
    this._bbox[0] = Math.min(this._bbox[0], other[0]);
    this._bbox[1] = Math.min(this._bbox[1], other[1]);
    this._bbox[2] = Math.max(this._bbox[2], other[2]);
    this._bbox[3] = Math.max(this._bbox[3], other[3]);
    return this;
};

Extent.prototype.bbox = function() {
    if (!this._valid) return null;
    return this._bbox;
};

Extent.prototype.contains = function(ll) {
    if (!ll) return this._fastContains();
    if (!this._valid) return null;
    var lon = ll[0], lat = ll[1];
    return this._bbox[0] <= lon &&
        this._bbox[1] <= lat &&
        this._bbox[2] >= lon &&
        this._bbox[3] >= lat;
};

Extent.prototype.intersect = function(_) {
    if (!this._valid) return null;

    var other;
    if (_ instanceof Extent) { other = _.bbox(); } else { other = _; }

    return !(
      this._bbox[0] > other[2] ||
      this._bbox[2] < other[0] ||
      this._bbox[3] < other[1] ||
      this._bbox[1] > other[3]
    );
};

Extent.prototype._fastContains = function() {
    if (!this._valid) return new Function('return null;');
    var body = 'return ' +
        this._bbox[0] + '<= ll[0] &&' +
        this._bbox[1] + '<= ll[1] &&' +
        this._bbox[2] + '>= ll[0] &&' +
        this._bbox[3] + '>= ll[1]';
    return new Function('ll', body);
};

Extent.prototype.polygon = function() {
    if (!this._valid) return null;
    return {
        type: 'Polygon',
        coordinates: [
            [
                // W, S
                [this._bbox[0], this._bbox[1]],
                // E, S
                [this._bbox[2], this._bbox[1]],
                // E, N
                [this._bbox[2], this._bbox[3]],
                // W, N
                [this._bbox[0], this._bbox[3]],
                // W, S
                [this._bbox[0], this._bbox[1]]
            ]
        ]
    };
};


/***/ }),

/***/ "./node_modules/@mapbox/geojson-area/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@mapbox/geojson-area/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wgs84 = __webpack_require__(/*! wgs84 */ "./node_modules/wgs84/index.js");

module.exports.geometry = geometry;
module.exports.ring = ringArea;

function geometry(_) {
    var area = 0, i;
    switch (_.type) {
        case 'Polygon':
            return polygonArea(_.coordinates);
        case 'MultiPolygon':
            for (i = 0; i < _.coordinates.length; i++) {
                area += polygonArea(_.coordinates[i]);
            }
            return area;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
            return 0;
        case 'GeometryCollection':
            for (i = 0; i < _.geometries.length; i++) {
                area += geometry(_.geometries[i]);
            }
            return area;
    }
}

function polygonArea(coords) {
    var area = 0;
    if (coords && coords.length > 0) {
        area += Math.abs(ringArea(coords[0]));
        for (var i = 1; i < coords.length; i++) {
            area -= Math.abs(ringArea(coords[i]));
        }
    }
    return area;
}

/**
 * Calculate the approximate area of the polygon were it projected onto
 *     the earth.  Note that this area will be positive if ring is oriented
 *     clockwise, otherwise it will be negative.
 *
 * Reference:
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 *     Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 *     Laboratory, Pasadena, CA, June 2007 http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409
 *
 * Returns:
 * {float} The approximate signed geodesic area of the polygon in square
 *     meters.
 */

function ringArea(coords) {
    var p1, p2, p3, lowerIndex, middleIndex, upperIndex, i,
    area = 0,
    coordsLength = coords.length;

    if (coordsLength > 2) {
        for (i = 0; i < coordsLength; i++) {
            if (i === coordsLength - 2) {// i = N-2
                lowerIndex = coordsLength - 2;
                middleIndex = coordsLength -1;
                upperIndex = 0;
            } else if (i === coordsLength - 1) {// i = N-1
                lowerIndex = coordsLength - 1;
                middleIndex = 0;
                upperIndex = 1;
            } else { // i = 0 to N-3
                lowerIndex = i;
                middleIndex = i+1;
                upperIndex = i+2;
            }
            p1 = coords[lowerIndex];
            p2 = coords[middleIndex];
            p3 = coords[upperIndex];
            area += ( rad(p3[0]) - rad(p1[0]) ) * Math.sin( rad(p2[1]));
        }

        area = area * wgs84.RADIUS * wgs84.RADIUS / 2;
    }

    return area;
}

function rad(_) {
    return _ * Math.PI / 180;
}

/***/ }),

/***/ "./node_modules/@mapbox/geojson-coords/flatten.js":
/*!********************************************************!*\
  !*** ./node_modules/@mapbox/geojson-coords/flatten.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function flatten(list) {
    return _flatten(list);

    function _flatten(list) {
        if (Array.isArray(list) && list.length &&
            typeof list[0] === 'number') {
            return [list];
        }
        return list.reduce(function (acc, item) {
            if (Array.isArray(item) && Array.isArray(item[0])) {
                return acc.concat(_flatten(item));
            } else {
                acc.push(item);
                return acc;
            }
        }, []);
    }
};


/***/ }),

/***/ "./node_modules/@mapbox/geojson-coords/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/geojson-coords/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var geojsonNormalize = __webpack_require__(/*! @mapbox/geojson-normalize */ "./node_modules/@mapbox/geojson-normalize/index.js"),
    geojsonFlatten = __webpack_require__(/*! geojson-flatten */ "./node_modules/geojson-flatten/dist/index.js"),
    flatten = __webpack_require__(/*! ./flatten */ "./node_modules/@mapbox/geojson-coords/flatten.js");

module.exports = function(_) {
    if (!_) return [];
    var normalized = geojsonFlatten(geojsonNormalize(_)),
        coordinates = [];
    normalized.features.forEach(function(feature) {
        if (!feature.geometry) return;
        coordinates = coordinates.concat(flatten(feature.geometry.coordinates));
    });
    return coordinates;
};


/***/ }),

/***/ "./node_modules/@mapbox/geojson-extent/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/geojson-extent/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var geojsonCoords = __webpack_require__(/*! @mapbox/geojson-coords */ "./node_modules/@mapbox/geojson-coords/index.js"),
    traverse = __webpack_require__(/*! traverse */ "./node_modules/traverse/index.js"),
    extent = __webpack_require__(/*! @mapbox/extent */ "./node_modules/@mapbox/extent/index.js");

var geojsonTypesByDataAttributes = {
    features: ['FeatureCollection'],
    coordinates: ['Point', 'MultiPoint', 'LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'],
    geometry: ['Feature'],
    geometries: ['GeometryCollection']
}

var dataAttributes = Object.keys(geojsonTypesByDataAttributes);

module.exports = function(_) {
    return getExtent(_).bbox();
};

module.exports.polygon = function(_) {
    return getExtent(_).polygon();
};

module.exports.bboxify = function(_) {
    return traverse(_).map(function(value) {
        if (!value) return ;

        var isValid = dataAttributes.some(function(attribute){
            if(value[attribute]) {
                return geojsonTypesByDataAttributes[attribute].indexOf(value.type) !== -1;
            }
            return false;
        });

        if(isValid){
            value.bbox = getExtent(value).bbox();
            this.update(value);
        }

    });
};

function getExtent(_) {
    var bbox = [Infinity, Infinity, -Infinity, -Infinity],
        ext = extent(),
        coords = geojsonCoords(_);
    for (var i = 0; i < coords.length; i++) ext.include(coords[i]);
    return ext;
}


/***/ }),

/***/ "./node_modules/@mapbox/geojson-normalize/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mapbox/geojson-normalize/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalize;

var types = {
    Point: 'geometry',
    MultiPoint: 'geometry',
    LineString: 'geometry',
    MultiLineString: 'geometry',
    Polygon: 'geometry',
    MultiPolygon: 'geometry',
    GeometryCollection: 'geometry',
    Feature: 'feature',
    FeatureCollection: 'featurecollection'
};

/**
 * Normalize a GeoJSON feature into a FeatureCollection.
 *
 * @param {object} gj geojson data
 * @returns {object} normalized geojson data
 */
function normalize(gj) {
    if (!gj || !gj.type) return null;
    var type = types[gj.type];
    if (!type) return null;

    if (type === 'geometry') {
        return {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                properties: {},
                geometry: gj
            }]
        };
    } else if (type === 'feature') {
        return {
            type: 'FeatureCollection',
            features: [gj]
        };
    } else if (type === 'featurecollection') {
        return gj;
    }
}


/***/ }),

/***/ "./node_modules/@mapbox/geojsonhint/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mapbox/geojsonhint/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var jsonlint = __webpack_require__(/*! jsonlint-lines */ "./node_modules/jsonlint-lines/lib/jsonlint.js"),
  geojsonHintObject = __webpack_require__(/*! ./object */ "./node_modules/@mapbox/geojsonhint/lib/object.js");

/**
 * @alias geojsonhint
 * @param {(string|object)} GeoJSON given as a string or as an object
 * @param {Object} options
 * @param {boolean} [options.noDuplicateMembers=true] forbid repeated
 * properties. This is only available for string input, becaused parsed
 * Objects cannot have duplicate properties.
 * @param {boolean} [options.precisionWarning=true] warn if GeoJSON contains
 * unnecessary coordinate precision.
 * @returns {Array<Object>} an array of errors
 */
function hint(str, options) {

    var gj, errors = [];

    if (typeof str === 'object') {
        gj = str;
    } else if (typeof str === 'string') {
        try {
            gj = jsonlint.parse(str);
        } catch(e) {
            var match = e.message.match(/line (\d+)/);
            var lineNumber = parseInt(match[1], 10);
            return [{
                line: lineNumber - 1,
                message: e.message,
                error: e
            }];
        }
    } else {
        return [{
            message: 'Expected string or object as input',
            line: 0
        }];
    }

    errors = errors.concat(geojsonHintObject.hint(gj, options));

    return errors;
}

module.exports.hint = hint;


/***/ }),

/***/ "./node_modules/@mapbox/geojsonhint/lib/object.js":
/*!********************************************************!*\
  !*** ./node_modules/@mapbox/geojsonhint/lib/object.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rightHandRule = __webpack_require__(/*! ./rhr */ "./node_modules/@mapbox/geojsonhint/lib/rhr.js");

/**
 * @alias geojsonhint
 * @param {(string|object)} GeoJSON given as a string or as an object
 * @param {Object} options
 * @param {boolean} [options.noDuplicateMembers=true] forbid repeated
 * properties. This is only available for string input, becaused parsed
 * Objects cannot have duplicate properties.
 * @param {boolean} [options.precisionWarning=true] warn if GeoJSON contains
 * unnecessary coordinate precision.
 * @returns {Array<Object>} an array of errors
 */
function hint(gj, options) {

    var errors = [];
    var precisionWarningCount = 0;
    var maxPrecisionWarnings = 10;
    var maxPrecision = 6;

    function root(_) {

        if ((!options || options.noDuplicateMembers !== false) &&
           _.__duplicateProperties__) {
            errors.push({
                message: 'An object contained duplicate members, making parsing ambigous: ' + _.__duplicateProperties__.join(', '),
                line: _.__line__
            });
        }

        if (requiredProperty(_, 'type', 'string')) {
            return;
        }

        if (!types[_.type]) {
            var expectedType = typesLower[_.type.toLowerCase()];
            if (expectedType !== undefined) {
                errors.push({
                    message: 'Expected ' + expectedType + ' but got ' + _.type + ' (case sensitive)',
                    line: _.__line__
                });
            } else {
                errors.push({
                    message: 'The type ' + _.type + ' is unknown',
                    line: _.__line__
                });
            }
        } else if (_) {
            types[_.type](_);
        }
    }

    function everyIs(_, type) {
        // make a single exception because typeof null === 'object'
        return _.every(function(x) {
            return x !== null && typeof x === type;
        });
    }

    function requiredProperty(_, name, type) {
        if (typeof _[name] === 'undefined') {
            return errors.push({
                message: '"' + name + '" member required',
                line: _.__line__
            });
        } else if (type === 'array') {
            if (!Array.isArray(_[name])) {
                return errors.push({
                    message: '"' + name +
                        '" member should be an array, but is an ' +
                        (typeof _[name]) + ' instead',
                    line: _.__line__
                });
            }
        } else if (type === 'object' && _[name] && _[name].constructor !== Object) {
            return errors.push({
                message: '"' + name +
                    '" member should be ' + (type) +
                    ', but is an ' + (_[name].constructor.name) + ' instead',
                line: _.__line__
            });
        } else if (type && typeof _[name] !== type) {
            return errors.push({
                message: '"' + name +
                    '" member should be ' + (type) +
                    ', but is an ' + (typeof _[name]) + ' instead',
                line: _.__line__
            });
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.3
    function FeatureCollection(featureCollection) {
        crs(featureCollection);
        bbox(featureCollection);
        if (featureCollection.properties !== undefined) {
            errors.push({
                message: 'FeatureCollection object cannot contain a "properties" member',
                line: featureCollection.__line__
            });
        }
        if (featureCollection.coordinates !== undefined) {
            errors.push({
                message: 'FeatureCollection object cannot contain a "coordinates" member',
                line: featureCollection.__line__
            });
        }
        if (!requiredProperty(featureCollection, 'features', 'array')) {
            if (!everyIs(featureCollection.features, 'object')) {
                return errors.push({
                    message: 'Every feature must be an object',
                    line: featureCollection.__line__
                });
            }
            featureCollection.features.forEach(Feature);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.1
    function position(_, line) {
        if (!Array.isArray(_)) {
            return errors.push({
                message: 'position should be an array, is a ' + (typeof _) +
                    ' instead',
                line: _.__line__ || line
            });
        }
        if (_.length < 2) {
            return errors.push({
                message: 'position must have 2 or more elements',
                line: _.__line__ || line
            });
        }
        if (_.length > 3) {
            return errors.push({
                message: 'position should not have more than 3 elements',
                level: 'message',
                line: _.__line__ || line
            });
        }
        if (!everyIs(_, 'number')) {
            return errors.push({
                message: 'each element in a position must be a number',
                line: _.__line__ || line
            });
        }

        if (options && options.precisionWarning) {
            if (precisionWarningCount === maxPrecisionWarnings) {
                precisionWarningCount += 1;
                return errors.push({
                    message: 'truncated warnings: we\'ve encountered coordinate precision warning ' + maxPrecisionWarnings + ' times, no more warnings will be reported',
                    level: 'message',
                    line: _.__line__ || line
                });
            } else if (precisionWarningCount < maxPrecisionWarnings) {
                _.forEach(function(num) {
                    var precision = 0;
                    var decimalStr = String(num).split('.')[1];
                    if (decimalStr !== undefined)
                        precision = decimalStr.length;
                    if (precision > maxPrecision) {
                        precisionWarningCount += 1;
                        return errors.push({
                            message: 'precision of coordinates should be reduced',
                            level: 'message',
                            line: _.__line__ || line
                        });
                    }
                });
            }
        }
    }

    function positionArray(coords, type, depth, line) {
        if (line === undefined && coords.__line__ !== undefined) {
            line = coords.__line__;
        }
        if (depth === 0) {
            return position(coords, line);
        }
        if (depth === 1 && type) {
            if (type === 'LinearRing') {
                if (!Array.isArray(coords[coords.length - 1])) {
                    errors.push({
                        message: 'a number was found where a coordinate array should have been found: this needs to be nested more deeply',
                        line: line
                    });
                    return true;
                }
                if (coords.length < 4) {
                    errors.push({
                        message: 'a LinearRing of coordinates needs to have four or more positions',
                        line: line
                    });
                }
                if (coords.length &&
                    (coords[coords.length - 1].length !== coords[0].length ||
                    !coords[coords.length - 1].every(function(pos, index) {
                        return coords[0][index] === pos;
                }))) {
                    errors.push({
                        message: 'the first and last positions in a LinearRing of coordinates must be the same',
                        line: line
                    });
                    return true;
                }
            } else if (type === 'Line' && coords.length < 2) {
                return errors.push({
                    message: 'a line needs to have two or more coordinates to be valid',
                    line: line
                });
            }
        }
        if (!Array.isArray(coords)) {
            errors.push({
                message: 'a number was found where a coordinate array should have been found: this needs to be nested more deeply',
                line: line
            });
        } else {
            var results = coords.map(function(c) {
                return positionArray(c, type, depth - 1, c.__line__ || line);
            });
            return results.some(function(r) {
                return r;
            });
        }
    }

    function crs(_) {
        if (!_.crs) return;
        var defaultCRSName = 'urn:ogc:def:crs:OGC:1.3:CRS84';
        if (typeof _.crs === 'object' && _.crs.properties && _.crs.properties.name === defaultCRSName) {
            errors.push({
                message: 'old-style crs member is not recommended, this object is equivalent to the default and should be removed',
                line: _.__line__
            });
        } else {
            errors.push({
                message: 'old-style crs member is not recommended',
                line: _.__line__
            });
        }
    }

    function bbox(_) {
        if (!_.bbox) {
            return;
        }
        if (Array.isArray(_.bbox)) {
            if (!everyIs(_.bbox, 'number')) {
                errors.push({
                    message: 'each element in a bbox member must be a number',
                    line: _.bbox.__line__
                });
            }
            if (!(_.bbox.length === 4 || _.bbox.length === 6)) {
                errors.push({
                    message: 'bbox must contain 4 elements (for 2D) or 6 elements (for 3D)',
                    line: _.bbox.__line__
                });
            }
            return errors.length;
        }
        errors.push({
            message: 'bbox member must be an array of numbers, but is a ' + (typeof _.bbox),
            line: _.__line__
        });
    }

    function geometrySemantics(geom) {
        if (geom.properties !== undefined) {
            errors.push({
                message: 'geometry object cannot contain a "properties" member',
                line: geom.__line__
            });
        }
        if (geom.geometry !== undefined) {
            errors.push({
                message: 'geometry object cannot contain a "geometry" member',
                line: geom.__line__
            });
        }
        if (geom.features !== undefined) {
            errors.push({
                message: 'geometry object cannot contain a "features" member',
                line: geom.__line__
            });
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.2
    function Point(point) {
        crs(point);
        bbox(point);
        geometrySemantics(point);
        if (!requiredProperty(point, 'coordinates', 'array')) {
            position(point.coordinates);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.6
    function Polygon(polygon) {
        crs(polygon);
        bbox(polygon);
        if (!requiredProperty(polygon, 'coordinates', 'array')) {
            if (!positionArray(polygon.coordinates, 'LinearRing', 2)) {
                rightHandRule(polygon, errors);
            }
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.7
    function MultiPolygon(multiPolygon) {
        crs(multiPolygon);
        bbox(multiPolygon);
        if (!requiredProperty(multiPolygon, 'coordinates', 'array')) {
            if (!positionArray(multiPolygon.coordinates, 'LinearRing', 3)) {
                rightHandRule(multiPolygon, errors);
            }
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.4
    function LineString(lineString) {
        crs(lineString);
        bbox(lineString);
        if (!requiredProperty(lineString, 'coordinates', 'array')) {
            positionArray(lineString.coordinates, 'Line', 1);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.5
    function MultiLineString(multiLineString) {
        crs(multiLineString);
        bbox(multiLineString);
        if (!requiredProperty(multiLineString, 'coordinates', 'array')) {
            positionArray(multiLineString.coordinates, 'Line', 2);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.3
    function MultiPoint(multiPoint) {
        crs(multiPoint);
        bbox(multiPoint);
        if (!requiredProperty(multiPoint, 'coordinates', 'array')) {
            positionArray(multiPoint.coordinates, '', 1);
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.1.8
    function GeometryCollection(geometryCollection) {
        crs(geometryCollection);
        bbox(geometryCollection);
        if (!requiredProperty(geometryCollection, 'geometries', 'array')) {
            if (!everyIs(geometryCollection.geometries, 'object')) {
                errors.push({
                    message: 'The geometries array in a GeometryCollection must contain only geometry objects',
                    line: geometryCollection.__line__
                });
            }
            if (geometryCollection.geometries.length === 1) {
                errors.push({
                    message: 'GeometryCollection with a single geometry should be avoided in favor of single part or a single object of multi-part type',
                    line: geometryCollection.geometries.__line__
                });
            }
            geometryCollection.geometries.forEach(function(geometry) {
                if (geometry) {
                    if (geometry.type === 'GeometryCollection') {
                        errors.push({
                            message: 'GeometryCollection should avoid nested geometry collections',
                            line: geometryCollection.geometries.__line__
                        });
                    }
                    root(geometry);
                }
            });
        }
    }

    // https://tools.ietf.org/html/rfc7946#section-3.2
    function Feature(feature) {
        crs(feature);
        bbox(feature);
        // https://github.com/geojson/draft-geojson/blob/master/middle.mkd#feature-object
        if (feature.id !== undefined &&
            typeof feature.id !== 'string' &&
            typeof feature.id !== 'number') {
            errors.push({
                message: 'Feature "id" member must have a string or number value',
                line: feature.__line__
            });
        }
        if (feature.features !== undefined) {
            errors.push({
                message: 'Feature object cannot contain a "features" member',
                line: feature.__line__
            });
        }
        if (feature.coordinates !== undefined) {
            errors.push({
                message: 'Feature object cannot contain a "coordinates" member',
                line: feature.__line__
            });
        }
        if (feature.type !== 'Feature') {
            errors.push({
                message: 'GeoJSON features must have a type=feature member',
                line: feature.__line__
            });
        }
        requiredProperty(feature, 'properties', 'object');
        if (!requiredProperty(feature, 'geometry', 'object')) {
            // https://tools.ietf.org/html/rfc7946#section-3.2
            // tolerate null geometry
            if (feature.geometry) root(feature.geometry);
        }
    }

    var types = {
        Point: Point,
        Feature: Feature,
        MultiPoint: MultiPoint,
        LineString: LineString,
        MultiLineString: MultiLineString,
        FeatureCollection: FeatureCollection,
        GeometryCollection: GeometryCollection,
        Polygon: Polygon,
        MultiPolygon: MultiPolygon
    };

    var typesLower = Object.keys(types).reduce(function(prev, curr) {
        prev[curr.toLowerCase()] = curr;
        return prev;
    }, {});

    if (typeof gj !== 'object' ||
        gj === null ||
        gj === undefined) {
        errors.push({
            message: 'The root of a GeoJSON object must be an object.',
            line: 0
        });
        return errors;
    }

    root(gj);

    errors.forEach(function(err) {
        if ({}.hasOwnProperty.call(err, 'line') && err.line === undefined) {
            delete err.line;
        }
    });

    return errors;
}

module.exports.hint = hint;


/***/ }),

/***/ "./node_modules/@mapbox/geojsonhint/lib/rhr.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mapbox/geojsonhint/lib/rhr.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function rad(x) {
    return x * Math.PI / 180;
}

function isRingClockwise (coords) {
    var area = 0;
    if (coords.length > 2) {
        var p1, p2;
        for (var i = 0; i < coords.length - 1; i++) {
            p1 = coords[i];
            p2 = coords[i + 1];
            area += rad(p2[0] - p1[0]) * (2 + Math.sin(rad(p1[1])) + Math.sin(rad(p2[1])));
        }
    }

    return area >= 0;
}

function isPolyRHR (coords) {
    if (coords && coords.length > 0) {
        if (isRingClockwise(coords[0]))
            return false;
        var interiorCoords = coords.slice(1, coords.length);
        if (!interiorCoords.every(isRingClockwise))
            return false;
    }
    return true;
}

function rightHandRule (geometry) {
    if (geometry.type === 'Polygon') {
        return isPolyRHR(geometry.coordinates);
    } else if (geometry.type === 'MultiPolygon') {
        return geometry.coordinates.every(isPolyRHR);
    }
}

module.exports = function validateRightHandRule(geometry, errors) {
    if (!rightHandRule(geometry)) {
        errors.push({
            message: 'Polygons and MultiPolygons should follow the right-hand rule',
            level: 'message',
            line: geometry.__line__
        });
    }
};


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css":
/*!*********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./mapbox-gl-draw.css */ "./node_modules/css-loader/index.js!./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/setup */ "./node_modules/@mapbox/mapbox-gl-draw/src/setup.js");
/* harmony import */ var _src_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/options */ "./node_modules/@mapbox/mapbox-gl-draw/src/options.js");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/api */ "./node_modules/@mapbox/mapbox-gl-draw/src/api.js");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _src_modes_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/modes/index */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/index.js");





const setupDraw = function(options, api) {
  options = Object(_src_options__WEBPACK_IMPORTED_MODULE_1__["default"])(options);

  const ctx = {
    options
  };

  api = Object(_src_api__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx, api);
  ctx.api = api;

  const setup = Object(_src_setup__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx);

  api.onAdd = setup.onAdd;
  api.onRemove = setup.onRemove;
  api.types = _src_constants__WEBPACK_IMPORTED_MODULE_3__["types"];
  api.options = options;

  return api;
};

function MapboxDraw(options) {
  setupDraw(options, this);
}


MapboxDraw.modes = _src_modes_index__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (MapboxDraw);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/api.js":
/*!********************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/api.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapbox_geojson_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mapbox/geojson-normalize */ "./node_modules/@mapbox/geojson-normalize/index.js");
/* harmony import */ var _mapbox_geojson_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mapbox_geojson_normalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hat */ "./node_modules/hat/index.js");
/* harmony import */ var hat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_features_at__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/features_at */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/features_at.js");
/* harmony import */ var _lib_string_sets_are_equal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/string_sets_are_equal */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_sets_are_equal.js");
/* harmony import */ var _mapbox_geojsonhint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mapbox/geojsonhint */ "./node_modules/@mapbox/geojsonhint/lib/index.js");
/* harmony import */ var _mapbox_geojsonhint__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mapbox_geojsonhint__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _lib_string_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/string_set */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_set.js");
/* harmony import */ var _feature_types_polygon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature_types/polygon */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/polygon.js");
/* harmony import */ var _feature_types_line_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature_types/line_string */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/line_string.js");
/* harmony import */ var _feature_types_point__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feature_types/point */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/point.js");
/* harmony import */ var _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feature_types/multi_feature */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/multi_feature.js");














const featureTypes = {
  Polygon: _feature_types_polygon__WEBPACK_IMPORTED_MODULE_8__["default"],
  LineString: _feature_types_line_string__WEBPACK_IMPORTED_MODULE_9__["default"],
  Point: _feature_types_point__WEBPACK_IMPORTED_MODULE_10__["default"],
  MultiPolygon: _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_11__["default"],
  MultiLineString: _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_11__["default"],
  MultiPoint: _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_11__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (function(ctx, api) {

  api.modes = _constants__WEBPACK_IMPORTED_MODULE_6__["modes"];

  api.getFeatureIdsAt = function(point) {
    const features = _lib_features_at__WEBPACK_IMPORTED_MODULE_3__["default"].click({ point }, null, ctx);
    return features.map(feature => feature.properties.id);
  };

  api.getSelectedIds = function () {
    return ctx.store.getSelectedIds();
  };

  api.getSelected = function () {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].FEATURE_COLLECTION,
      features: ctx.store.getSelectedIds().map(id => ctx.store.get(id)).map(feature => feature.toGeoJSON())
    };
  };

  api.getSelectedPoints = function () {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].FEATURE_COLLECTION,
      features: ctx.store.getSelectedCoordinates().map(coordinate => ({
        type: _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].FEATURE,
        properties: {},
        geometry: {
          type: _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].POINT,
          coordinates: coordinate.coordinates
        }
      }))
    };
  };

  api.set = function(featureCollection) {
    if (featureCollection.type === undefined || featureCollection.type !== _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].FEATURE_COLLECTION || !Array.isArray(featureCollection.features)) {
      throw new Error('Invalid FeatureCollection');
    }
    const renderBatch = ctx.store.createRenderBatch();
    let toDelete = ctx.store.getAllIds().slice();
    const newIds = api.add(featureCollection);
    const newIdsLookup = new _lib_string_set__WEBPACK_IMPORTED_MODULE_7__["default"](newIds);

    toDelete = toDelete.filter(id => !newIdsLookup.has(id));
    if (toDelete.length) {
      api.delete(toDelete);
    }

    renderBatch();
    return newIds;
  };

  api.add = function (geojson) {
    const errors = _mapbox_geojsonhint__WEBPACK_IMPORTED_MODULE_5___default.a.hint(geojson, { precisionWarning: false }).filter(e => e.level !== 'message');
    if (errors.length) {
      throw new Error(errors[0].message);
    }
    const featureCollection = JSON.parse(JSON.stringify(_mapbox_geojson_normalize__WEBPACK_IMPORTED_MODULE_1___default()(geojson)));

    const ids = featureCollection.features.map((feature) => {
      feature.id = feature.id || hat__WEBPACK_IMPORTED_MODULE_2___default()();

      if (feature.geometry === null) {
        throw new Error('Invalid geometry: null');
      }

      if (ctx.store.get(feature.id) === undefined || ctx.store.get(feature.id).type !== feature.geometry.type) {
        // If the feature has not yet been created ...
        const Model = featureTypes[feature.geometry.type];
        if (Model === undefined) {
          throw new Error(`Invalid geometry type: ${feature.geometry.type}.`);
        }
        const internalFeature = new Model(ctx, feature);
        ctx.store.add(internalFeature);
      } else {
        // If a feature of that id has already been created, and we are swapping it out ...
        const internalFeature = ctx.store.get(feature.id);
        internalFeature.properties = feature.properties;
        if (!lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default()(internalFeature.getCoordinates(), feature.geometry.coordinates)) {
          internalFeature.incomingCoords(feature.geometry.coordinates);
        }
      }
      return feature.id;
    });

    ctx.store.render();
    return ids;
  };


  api.get = function (id) {
    const feature = ctx.store.get(id);
    if (feature) {
      return feature.toGeoJSON();
    }
  };

  api.getAll = function() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].FEATURE_COLLECTION,
      features: ctx.store.getAll().map(feature => feature.toGeoJSON())
    };
  };

  api.delete = function(featureIds) {
    ctx.store.delete(featureIds, { silent: true });
    // If we were in direct select mode and our selected feature no longer exists
    // (because it was deleted), we need to get out of that mode.
    if (api.getMode() === _constants__WEBPACK_IMPORTED_MODULE_6__["modes"].DIRECT_SELECT && !ctx.store.getSelectedIds().length) {
      ctx.events.changeMode(_constants__WEBPACK_IMPORTED_MODULE_6__["modes"].SIMPLE_SELECT, undefined, { silent: true });
    } else {
      ctx.store.render();
    }

    return api;
  };

  api.deleteAll = function() {
    ctx.store.delete(ctx.store.getAllIds(), { silent: true });
    // If we were in direct select mode, now our selected feature no longer exists,
    // so escape that mode.
    if (api.getMode() === _constants__WEBPACK_IMPORTED_MODULE_6__["modes"].DIRECT_SELECT) {
      ctx.events.changeMode(_constants__WEBPACK_IMPORTED_MODULE_6__["modes"].SIMPLE_SELECT, undefined, { silent: true });
    } else {
      ctx.store.render();
    }

    return api;
  };

  api.changeMode = function(mode, modeOptions = {}) {
    // Avoid changing modes just to re-select what's already selected
    if (mode === _constants__WEBPACK_IMPORTED_MODULE_6__["modes"].SIMPLE_SELECT && api.getMode() === _constants__WEBPACK_IMPORTED_MODULE_6__["modes"].SIMPLE_SELECT) {
      if (Object(_lib_string_sets_are_equal__WEBPACK_IMPORTED_MODULE_4__["default"])((modeOptions.featureIds || []), ctx.store.getSelectedIds())) return api;
      // And if we are changing the selection within simple_select mode, just change the selection,
      // instead of stopping and re-starting the mode
      ctx.store.setSelected(modeOptions.featureIds, { silent: true });
      ctx.store.render();
      return api;
    }

    if (mode === _constants__WEBPACK_IMPORTED_MODULE_6__["modes"].DIRECT_SELECT && api.getMode() === _constants__WEBPACK_IMPORTED_MODULE_6__["modes"].DIRECT_SELECT &&
      modeOptions.featureId === ctx.store.getSelectedIds()[0]) {
      return api;
    }

    ctx.events.changeMode(mode, modeOptions, { silent: true });
    return api;
  };

  api.getMode = function() {
    return ctx.events.getMode();
  };

  api.trash = function() {
    ctx.events.trash({ silent: true });
    return api;
  };

  api.combineFeatures = function() {
    ctx.events.combineFeatures({ silent: true });
    return api;
  };

  api.uncombineFeatures = function() {
    ctx.events.uncombineFeatures({ silent: true });
    return api;
  };

  api.setFeatureProperty = function(featureId, property, value) {
    ctx.store.setFeatureProperty(featureId, property, value);
    return api;
  };

  return api;
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/constants.js ***!
  \**************************************************************/
/*! exports provided: classes, sources, cursors, types, geojsonTypes, modes, events, updateActions, meta, activeStates, interactions, LAT_MIN, LAT_RENDERED_MIN, LAT_MAX, LAT_RENDERED_MAX, LNG_MIN, LNG_MAX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cursors", function() { return cursors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geojsonTypes", function() { return geojsonTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActions", function() { return updateActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeStates", function() { return activeStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactions", function() { return interactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAT_MIN", function() { return LAT_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAT_RENDERED_MIN", function() { return LAT_RENDERED_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAT_MAX", function() { return LAT_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAT_RENDERED_MAX", function() { return LAT_RENDERED_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LNG_MIN", function() { return LNG_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LNG_MAX", function() { return LNG_MAX; });
const classes = {
  CONTROL_BASE: 'mapboxgl-ctrl',
  CONTROL_PREFIX: 'mapboxgl-ctrl-',
  CONTROL_BUTTON: 'mapbox-gl-draw_ctrl-draw-btn',
  CONTROL_BUTTON_LINE: 'mapbox-gl-draw_line',
  CONTROL_BUTTON_POLYGON: 'mapbox-gl-draw_polygon',
  CONTROL_BUTTON_POINT: 'mapbox-gl-draw_point',
  CONTROL_BUTTON_TRASH: 'mapbox-gl-draw_trash',
  CONTROL_BUTTON_COMBINE_FEATURES: 'mapbox-gl-draw_combine',
  CONTROL_BUTTON_UNCOMBINE_FEATURES: 'mapbox-gl-draw_uncombine',
  CONTROL_GROUP: 'mapboxgl-ctrl-group',
  ATTRIBUTION: 'mapboxgl-ctrl-attrib',
  ACTIVE_BUTTON: 'active',
  BOX_SELECT: 'mapbox-gl-draw_boxselect'
};

const sources = {
  HOT: 'mapbox-gl-draw-hot',
  COLD: 'mapbox-gl-draw-cold'
};

const cursors = {
  ADD: 'add',
  MOVE: 'move',
  DRAG: 'drag',
  POINTER: 'pointer',
  NONE: 'none'
};

const types = {
  POLYGON: 'polygon',
  LINE: 'line_string',
  POINT: 'point'
};

const geojsonTypes = {
  FEATURE: 'Feature',
  POLYGON: 'Polygon',
  LINE_STRING: 'LineString',
  POINT: 'Point',
  FEATURE_COLLECTION: 'FeatureCollection',
  MULTI_PREFIX: 'Multi',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon'
};

const modes = {
  DRAW_LINE_STRING: 'draw_line_string',
  DRAW_POLYGON: 'draw_polygon',
  DRAW_POINT: 'draw_point',
  SIMPLE_SELECT: 'simple_select',
  DIRECT_SELECT: 'direct_select',
  STATIC: 'static'
};

const events = {
  CREATE: 'draw.create',
  DELETE: 'draw.delete',
  UPDATE: 'draw.update',
  SELECTION_CHANGE: 'draw.selectionchange',
  MODE_CHANGE: 'draw.modechange',
  ACTIONABLE: 'draw.actionable',
  RENDER: 'draw.render',
  COMBINE_FEATURES: 'draw.combine',
  UNCOMBINE_FEATURES: 'draw.uncombine'
};

const updateActions = {
  MOVE: 'move',
  CHANGE_COORDINATES: 'change_coordinates'
};

const meta = {
  FEATURE: 'feature',
  MIDPOINT: 'midpoint',
  VERTEX: 'vertex'
};

const activeStates = {
  ACTIVE: 'true',
  INACTIVE: 'false'
};

const interactions = [
  'scrollZoom',
  'boxZoom',
  'dragRotate',
  'dragPan',
  'keyboard',
  'doubleClickZoom',
  'touchZoomRotate'
];

const LAT_MIN = -90;
const LAT_RENDERED_MIN = -85;
const LAT_MAX = 90;
const LAT_RENDERED_MAX = 85;
const LNG_MIN = -270;
const LNG_MAX = 270;


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/events.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/events.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mode_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mode_handler */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/mode_handler.js");
/* harmony import */ var _lib_get_features_and_set_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/get_features_and_set_cursor */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/get_features_and_set_cursor.js");
/* harmony import */ var _lib_features_at__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/features_at */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/features_at.js");
/* harmony import */ var _lib_is_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/is_click */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_click.js");
/* harmony import */ var _lib_is_tap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/is_tap */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_tap.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _modes_object_to_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modes/object_to_mode */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/object_to_mode.js");








/* harmony default export */ __webpack_exports__["default"] = (function(ctx) {

  const modes = Object.keys(ctx.options.modes).reduce((m, k) => {
    m[k] = Object(_modes_object_to_mode__WEBPACK_IMPORTED_MODULE_6__["default"])(ctx.options.modes[k]);
    return m;
  }, {});

  let mouseDownInfo = {};
  let touchStartInfo = {};
  const events = {};
  let currentModeName = null;
  let currentMode = null;

  events.drag = function(event, isDrag) {
    if (isDrag({
      point: event.point,
      time: new Date().getTime()
    })) {
      ctx.ui.queueMapClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_5__["cursors"].DRAG });
      currentMode.drag(event);
    } else {
      event.originalEvent.stopPropagation();
    }
  };

  events.mousedrag = function(event) {
    events.drag(event, endInfo => !Object(_lib_is_click__WEBPACK_IMPORTED_MODULE_3__["default"])(mouseDownInfo, endInfo));
  };

  events.touchdrag = function(event) {
    events.drag(event, endInfo => !Object(_lib_is_tap__WEBPACK_IMPORTED_MODULE_4__["default"])(touchStartInfo, endInfo));
  };

  events.mousemove = function(event) {
    const button = event.originalEvent.buttons !== undefined ? event.originalEvent.buttons : event.originalEvent.which;
    if (button === 1) {
      return events.mousedrag(event);
    }
    const target = Object(_lib_get_features_and_set_cursor__WEBPACK_IMPORTED_MODULE_1__["default"])(event, ctx);
    event.featureTarget = target;
    currentMode.mousemove(event);
  };

  events.mousedown = function(event) {
    mouseDownInfo = {
      time: new Date().getTime(),
      point: event.point
    };
    const target = Object(_lib_get_features_and_set_cursor__WEBPACK_IMPORTED_MODULE_1__["default"])(event, ctx);
    event.featureTarget = target;
    currentMode.mousedown(event);
  };

  events.mouseup = function(event) {
    const target = Object(_lib_get_features_and_set_cursor__WEBPACK_IMPORTED_MODULE_1__["default"])(event, ctx);
    event.featureTarget = target;

    if (Object(_lib_is_click__WEBPACK_IMPORTED_MODULE_3__["default"])(mouseDownInfo, {
      point: event.point,
      time: new Date().getTime()
    })) {
      currentMode.click(event);
    } else {
      currentMode.mouseup(event);
    }
  };

  events.mouseout = function(event) {
    currentMode.mouseout(event);
  };

  events.touchstart = function(event) {
    // Prevent emulated mouse events because we will fully handle the touch here.
    // This does not stop the touch events from propogating to mapbox though.
    event.originalEvent.preventDefault();
    if (!ctx.options.touchEnabled) {
      return;
    }

    touchStartInfo = {
      time: new Date().getTime(),
      point: event.point
    };
    const target = _lib_features_at__WEBPACK_IMPORTED_MODULE_2__["default"].touch(event, null, ctx)[0];
    event.featureTarget = target;
    currentMode.touchstart(event);
  };

  events.touchmove = function(event) {
    event.originalEvent.preventDefault();
    if (!ctx.options.touchEnabled) {
      return;
    }

    currentMode.touchmove(event);
    return events.touchdrag(event);
  };

  events.touchend = function(event) {
    event.originalEvent.preventDefault();
    if (!ctx.options.touchEnabled) {
      return;
    }

    const target = _lib_features_at__WEBPACK_IMPORTED_MODULE_2__["default"].touch(event, null, ctx)[0];
    event.featureTarget = target;
    if (Object(_lib_is_tap__WEBPACK_IMPORTED_MODULE_4__["default"])(touchStartInfo, {
      time: new Date().getTime(),
      point: event.point
    })) {
      currentMode.tap(event);
    } else {
      currentMode.touchend(event);
    }
  };

  // 8 - Backspace
  // 46 - Delete
  const isKeyModeValid = code => !(code === 8 || code === 46 || (code >= 48 && code <= 57));

  events.keydown = function(event) {
    if ((event.srcElement || event.target).classList[0] !== 'mapboxgl-canvas') return; // we only handle events on the map

    if ((event.keyCode === 8 || event.keyCode === 46) && ctx.options.controls.trash) {
      event.preventDefault();
      currentMode.trash();
    } else if (isKeyModeValid(event.keyCode)) {
      currentMode.keydown(event);
    } else if (event.keyCode === 49 && ctx.options.controls.point) {
      changeMode(_constants__WEBPACK_IMPORTED_MODULE_5__["modes"].DRAW_POINT);
    } else if (event.keyCode === 50 && ctx.options.controls.line_string) {
      changeMode(_constants__WEBPACK_IMPORTED_MODULE_5__["modes"].DRAW_LINE_STRING);
    } else if (event.keyCode === 51 && ctx.options.controls.polygon) {
      changeMode(_constants__WEBPACK_IMPORTED_MODULE_5__["modes"].DRAW_POLYGON);
    }
  };

  events.keyup = function(event) {
    if (isKeyModeValid(event.keyCode)) {
      currentMode.keyup(event);
    }
  };

  events.zoomend = function() {
    ctx.store.changeZoom();
  };

  events.data = function(event) {
    if (event.dataType === 'style') {
      const { setup, map, options, store } = ctx;
      const hasLayers = options.styles.some(style => map.getLayer(style.id));
      if (!hasLayers) {
        setup.addLayers();
        store.setDirty();
        store.render();
      }
    }
  };

  function changeMode(modename, nextModeOptions, eventOptions = {}) {
    currentMode.stop();

    const modebuilder = modes[modename];
    if (modebuilder === undefined) {
      throw new Error(`${modename} is not valid`);
    }
    currentModeName = modename;
    const mode = modebuilder(ctx, nextModeOptions);
    currentMode = Object(_lib_mode_handler__WEBPACK_IMPORTED_MODULE_0__["default"])(mode, ctx);

    if (!eventOptions.silent) {
      ctx.map.fire(_constants__WEBPACK_IMPORTED_MODULE_5__["events"].MODE_CHANGE, { mode: modename});
    }

    ctx.store.setDirty();
    ctx.store.render();
  }

  const actionState = {
    trash: false,
    combineFeatures: false,
    uncombineFeatures: false
  };

  function actionable(actions) {
    let changed = false;
    Object.keys(actions).forEach((action) => {
      if (actionState[action] === undefined) throw new Error('Invalid action type');
      if (actionState[action] !== actions[action]) changed = true;
      actionState[action] = actions[action];
    });
    if (changed) ctx.map.fire(_constants__WEBPACK_IMPORTED_MODULE_5__["events"].ACTIONABLE, { actions: actionState });
  }

  const api = {
    start() {
      currentModeName = ctx.options.defaultMode;
      currentMode = Object(_lib_mode_handler__WEBPACK_IMPORTED_MODULE_0__["default"])(modes[currentModeName](ctx), ctx);
    },
    changeMode,
    actionable,
    currentModeName() {
      return currentModeName;
    },
    currentModeRender(geojson, push) {
      return currentMode.render(geojson, push);
    },
    fire(name, event) {
      if (events[name]) {
        events[name](event);
      }
    },
    addEventListeners() {
      ctx.map.on('mousemove', events.mousemove);
      ctx.map.on('mousedown', events.mousedown);
      ctx.map.on('mouseup', events.mouseup);
      ctx.map.on('data', events.data);

      ctx.map.on('touchmove', events.touchmove);
      ctx.map.on('touchstart', events.touchstart);
      ctx.map.on('touchend', events.touchend);

      ctx.container.addEventListener('mouseout', events.mouseout);

      if (ctx.options.keybindings) {
        ctx.container.addEventListener('keydown', events.keydown);
        ctx.container.addEventListener('keyup', events.keyup);
      }
    },
    removeEventListeners() {
      ctx.map.off('mousemove', events.mousemove);
      ctx.map.off('mousedown', events.mousedown);
      ctx.map.off('mouseup', events.mouseup);
      ctx.map.off('data', events.data);

      ctx.map.off('touchmove', events.touchmove);
      ctx.map.off('touchstart', events.touchstart);
      ctx.map.off('touchend', events.touchend);

      ctx.container.removeEventListener('mouseout', events.mouseout);

      if (ctx.options.keybindings) {
        ctx.container.removeEventListener('keydown', events.keydown);
        ctx.container.removeEventListener('keyup', events.keyup);
      }
    },
    trash(options) {
      currentMode.trash(options);
    },
    combineFeatures() {
      currentMode.combineFeatures();
    },
    uncombineFeatures() {
      currentMode.uncombineFeatures();
    },
    getMode() {
      return currentModeName;
    }
  };

  return api;
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/feature.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/feature.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hat */ "./node_modules/hat/index.js");
/* harmony import */ var hat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



const Feature = function(ctx, geojson) {
  this.ctx = ctx;
  this.properties = geojson.properties || {};
  this.coordinates = geojson.geometry.coordinates;
  this.id = geojson.id || hat__WEBPACK_IMPORTED_MODULE_0___default()();
  this.type = geojson.geometry.type;
};

Feature.prototype.changed = function() {
  this.ctx.store.featureChanged(this.id);
};

Feature.prototype.incomingCoords = function(coords) {
  this.setCoordinates(coords);
};

Feature.prototype.setCoordinates = function(coords) {
  this.coordinates = coords;
  this.changed();
};

Feature.prototype.getCoordinates = function() {
  return JSON.parse(JSON.stringify(this.coordinates));
};

Feature.prototype.setProperty = function(property, value) {
  this.properties[property] = value;
};

Feature.prototype.toGeoJSON = function() {
  return JSON.parse(JSON.stringify({
    id: this.id,
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].FEATURE,
    properties: this.properties,
    geometry: {
      coordinates: this.getCoordinates(),
      type: this.type
    }
  }));
};

Feature.prototype.internal = function(mode) {
  const properties = {
    id: this.id,
    meta: _constants__WEBPACK_IMPORTED_MODULE_1__["meta"].FEATURE,
    'meta:type': this.type,
    active: _constants__WEBPACK_IMPORTED_MODULE_1__["activeStates"].INACTIVE,
    mode
  };

  if (this.ctx.options.userProperties) {
    for (const name in this.properties) {
      properties[`user_${name}`] = this.properties[name];
    }
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].FEATURE,
    properties,
    geometry: {
      coordinates: this.getCoordinates(),
      type: this.type
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/line_string.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/line_string.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/feature.js");


const LineString = function(ctx, geojson) {
  _feature__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, ctx, geojson);
};

LineString.prototype = Object.create(_feature__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);

LineString.prototype.isValid = function() {
  return this.coordinates.length > 1;
};

LineString.prototype.addCoordinate = function(path, lng, lat) {
  this.changed();
  const id = parseInt(path, 10);
  this.coordinates.splice(id, 0, [lng, lat]);
};

LineString.prototype.getCoordinate = function(path) {
  const id = parseInt(path, 10);
  return JSON.parse(JSON.stringify(this.coordinates[id]));
};

LineString.prototype.removeCoordinate = function(path) {
  this.changed();
  this.coordinates.splice(parseInt(path, 10), 1);
};

LineString.prototype.updateCoordinate = function(path, lng, lat) {
  const id = parseInt(path, 10);
  this.coordinates[id] = [lng, lat];
  this.changed();
};

/* harmony default export */ __webpack_exports__["default"] = (LineString);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/multi_feature.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/multi_feature.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/feature.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var hat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hat */ "./node_modules/hat/index.js");
/* harmony import */ var hat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/point.js");
/* harmony import */ var _line_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line_string */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/line_string.js");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygon */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/polygon.js");








const models = {
  MultiPoint: _point__WEBPACK_IMPORTED_MODULE_3__["default"],
  MultiLineString: _line_string__WEBPACK_IMPORTED_MODULE_4__["default"],
  MultiPolygon: _polygon__WEBPACK_IMPORTED_MODULE_5__["default"]
};

const takeAction = (features, action, path, lng, lat) => {
  const parts = path.split('.');
  const idx = parseInt(parts[0], 10);
  const tail = (!parts[1]) ? null : parts.slice(1).join('.');
  return features[idx][action](tail, lng, lat);
};

const MultiFeature = function(ctx, geojson) {
  _feature__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, ctx, geojson);

  delete this.coordinates;
  this.model = models[geojson.geometry.type];
  if (this.model === undefined) throw new TypeError(`${geojson.geometry.type} is not a valid type`);
  this.features = this._coordinatesToFeatures(geojson.geometry.coordinates);
};

MultiFeature.prototype = Object.create(_feature__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);

MultiFeature.prototype._coordinatesToFeatures = function(coordinates) {
  const Model = this.model.bind(this);
  return coordinates.map(coords => new Model(this.ctx, {
    id: hat__WEBPACK_IMPORTED_MODULE_2___default()(),
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].FEATURE,
    properties: {},
    geometry: {
      coordinates: coords,
      type: this.type.replace('Multi', '')
    }
  }));
};

MultiFeature.prototype.isValid = function() {
  return this.features.every(f => f.isValid());
};

MultiFeature.prototype.setCoordinates = function(coords) {
  this.features = this._coordinatesToFeatures(coords);
  this.changed();
};

MultiFeature.prototype.getCoordinate = function(path) {
  return takeAction(this.features, 'getCoordinate', path);
};

MultiFeature.prototype.getCoordinates = function() {
  return JSON.parse(JSON.stringify(this.features.map((f) => {
    if (f.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].POLYGON) return f.getCoordinates();
    return f.coordinates;
  })));
};

MultiFeature.prototype.updateCoordinate = function(path, lng, lat) {
  takeAction(this.features, 'updateCoordinate', path, lng, lat);
  this.changed();
};

MultiFeature.prototype.addCoordinate = function(path, lng, lat) {
  takeAction(this.features, 'addCoordinate', path, lng, lat);
  this.changed();
};

MultiFeature.prototype.removeCoordinate = function(path) {
  takeAction(this.features, 'removeCoordinate', path);
  this.changed();
};

MultiFeature.prototype.getFeatures = function() {
  return this.features;
};

/* harmony default export */ __webpack_exports__["default"] = (MultiFeature);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/point.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/point.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/feature.js");


const Point = function(ctx, geojson) {
  _feature__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, ctx, geojson);
};

Point.prototype = Object.create(_feature__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);

Point.prototype.isValid = function() {
  return typeof this.coordinates[0] === 'number' &&
    typeof this.coordinates[1] === 'number';
};

Point.prototype.updateCoordinate = function(pathOrLng, lngOrLat, lat) {
  if (arguments.length === 3) {
    this.coordinates = [lngOrLat, lat];
  } else {
    this.coordinates = [pathOrLng, lngOrLat];
  }
  this.changed();
};

Point.prototype.getCoordinate = function() {
  return this.getCoordinates();
};

/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/polygon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/polygon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/feature.js");


const Polygon = function(ctx, geojson) {
  _feature__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, ctx, geojson);
  this.coordinates = this.coordinates.map(ring => ring.slice(0, -1));
};

Polygon.prototype = Object.create(_feature__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);

Polygon.prototype.isValid = function() {
  if (this.coordinates.length === 0) return false;
  return this.coordinates.every(ring => ring.length > 2);
};

// Expects valid geoJSON polygon geometry: first and last positions must be equivalent.
Polygon.prototype.incomingCoords = function(coords) {
  this.coordinates = coords.map(ring => ring.slice(0, -1));
  this.changed();
};

// Does NOT expect valid geoJSON polygon geometry: first and last positions should not be equivalent.
Polygon.prototype.setCoordinates = function(coords) {
  this.coordinates = coords;
  this.changed();
};

Polygon.prototype.addCoordinate = function(path, lng, lat) {
  this.changed();
  const ids = path.split('.').map(x => parseInt(x, 10));

  const ring = this.coordinates[ids[0]];

  ring.splice(ids[1], 0, [lng, lat]);
};

Polygon.prototype.removeCoordinate = function(path) {
  this.changed();
  const ids = path.split('.').map(x => parseInt(x, 10));
  const ring = this.coordinates[ids[0]];
  if (ring) {
    ring.splice(ids[1], 1);
    if (ring.length < 3) {
      this.coordinates.splice(ids[0], 1);
    }
  }
};

Polygon.prototype.getCoordinate = function(path) {
  const ids = path.split('.').map(x => parseInt(x, 10));
  const ring = this.coordinates[ids[0]];
  return JSON.parse(JSON.stringify(ring[ids[1]]));
};

Polygon.prototype.getCoordinates = function() {
  return this.coordinates.map(coords => coords.concat([coords[0]]));
};

Polygon.prototype.updateCoordinate = function(path, lng, lat) {
  this.changed();
  const parts = path.split('.');
  const ringId = parseInt(parts[0], 10);
  const coordId = parseInt(parts[1], 10);

  if (this.coordinates[ringId] === undefined) {
    this.coordinates[ringId] = [];
  }

  this.coordinates[ringId][coordId] = [lng, lat];
};

/* harmony default export */ __webpack_exports__["default"] = (Polygon);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js ***!
  \*************************************************************************/
/*! exports provided: isOfMetaType, isShiftMousedown, isActiveFeature, isInactiveFeature, noTarget, isFeature, isVertex, isShiftDown, isEscapeKey, isEnterKey, isTrue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOfMetaType", function() { return isOfMetaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShiftMousedown", function() { return isShiftMousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActiveFeature", function() { return isActiveFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInactiveFeature", function() { return isInactiveFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTarget", function() { return noTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeature", function() { return isFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVertex", function() { return isVertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShiftDown", function() { return isShiftDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscapeKey", function() { return isEscapeKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnterKey", function() { return isEnterKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");


function isOfMetaType(type) {
  return function(e) {
    const featureTarget = e.featureTarget;
    if (!featureTarget) return false;
    if (!featureTarget.properties) return false;
    return featureTarget.properties.meta === type;
  };
}

function isShiftMousedown(e) {
  if (!e.originalEvent) return false;
  if (!e.originalEvent.shiftKey) return false;
  return e.originalEvent.button === 0;
}

function isActiveFeature(e) {
  if (!e.featureTarget) return false;
  if (!e.featureTarget.properties) return false;
  return e.featureTarget.properties.active === _constants__WEBPACK_IMPORTED_MODULE_0__["activeStates"].ACTIVE &&
    e.featureTarget.properties.meta === _constants__WEBPACK_IMPORTED_MODULE_0__["meta"].FEATURE;
}

function isInactiveFeature(e) {
  if (!e.featureTarget) return false;
  if (!e.featureTarget.properties) return false;
  return e.featureTarget.properties.active === _constants__WEBPACK_IMPORTED_MODULE_0__["activeStates"].INACTIVE &&
    e.featureTarget.properties.meta === _constants__WEBPACK_IMPORTED_MODULE_0__["meta"].FEATURE;
}

function noTarget(e) {
  return e.featureTarget === undefined;
}

function isFeature(e) {
  if (!e.featureTarget) return false;
  if (!e.featureTarget.properties) return false;
  return e.featureTarget.properties.meta === _constants__WEBPACK_IMPORTED_MODULE_0__["meta"].FEATURE;
}

function isVertex(e) {
  const featureTarget = e.featureTarget;
  if (!featureTarget) return false;
  if (!featureTarget.properties) return false;
  return featureTarget.properties.meta === _constants__WEBPACK_IMPORTED_MODULE_0__["meta"].VERTEX;
}

function isShiftDown(e) {
  if (!e.originalEvent) return false;
  return e.originalEvent.shiftKey === true;
}

function isEscapeKey(e) {
  return e.keyCode === 27;
}

function isEnterKey(e) {
  return e.keyCode === 13;
}

function isTrue() {
  return true;
}


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/constrain_feature_movement.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/constrain_feature_movement.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapbox_geojson_extent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/geojson-extent */ "./node_modules/@mapbox/geojson-extent/index.js");
/* harmony import */ var _mapbox_geojson_extent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_geojson_extent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



const {
  LAT_MIN,
  LAT_MAX,
  LAT_RENDERED_MIN,
  LAT_RENDERED_MAX,
  LNG_MIN,
  LNG_MAX
} = _constants__WEBPACK_IMPORTED_MODULE_1__;

// Ensure that we do not drag north-south far enough for
// - any part of any feature to exceed the poles
// - any feature to be completely lost in the space between the projection's
//   edge and the poles, such that it couldn't be re-selected and moved back
/* harmony default export */ __webpack_exports__["default"] = (function(geojsonFeatures, delta) {
  // "inner edge" = a feature's latitude closest to the equator
  let northInnerEdge = LAT_MIN;
  let southInnerEdge = LAT_MAX;
  // "outer edge" = a feature's latitude furthest from the equator
  let northOuterEdge = LAT_MIN;
  let southOuterEdge = LAT_MAX;

  let westEdge = LNG_MAX;
  let eastEdge = LNG_MIN;

  geojsonFeatures.forEach((feature) => {
    const bounds = _mapbox_geojson_extent__WEBPACK_IMPORTED_MODULE_0___default()(feature);
    const featureSouthEdge = bounds[1];
    const featureNorthEdge = bounds[3];
    const featureWestEdge = bounds[0];
    const featureEastEdge = bounds[2];
    if (featureSouthEdge > northInnerEdge) northInnerEdge = featureSouthEdge;
    if (featureNorthEdge < southInnerEdge) southInnerEdge = featureNorthEdge;
    if (featureNorthEdge > northOuterEdge) northOuterEdge = featureNorthEdge;
    if (featureSouthEdge < southOuterEdge) southOuterEdge = featureSouthEdge;
    if (featureWestEdge < westEdge) westEdge = featureWestEdge;
    if (featureEastEdge > eastEdge) eastEdge = featureEastEdge;
  });


  // These changes are not mutually exclusive: we might hit the inner
  // edge but also have hit the outer edge and therefore need
  // another readjustment
  const constrainedDelta = delta;
  if (northInnerEdge + constrainedDelta.lat > LAT_RENDERED_MAX) {
    constrainedDelta.lat = LAT_RENDERED_MAX - northInnerEdge;
  }
  if (northOuterEdge + constrainedDelta.lat > LAT_MAX) {
    constrainedDelta.lat = LAT_MAX - northOuterEdge;
  }
  if (southInnerEdge + constrainedDelta.lat < LAT_RENDERED_MIN) {
    constrainedDelta.lat = LAT_RENDERED_MIN - southInnerEdge;
  }
  if (southOuterEdge + constrainedDelta.lat < LAT_MIN) {
    constrainedDelta.lat = LAT_MIN - southOuterEdge;
  }
  if (westEdge + constrainedDelta.lng <= LNG_MIN) {
    constrainedDelta.lng += Math.ceil(Math.abs(constrainedDelta.lng) / 360) * 360;
  }
  if (eastEdge + constrainedDelta.lng >= LNG_MAX) {
    constrainedDelta.lng -= Math.ceil(Math.abs(constrainedDelta.lng) / 360) * 360;
  }

  return constrainedDelta;
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_midpoint.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_midpoint.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function(parent, startVertex, endVertex, map) {
  const startCoord = startVertex.geometry.coordinates;
  const endCoord = endVertex.geometry.coordinates;

  // If a coordinate exceeds the projection, we can't calculate a midpoint,
  // so run away
  if (startCoord[1] > _constants__WEBPACK_IMPORTED_MODULE_0__["LAT_RENDERED_MAX"] ||
    startCoord[1] < _constants__WEBPACK_IMPORTED_MODULE_0__["LAT_RENDERED_MIN"] ||
    endCoord[1] > _constants__WEBPACK_IMPORTED_MODULE_0__["LAT_RENDERED_MAX"] ||
    endCoord[1] < _constants__WEBPACK_IMPORTED_MODULE_0__["LAT_RENDERED_MIN"]) {
    return null;
  }

  const ptA = map.project([ startCoord[0], startCoord[1] ]);
  const ptB = map.project([ endCoord[0], endCoord[1] ]);
  const mid = map.unproject([ (ptA.x + ptB.x) / 2, (ptA.y + ptB.y) / 2 ]);

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].FEATURE,
    properties: {
      meta: _constants__WEBPACK_IMPORTED_MODULE_0__["meta"].MIDPOINT,
      parent,
      lng: mid.lng,
      lat: mid.lat,
      coord_path: endVertex.properties.coord_path
    },
    geometry: {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POINT,
      coordinates: [mid.lng, mid.lat]
    }
  };
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_vertex */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_vertex.js");
/* harmony import */ var _create_midpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_midpoint */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_midpoint.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");




function createSupplementaryPoints(geojson, options = {}, basePath = null) {
  const { type, coordinates } = geojson.geometry;
  const featureId = geojson.properties && geojson.properties.id;

  let supplementaryPoints = [];

  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].POINT) {
    // For points, just create a vertex
    supplementaryPoints.push(Object(_create_vertex__WEBPACK_IMPORTED_MODULE_0__["default"])(featureId, coordinates, basePath, isSelectedPath(basePath)));
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].POLYGON) {
    // Cycle through a Polygon's rings and
    // process each line
    coordinates.forEach((line, lineIndex) => {
      processLine(line, (basePath !== null) ? `${basePath}.${lineIndex}` : String(lineIndex));
    });
  } else if (type === _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].LINE_STRING) {
    processLine(coordinates, basePath);
  } else if (type.indexOf(_constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].MULTI_PREFIX) === 0) {
    processMultiGeometry();
  }

  function processLine(line, lineBasePath) {
    let firstPointString = '';
    let lastVertex = null;
    line.forEach((point, pointIndex) => {
      const pointPath = (lineBasePath !== undefined && lineBasePath !== null) ? `${lineBasePath}.${pointIndex}` : String(pointIndex);
      const vertex = Object(_create_vertex__WEBPACK_IMPORTED_MODULE_0__["default"])(featureId, point, pointPath, isSelectedPath(pointPath));

      // If we're creating midpoints, check if there was a
      // vertex before this one. If so, add a midpoint
      // between that vertex and this one.
      if (options.midpoints && lastVertex) {
        const midpoint = Object(_create_midpoint__WEBPACK_IMPORTED_MODULE_1__["default"])(featureId, lastVertex, vertex, options.map);
        if (midpoint) {
          supplementaryPoints.push(midpoint);
        }
      }
      lastVertex = vertex;

      // A Polygon line's last point is the same as the first point. If we're on the last
      // point, we want to draw a midpoint before it but not another vertex on it
      // (since we already a vertex there, from the first point).
      const stringifiedPoint = JSON.stringify(point);
      if (firstPointString !== stringifiedPoint) {
        supplementaryPoints.push(vertex);
      }
      if (pointIndex === 0) {
        firstPointString = stringifiedPoint;
      }
    });
  }

  function isSelectedPath(path) {
    if (!options.selectedPaths) return false;
    return options.selectedPaths.indexOf(path) !== -1;
  }

  // Split a multi-geometry into constituent
  // geometries, and accumulate the supplementary points
  // for each of those constituents
  function processMultiGeometry() {
    const subType = type.replace(_constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].MULTI_PREFIX, '');
    coordinates.forEach((subCoordinates, index) => {
      const subFeature = {
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].FEATURE,
        properties: geojson.properties,
        geometry: {
          type: subType,
          coordinates: subCoordinates
        }
      };
      supplementaryPoints = supplementaryPoints.concat(createSupplementaryPoints(subFeature, options, index));
    });
  }

  return supplementaryPoints;
}

/* harmony default export */ __webpack_exports__["default"] = (createSupplementaryPoints);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_vertex.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_vertex.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");


/**
 * Returns GeoJSON for a Point representing the
 * vertex of another feature.
 *
 * @param {string} parentId
 * @param {Array<number>} coordinates
 * @param {string} path - Dot-separated numbers indicating exactly
 *   where the point exists within its parent feature's coordinates.
 * @param {boolean} selected
 * @return {GeoJSON} Point
 */
/* harmony default export */ __webpack_exports__["default"] = (function(parentId, coordinates, path, selected) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].FEATURE,
    properties: {
      meta: _constants__WEBPACK_IMPORTED_MODULE_0__["meta"].VERTEX,
      parent: parentId,
      coord_path: path,
      active: (selected) ? _constants__WEBPACK_IMPORTED_MODULE_0__["activeStates"].ACTIVE : _constants__WEBPACK_IMPORTED_MODULE_0__["activeStates"].INACTIVE
    },
    geometry: {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POINT,
      coordinates
    }
  };
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  enable(ctx) {
    setTimeout(() => {
      // First check we've got a map and some context.
      if (!ctx.map || !ctx.map.doubleClickZoom || !ctx._ctx || !ctx._ctx.store || !ctx._ctx.store.getInitialConfigValue) return;
      // Now check initial state wasn't false (we leave it disabled if so)
      if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) return;
      ctx.map.doubleClickZoom.enable();
    }, 0);
  },
  disable(ctx) {
    setTimeout(() => {
      if (!ctx.map || !ctx.map.doubleClickZoom) return;
      // Always disable here, as it's necessary in some cases.
      ctx.map.doubleClickZoom.disable();
    }, 0);
  }
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/euclidean_distance.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/euclidean_distance.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt((x * x) + (y * y));
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/features_at.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/features_at.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sort_features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort_features */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/sort_features.js");
/* harmony import */ var _map_event_to_bounding_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_event_to_bounding_box */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/map_event_to_bounding_box.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _string_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string_set */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_set.js");





const META_TYPES = [
  _constants__WEBPACK_IMPORTED_MODULE_2__["meta"].FEATURE,
  _constants__WEBPACK_IMPORTED_MODULE_2__["meta"].MIDPOINT,
  _constants__WEBPACK_IMPORTED_MODULE_2__["meta"].VERTEX
];

// Requires either event or bbox
/* harmony default export */ __webpack_exports__["default"] = ({
  click: featuresAtClick,
  touch: featuresAtTouch
});

function featuresAtClick(event, bbox, ctx) {
  return featuresAt(event, bbox, ctx, ctx.options.clickBuffer);
}

function featuresAtTouch(event, bbox, ctx) {
  return featuresAt(event, bbox, ctx, ctx.options.touchBuffer);
}

function featuresAt(event, bbox, ctx, buffer) {
  if (ctx.map === null) return [];

  const box = (event) ? Object(_map_event_to_bounding_box__WEBPACK_IMPORTED_MODULE_1__["default"])(event, buffer) : bbox;

  const queryParams = {};
  if (ctx.options.styles) queryParams.layers = ctx.options.styles.map(s => s.id);

  const features = ctx.map.queryRenderedFeatures(box, queryParams)
    .filter(feature => META_TYPES.indexOf(feature.properties.meta) !== -1);

  const featureIds = new _string_set__WEBPACK_IMPORTED_MODULE_3__["default"]();
  const uniqueFeatures = [];
  features.forEach((feature) => {
    const featureId = feature.properties.id;
    if (featureIds.has(featureId)) return;
    featureIds.add(featureId);
    uniqueFeatures.push(feature);
  });

  return Object(_sort_features__WEBPACK_IMPORTED_MODULE_0__["default"])(uniqueFeatures);
}


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/get_features_and_set_cursor.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/get_features_and_set_cursor.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFeatureAtAndSetCursors; });
/* harmony import */ var _features_at__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features_at */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/features_at.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



function getFeatureAtAndSetCursors(event, ctx) {
  const features = _features_at__WEBPACK_IMPORTED_MODULE_0__["default"].click(event, null, ctx);
  const classes = { mouse: _constants__WEBPACK_IMPORTED_MODULE_1__["cursors"].NONE };

  if (features[0]) {
    classes.mouse = (features[0].properties.active === _constants__WEBPACK_IMPORTED_MODULE_1__["activeStates"].ACTIVE) ?
      _constants__WEBPACK_IMPORTED_MODULE_1__["cursors"].MOVE : _constants__WEBPACK_IMPORTED_MODULE_1__["cursors"].POINTER;
    classes.feature = features[0].properties.meta;
  }

  if (ctx.events.currentModeName().indexOf('draw') !== -1) {
    classes.mouse = _constants__WEBPACK_IMPORTED_MODULE_1__["cursors"].ADD;
  }

  ctx.ui.queueMapClasses(classes);
  ctx.ui.updateMapClasses();

  return features[0];
}


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_click.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_click.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isClick; });
/* harmony import */ var _euclidean_distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./euclidean_distance */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/euclidean_distance.js");


const FINE_TOLERANCE = 4;
const GROSS_TOLERANCE = 12;
const INTERVAL = 500;

function isClick(start, end, options = {}) {
  const fineTolerance = (options.fineTolerance != null) ? options.fineTolerance : FINE_TOLERANCE;
  const grossTolerance = (options.grossTolerance != null) ? options.grossTolerance : GROSS_TOLERANCE;
  const interval = (options.interval != null) ? options.interval : INTERVAL;

  start.point = start.point || end.point;
  start.time = start.time || end.time;
  const moveDistance = Object(_euclidean_distance__WEBPACK_IMPORTED_MODULE_0__["default"])(start.point, end.point);

  return moveDistance < fineTolerance ||
    (moveDistance < grossTolerance && (end.time - start.time) < interval);
}


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_event_at_coordinates.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_event_at_coordinates.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isEventAtCoordinates(event, coordinates) {
  if (!event.lngLat) return false;
  return event.lngLat.lng === coordinates[0] && event.lngLat.lat === coordinates[1];
}

/* harmony default export */ __webpack_exports__["default"] = (isEventAtCoordinates);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_tap.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_tap.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTap; });
/* harmony import */ var _euclidean_distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./euclidean_distance */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/euclidean_distance.js");


const TOLERANCE = 25;
const INTERVAL = 250;

function isTap(start, end, options = {}) {
  const tolerance = (options.tolerance != null) ? options.tolerance : TOLERANCE;
  const interval = (options.interval != null) ? options.interval : INTERVAL;

  start.point = start.point || end.point;
  start.time = start.time || end.time;
  const moveDistance = Object(_euclidean_distance__WEBPACK_IMPORTED_MODULE_0__["default"])(start.point, end.point);

  return moveDistance < tolerance && (end.time - start.time) < interval;
}


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/map_event_to_bounding_box.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/map_event_to_bounding_box.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns a bounding box representing the event's location.
 *
 * @param {Event} mapEvent - Mapbox GL JS map event, with a point properties.
 * @return {Array<Array<number>>} Bounding box.
 */
function mapEventToBoundingBox(mapEvent, buffer = 0) {
  return [
    [mapEvent.point.x - buffer, mapEvent.point.y - buffer],
    [mapEvent.point.x + buffer, mapEvent.point.y + buffer]
  ];
}

/* harmony default export */ __webpack_exports__["default"] = (mapEventToBoundingBox);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/mode_handler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/mode_handler.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const ModeHandler = function(mode, DrawContext) {

  const handlers = {
    drag: [],
    click: [],
    mousemove: [],
    mousedown: [],
    mouseup: [],
    mouseout: [],
    keydown: [],
    keyup: [],
    touchstart: [],
    touchmove: [],
    touchend: [],
    tap: []
  };

  const ctx = {
    on(event, selector, fn) {
      if (handlers[event] === undefined) {
        throw new Error(`Invalid event type: ${event}`);
      }
      handlers[event].push({
        selector,
        fn
      });
    },
    render(id) {
      DrawContext.store.featureChanged(id);
    }
  };

  const delegate = function (eventName, event) {
    const handles = handlers[eventName];
    let iHandle = handles.length;
    while (iHandle--) {
      const handle = handles[iHandle];
      if (handle.selector(event)) {
        handle.fn.call(ctx, event);
        DrawContext.store.render();
        DrawContext.ui.updateMapClasses();

        // ensure an event is only handled once
        // we do this to let modes have multiple overlapping selectors
        // and relay on order of oppertations to filter
        break;
      }
    }
  };

  mode.start.call(ctx);

  return {
    render: mode.render,
    stop() {
      if (mode.stop) mode.stop();
    },
    trash() {
      if (mode.trash) {
        mode.trash();
        DrawContext.store.render();
      }
    },
    combineFeatures() {
      if (mode.combineFeatures) {
        mode.combineFeatures();
      }
    },
    uncombineFeatures() {
      if (mode.uncombineFeatures) {
        mode.uncombineFeatures();
      }
    },
    drag(event) {
      delegate('drag', event);
    },
    click(event) {
      delegate('click', event);
    },
    mousemove(event) {
      delegate('mousemove', event);
    },
    mousedown(event) {
      delegate('mousedown', event);
    },
    mouseup(event) {
      delegate('mouseup', event);
    },
    mouseout(event) {
      delegate('mouseout', event);
    },
    keydown(event) {
      delegate('keydown', event);
    },
    keyup(event) {
      delegate('keyup', event);
    },
    touchstart(event) {
      delegate('touchstart', event);
    },
    touchmove(event) {
      delegate('touchmove', event);
    },
    touchend(event) {
      delegate('touchend', event);
    },
    tap(event) {
      delegate('tap', event);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ModeHandler);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/mouse_event_point.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/mouse_event_point.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/point-geometry */ "./node_modules/@mapbox/point-geometry/index.js");
/* harmony import */ var _mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Returns a Point representing a mouse event's position
 * relative to a containing element.
 *
 * @param {MouseEvent} mouseEvent
 * @param {Node} container
 * @returns {Point}
 */
function mouseEventPoint(mouseEvent, container) {
  const rect = container.getBoundingClientRect();
  return new _mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_0___default.a(
    mouseEvent.clientX - rect.left - (container.clientLeft || 0),
    mouseEvent.clientY - rect.top - (container.clientTop || 0)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (mouseEventPoint);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/move_features.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/move_features.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constrain_feature_movement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constrain_feature_movement */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/constrain_feature_movement.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



/* harmony default export */ __webpack_exports__["default"] = (function(features, delta) {
  const constrainedDelta = Object(_constrain_feature_movement__WEBPACK_IMPORTED_MODULE_0__["default"])(features.map(feature => feature.toGeoJSON()), delta);

  features.forEach((feature) => {
    const currentCoordinates = feature.getCoordinates();

    const moveCoordinate = (coord) => {
      const point = {
        lng: coord[0] + constrainedDelta.lng,
        lat: coord[1] + constrainedDelta.lat
      };
      return [point.lng, point.lat];
    };
    const moveRing = ring => ring.map(coord => moveCoordinate(coord));
    const moveMultiPolygon = multi => multi.map(ring => moveRing(ring));

    let nextCoordinates;
    if (feature.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].POINT) {
      nextCoordinates = moveCoordinate(currentCoordinates);
    } else if (feature.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].LINE_STRING || feature.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].MULTI_POINT) {
      nextCoordinates = currentCoordinates.map(moveCoordinate);
    } else if (feature.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].POLYGON || feature.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].MULTI_LINE_STRING) {
      nextCoordinates = currentCoordinates.map(moveRing);
    } else if (feature.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].MULTI_POLYGON) {
      nextCoordinates = currentCoordinates.map(moveMultiPolygon);
    }

    feature.incomingCoords(nextCoordinates);
  });
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/sort_features.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/sort_features.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/geojson-area */ "./node_modules/@mapbox/geojson-area/index.js");
/* harmony import */ var _mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



const FEATURE_SORT_RANKS = {
  Point: 0,
  LineString: 1,
  Polygon: 2
};

function comparator(a, b) {
  const score = FEATURE_SORT_RANKS[a.geometry.type] - FEATURE_SORT_RANKS[b.geometry.type];

  if (score === 0 && a.geometry.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].POLYGON) {
    return a.area - b.area;
  }

  return score;
}

// Sort in the order above, then sort polygons by area ascending.
function sortFeatures(features) {
  return features.map((feature) => {
    if (feature.geometry.type === _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].POLYGON) {
      feature.area = _mapbox_geojson_area__WEBPACK_IMPORTED_MODULE_0___default.a.geometry({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].FEATURE,
        property: {},
        geometry: feature.geometry
      });
    }
    return feature;
  }).sort(comparator).map((feature) => {
    delete feature.area;
    return feature;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sortFeatures);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_set.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_set.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function StringSet(items) {
  this._items = {};
  this._nums = {};
  this._length = items ? items.length : 0;
  if (!items) return;
  for (let i = 0, l = items.length; i < l; i++) {
    this.add(items[i]);
    if (items[i] === undefined) continue;
    if (typeof items[i] === 'string') this._items[items[i]] = i;
    else this._nums[items[i]] = i;

  }
}

StringSet.prototype.add = function(x) {
  if (this.has(x)) return this;
  this._length++;
  if (typeof x === 'string') this._items[x] = this._length;
  else this._nums[x] = this._length;
  return this;
};

StringSet.prototype.delete = function(x) {
  if (this.has(x) === false) return this;
  this._length--;
  delete this._items[x];
  delete this._nums[x];
  return this;
};

StringSet.prototype.has = function(x) {
  if (typeof x !== 'string' && typeof x !== 'number') return false;
  return this._items[x] !== undefined || this._nums[x] !== undefined;
};

StringSet.prototype.values = function() {
  const values = [];
  Object.keys(this._items).forEach((k) => {
    values.push({ k, v: this._items[k] });
  });
  Object.keys(this._nums).forEach((k) => {
    values.push({ k: JSON.parse(k), v: this._nums[k] });
  });

  return values.sort((a, b) => a.v - b.v).map(a => a.k);
};

StringSet.prototype.clear = function() {
  this._length = 0;
  this._items = {};
  this._nums = {};
  return this;
};

/* harmony default export */ __webpack_exports__["default"] = (StringSet);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_sets_are_equal.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_sets_are_equal.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (a.length !== b.length) return false;
  return JSON.stringify(a.map(id => id).sort()) === JSON.stringify(b.map(id => id).sort());
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/theme.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/theme.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  {
    'id': 'gl-draw-polygon-fill-inactive',
    'type': 'fill',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Polygon'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'fill-color': '#3bb2d0',
      'fill-outline-color': '#3bb2d0',
      'fill-opacity': 0.1
    }
  },
  {
    'id': 'gl-draw-polygon-fill-active',
    'type': 'fill',
    'filter': ['all', ['==', 'active', 'true'], ['==', '$type', 'Polygon']],
    'paint': {
      'fill-color': '#fbb03b',
      'fill-outline-color': '#fbb03b',
      'fill-opacity': 0.1
    }
  },
  {
    'id': 'gl-draw-polygon-midpoint',
    'type': 'circle',
    'filter': ['all',
      ['==', '$type', 'Point'],
      ['==', 'meta', 'midpoint']],
    'paint': {
      'circle-radius': 3,
      'circle-color': '#fbb03b'
    }
  },
  {
    'id': 'gl-draw-polygon-stroke-inactive',
    'type': 'line',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Polygon'],
      ['!=', 'mode', 'static']
    ],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#3bb2d0',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-polygon-stroke-active',
    'type': 'line',
    'filter': ['all', ['==', 'active', 'true'], ['==', '$type', 'Polygon']],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#fbb03b',
      'line-dasharray': [0.2, 2],
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-line-inactive',
    'type': 'line',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'LineString'],
      ['!=', 'mode', 'static']
    ],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#3bb2d0',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-line-active',
    'type': 'line',
    'filter': ['all',
      ['==', '$type', 'LineString'],
      ['==', 'active', 'true']
    ],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#fbb03b',
      'line-dasharray': [0.2, 2],
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-polygon-and-line-vertex-stroke-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'meta', 'vertex'],
      ['==', '$type', 'Point'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 5,
      'circle-color': '#fff'
    }
  },
  {
    'id': 'gl-draw-polygon-and-line-vertex-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'meta', 'vertex'],
      ['==', '$type', 'Point'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 3,
      'circle-color': '#fbb03b'
    }
  },
  {
    'id': 'gl-draw-point-point-stroke-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Point'],
      ['==', 'meta', 'feature'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 5,
      'circle-opacity': 1,
      'circle-color': '#fff'
    }
  },
  {
    'id': 'gl-draw-point-inactive',
    'type': 'circle',
    'filter': ['all',
      ['==', 'active', 'false'],
      ['==', '$type', 'Point'],
      ['==', 'meta', 'feature'],
      ['!=', 'mode', 'static']
    ],
    'paint': {
      'circle-radius': 3,
      'circle-color': '#3bb2d0'
    }
  },
  {
    'id': 'gl-draw-point-stroke-active',
    'type': 'circle',
    'filter': ['all',
      ['==', '$type', 'Point'],
      ['==', 'active', 'true'],
      ['!=', 'meta', 'midpoint']
    ],
    'paint': {
      'circle-radius': 7,
      'circle-color': '#fff'
    }
  },
  {
    'id': 'gl-draw-point-active',
    'type': 'circle',
    'filter': ['all',
      ['==', '$type', 'Point'],
      ['!=', 'meta', 'midpoint'],
      ['==', 'active', 'true']],
    'paint': {
      'circle-radius': 5,
      'circle-color': '#fbb03b'
    }
  },
  {
    'id': 'gl-draw-polygon-fill-static',
    'type': 'fill',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Polygon']],
    'paint': {
      'fill-color': '#404040',
      'fill-outline-color': '#404040',
      'fill-opacity': 0.1
    }
  },
  {
    'id': 'gl-draw-polygon-stroke-static',
    'type': 'line',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Polygon']],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#404040',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-line-static',
    'type': 'line',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'LineString']],
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    },
    'paint': {
      'line-color': '#404040',
      'line-width': 2
    }
  },
  {
    'id': 'gl-draw-point-static',
    'type': 'circle',
    'filter': ['all', ['==', 'mode', 'static'], ['==', '$type', 'Point']],
    'paint': {
      'circle-radius': 5,
      'circle-color': '#404040'
    }
  }
]);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/to_dense_array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/lib/to_dense_array.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Derive a dense array (no `undefined`s) from a single value or array.
 *
 * @param {any} x
 * @return {Array<any>}
 */
function toDenseArray(x) {
  return [].concat(x).filter(y => y !== undefined);
}

/* harmony default export */ __webpack_exports__["default"] = (toDenseArray);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/direct_select.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/direct_select.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common_selectors */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js");
/* harmony import */ var _lib_create_supplementary_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/create_supplementary_points */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points.js");
/* harmony import */ var _lib_constrain_feature_movement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constrain_feature_movement */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/constrain_feature_movement.js");
/* harmony import */ var _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/double_click_zoom */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _lib_move_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/move_features */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/move_features.js");







const isVertex = Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isOfMetaType"])(_constants__WEBPACK_IMPORTED_MODULE_4__["meta"].VERTEX);
const isMidpoint = Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isOfMetaType"])(_constants__WEBPACK_IMPORTED_MODULE_4__["meta"].MIDPOINT);

const DirectSelect = {};

// INTERNAL FUCNTIONS

DirectSelect.fireUpdate = function() {
  this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].UPDATE, {
    action: _constants__WEBPACK_IMPORTED_MODULE_4__["updateActions"].CHANGE_COORDINATES,
    features: this.getSelected().map(f => f.toGeoJSON())
  });
};

DirectSelect.fireActionable = function(state) {
  this.setActionableState({
    combineFeatures: false,
    uncombineFeatures: false,
    trash: state.selectedCoordPaths.length > 0
  });
};

DirectSelect.startDragging = function(state, e) {
  this.map.dragPan.disable();
  state.canDragMove = true;
  state.dragMoveLocation = e.lngLat;
};

DirectSelect.stopDragging = function(state) {
  this.map.dragPan.enable();
  state.dragMoving = false;
  state.canDragMove = false;
  state.dragMoveLocation = null;
};

DirectSelect.onVertex = function (state, e) {
  this.startDragging(state, e);
  const about = e.featureTarget.properties;
  const selectedIndex = state.selectedCoordPaths.indexOf(about.coord_path);
  if (!Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isShiftDown"])(e) && selectedIndex === -1) {
    state.selectedCoordPaths = [about.coord_path];
  } else if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isShiftDown"])(e) && selectedIndex === -1) {
    state.selectedCoordPaths.push(about.coord_path);
  }

  const selectedCoordinates = this.pathsToCoordinates(state.featureId, state.selectedCoordPaths);
  this.setSelectedCoordinates(selectedCoordinates);
};

DirectSelect.onMidpoint = function(state, e) {
  this.startDragging(state, e);
  const about = e.featureTarget.properties;
  state.feature.addCoordinate(about.coord_path, about.lng, about.lat);
  this.fireUpdate();
  state.selectedCoordPaths = [about.coord_path];
};

DirectSelect.pathsToCoordinates = function(featureId, paths) {
  return paths.map(coord_path => ({ feature_id: featureId, coord_path }));
};

DirectSelect.onFeature = function(state, e) {
  if (state.selectedCoordPaths.length === 0) this.startDragging(state, e);
  else this.stopDragging(state);
};

DirectSelect.dragFeature = function(state, e, delta) {
  Object(_lib_move_features__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getSelected(), delta);
  state.dragMoveLocation = e.lngLat;
};

DirectSelect.dragVertex = function(state, e, delta) {
  const selectedCoords = state.selectedCoordPaths.map(coord_path => state.feature.getCoordinate(coord_path));
  const selectedCoordPoints = selectedCoords.map(coords => ({
    type: _constants__WEBPACK_IMPORTED_MODULE_4__["geojsonTypes"].FEATURE,
    properties: {},
    geometry: {
      type: _constants__WEBPACK_IMPORTED_MODULE_4__["geojsonTypes"].POINT,
      coordinates: coords
    }
  }));

  const constrainedDelta = Object(_lib_constrain_feature_movement__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedCoordPoints, delta);
  for (let i = 0; i < selectedCoords.length; i++) {
    const coord = selectedCoords[i];
    state.feature.updateCoordinate(state.selectedCoordPaths[i], coord[0] + constrainedDelta.lng, coord[1] + constrainedDelta.lat);
  }
};

DirectSelect.clickNoTarget = function () {
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_4__["modes"].SIMPLE_SELECT);
};

DirectSelect.clickInactive = function () {
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_4__["modes"].SIMPLE_SELECT);
};

DirectSelect.clickActiveFeature = function (state) {
  state.selectedCoordPaths = [];
  this.clearSelectedCoordinates();
  state.feature.changed();
};

// EXTERNAL FUNCTIONS

DirectSelect.onSetup = function(opts) {
  const featureId = opts.featureId;
  const feature = this.getFeature(featureId);

  if (!feature) {
    throw new Error('You must provide a featureId to enter direct_select mode');
  }

  if (feature.type === _constants__WEBPACK_IMPORTED_MODULE_4__["geojsonTypes"].POINT) {
    throw new TypeError('direct_select mode doesn\'t handle point features');
  }

  const state = {
    featureId,
    feature,
    dragMoveLocation: opts.startPos || null,
    dragMoving: false,
    canDragMove: false,
    selectedCoordPaths: opts.coordPath ? [opts.coordPath] : []
  };

  this.setSelectedCoordinates(this.pathsToCoordinates(featureId, state.selectedCoordPaths));
  this.setSelected(featureId);
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_3__["default"].disable(this);

  this.setActionableState({
    trash: true
  });

  return state;
};

DirectSelect.onStop = function() {
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_3__["default"].enable(this);
  this.clearSelectedCoordinates();
};

DirectSelect.toDisplayFeatures = function(state, geojson, push) {
  if (state.featureId === geojson.properties.id) {
    geojson.properties.active = _constants__WEBPACK_IMPORTED_MODULE_4__["activeStates"].ACTIVE;
    push(geojson);
    Object(_lib_create_supplementary_points__WEBPACK_IMPORTED_MODULE_1__["default"])(geojson, {
      map: this.map,
      midpoints: true,
      selectedPaths: state.selectedCoordPaths
    }).forEach(push);
  } else {
    geojson.properties.active = _constants__WEBPACK_IMPORTED_MODULE_4__["activeStates"].INACTIVE;
    push(geojson);
  }
  this.fireActionable(state);
};

DirectSelect.onTrash = function(state) {
  // Uses number-aware sorting to make sure '9' < '10'. Comparison is reversed because we want them
  // in reverse order so that we can remove by index safely.
  state.selectedCoordPaths
    .sort((a, b) => b.localeCompare(a, 'en', { numeric: true }))
    .forEach(id => state.feature.removeCoordinate(id));
  this.fireUpdate();
  state.selectedCoordPaths = [];
  this.clearSelectedCoordinates();
  this.fireActionable(state);
  if (state.feature.isValid() === false) {
    this.deleteFeature([state.featureId]);
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_4__["modes"].SIMPLE_SELECT, {});
  }
};

DirectSelect.onMouseMove = function(state, e) {
  // On mousemove that is not a drag, stop vertex movement.
  const isFeature = Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isActiveFeature"])(e);
  const onVertex = isVertex(e);
  const noCoords = state.selectedCoordPaths.length === 0;
  if (isFeature && noCoords) this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_4__["cursors"].MOVE });
  else if (onVertex && !noCoords) this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_4__["cursors"].MOVE });
  else this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_4__["cursors"].NONE });
  this.stopDragging(state);
};

DirectSelect.onMouseOut = function(state) {
  // As soon as you mouse leaves the canvas, update the feature
  if (state.dragMoving) this.fireUpdate();
};

DirectSelect.onTouchStart = DirectSelect.onMouseDown = function(state, e) {
  if (isVertex(e)) return this.onVertex(state, e);
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isActiveFeature"])(e)) return this.onFeature(state, e);
  if (isMidpoint(e)) return this.onMidpoint(state, e);
};

DirectSelect.onDrag = function(state, e) {
  if (state.canDragMove !== true) return;
  state.dragMoving = true;
  e.originalEvent.stopPropagation();

  const delta = {
    lng: e.lngLat.lng - state.dragMoveLocation.lng,
    lat: e.lngLat.lat - state.dragMoveLocation.lat
  };
  if (state.selectedCoordPaths.length > 0) this.dragVertex(state, e, delta);
  else this.dragFeature(state, e, delta);

  state.dragMoveLocation = e.lngLat;
};

DirectSelect.onClick = function(state, e) {
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["noTarget"])(e)) return this.clickNoTarget(state, e);
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isActiveFeature"])(e)) return this.clickActiveFeature(state, e);
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isInactiveFeature"])(e)) return this.clickInactive(state, e);
  this.stopDragging(state);
};

DirectSelect.onTap = function(state, e) {
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["noTarget"])(e)) return this.clickNoTarget(state, e);
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isActiveFeature"])(e)) return this.clickActiveFeature(state, e);
  if (Object(_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isInactiveFeature"])(e)) return this.clickInactive(state, e);
};

DirectSelect.onTouchEnd = DirectSelect.onMouseUp = function(state) {
  if (state.dragMoving) {
    this.fireUpdate();
  }
  this.stopDragging(state);
};

/* harmony default export */ __webpack_exports__["default"] = (DirectSelect);



/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_line_string.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_line_string.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common_selectors */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js");
/* harmony import */ var _lib_is_event_at_coordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/is_event_at_coordinates */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_event_at_coordinates.js");
/* harmony import */ var _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/double_click_zoom */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _lib_create_vertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/create_vertex */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_vertex.js");






const DrawLineString = {};

DrawLineString.onSetup = function(opts) {
  opts = opts || {};
  const featureId = opts.featureId;

  let line, currentVertexPosition;
  let direction = 'forward';
  if (featureId) {
    line = this.getFeature(featureId);
    if (!line) {
      throw new Error('Could not find a feature with the provided featureId');
    }
    let from = opts.from;
    if (from && from.type === 'Feature' && from.geometry && from.geometry.type === 'Point') {
      from = from.geometry;
    }
    if (from && from.type === 'Point' && from.coordinates && from.coordinates.length === 2) {
      from = from.coordinates;
    }
    if (!from || !Array.isArray(from)) {
      throw new Error('Please use the `from` property to indicate which point to continue the line from');
    }
    const lastCoord = line.coordinates.length - 1;
    if (line.coordinates[lastCoord][0] === from[0] && line.coordinates[lastCoord][1] === from[1]) {
      currentVertexPosition = lastCoord + 1;
      // add one new coordinate to continue from
      line.addCoordinate(currentVertexPosition, ...line.coordinates[lastCoord]);
    } else if (line.coordinates[0][0] === from[0] && line.coordinates[0][1] === from[1]) {
      direction = 'backwards';
      currentVertexPosition = 0;
      // add one new coordinate to continue from
      line.addCoordinate(currentVertexPosition, ...line.coordinates[0]);
    } else {
      throw new Error('`from` should match the point at either the start or the end of the provided LineString');
    }
  } else {
    line = this.newFeature({
      type: _constants__WEBPACK_IMPORTED_MODULE_3__["geojsonTypes"].FEATURE,
      properties: {},
      geometry: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["geojsonTypes"].LINE_STRING,
        coordinates: []
      }
    });
    currentVertexPosition = 0;
    this.addFeature(line);
  }

  this.clearSelectedFeatures();
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_2__["default"].disable(this);
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_3__["cursors"].ADD });
  this.activateUIButton(_constants__WEBPACK_IMPORTED_MODULE_3__["types"].LINE);
  this.setActionableState({
    trash: true
  });

  return {
    line,
    currentVertexPosition,
    direction
  };
};

DrawLineString.clickAnywhere = function(state, e) {
  if (state.currentVertexPosition > 0 && Object(_lib_is_event_at_coordinates__WEBPACK_IMPORTED_MODULE_1__["default"])(e, state.line.coordinates[state.currentVertexPosition - 1]) ||
      state.direction === 'backwards' && Object(_lib_is_event_at_coordinates__WEBPACK_IMPORTED_MODULE_1__["default"])(e, state.line.coordinates[state.currentVertexPosition + 1])) {
    return this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_3__["modes"].SIMPLE_SELECT, { featureIds: [state.line.id] });
  }
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_3__["cursors"].ADD });
  state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  if (state.direction === 'forward') {
    state.currentVertexPosition++;
    state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  } else {
    state.line.addCoordinate(0, e.lngLat.lng, e.lngLat.lat);
  }
};

DrawLineString.clickOnVertex = function(state) {
  return this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_3__["modes"].SIMPLE_SELECT, { featureIds: [state.line.id] });
};

DrawLineString.onMouseMove = function(state, e) {
  state.line.updateCoordinate(state.currentVertexPosition, e.lngLat.lng, e.lngLat.lat);
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isVertex"](e)) {
    this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_3__["cursors"].POINTER });
  }
};

DrawLineString.onTap = DrawLineString.onClick = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isVertex"](e)) return this.clickOnVertex(state, e);
  this.clickAnywhere(state, e);
};

DrawLineString.onKeyUp = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isEnterKey"](e)) {
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_3__["modes"].SIMPLE_SELECT, { featureIds: [state.line.id] });
  } else if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isEscapeKey"](e)) {
    this.deleteFeature([state.line.id], { silent: true });
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_3__["modes"].SIMPLE_SELECT);
  }
};

DrawLineString.onStop = function(state) {
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_2__["default"].enable(this);
  this.activateUIButton();

  // check to see if we've deleted this feature
  if (this.getFeature(state.line.id) === undefined) return;

  //remove last added coordinate
  state.line.removeCoordinate(`${state.currentVertexPosition}`);
  if (state.line.isValid()) {
    this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_3__["events"].CREATE, {
      features: [state.line.toGeoJSON()]
    });
  } else {
    this.deleteFeature([state.line.id], { silent: true });
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_3__["modes"].SIMPLE_SELECT, {}, { silent: true });
  }
};

DrawLineString.onTrash = function(state) {
  this.deleteFeature([state.line.id], { silent: true });
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_3__["modes"].SIMPLE_SELECT);
};

DrawLineString.toDisplayFeatures = function(state, geojson, display) {
  const isActiveLine = geojson.properties.id === state.line.id;
  geojson.properties.active = (isActiveLine) ? _constants__WEBPACK_IMPORTED_MODULE_3__["activeStates"].ACTIVE : _constants__WEBPACK_IMPORTED_MODULE_3__["activeStates"].INACTIVE;
  if (!isActiveLine) return display(geojson);
  // Only render the line if it has at least one real coordinate
  if (geojson.geometry.coordinates.length < 2) return;
  geojson.properties.meta = _constants__WEBPACK_IMPORTED_MODULE_3__["meta"].FEATURE;
  display(Object(_lib_create_vertex__WEBPACK_IMPORTED_MODULE_4__["default"])(
    state.line.id,
    geojson.geometry.coordinates[state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1],
    `${state.direction === 'forward' ? geojson.geometry.coordinates.length - 2 : 1}`,
    false
  ));

  display(geojson);
};

/* harmony default export */ __webpack_exports__["default"] = (DrawLineString);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_point.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_point.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common_selectors */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



const DrawPoint = {};

DrawPoint.onSetup = function() {
  const point = this.newFeature({
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].FEATURE,
    properties: {},
    geometry: {
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["geojsonTypes"].POINT,
      coordinates: []
    }
  });

  this.addFeature(point);

  this.clearSelectedFeatures();
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_1__["cursors"].ADD });
  this.activateUIButton(_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POINT);

  this.setActionableState({
    trash: true
  });

  return { point };
};

DrawPoint.stopDrawingAndRemove = function(state) {
  this.deleteFeature([state.point.id], { silent: true });
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_1__["modes"].SIMPLE_SELECT);
};

DrawPoint.onTap = DrawPoint.onClick = function(state, e) {
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_1__["cursors"].MOVE });
  state.point.updateCoordinate('', e.lngLat.lng, e.lngLat.lat);
  this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_1__["events"].CREATE, {
    features: [state.point.toGeoJSON()]
  });
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_1__["modes"].SIMPLE_SELECT, { featureIds: [state.point.id] });
};

DrawPoint.onStop = function(state) {
  this.activateUIButton();
  if (!state.point.getCoordinate().length) {
    this.deleteFeature([state.point.id], { silent: true });
  }
};

DrawPoint.toDisplayFeatures = function(state, geojson, display) {
  // Never render the point we're drawing
  const isActivePoint = geojson.properties.id === state.point.id;
  geojson.properties.active = (isActivePoint) ? _constants__WEBPACK_IMPORTED_MODULE_1__["activeStates"].ACTIVE : _constants__WEBPACK_IMPORTED_MODULE_1__["activeStates"].INACTIVE;
  if (!isActivePoint) return display(geojson);
};

DrawPoint.onTrash = DrawPoint.stopDrawingAndRemove;

DrawPoint.onKeyUp = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isEscapeKey"](e) || _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isEnterKey"](e)) {
    return this.stopDrawingAndRemove(state, e);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (DrawPoint);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_polygon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_polygon.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common_selectors */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js");
/* harmony import */ var _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/double_click_zoom */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _lib_is_event_at_coordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/is_event_at_coordinates */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/is_event_at_coordinates.js");
/* harmony import */ var _lib_create_vertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/create_vertex */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_vertex.js");






const DrawPolygon = {};

DrawPolygon.onSetup = function() {
  const polygon = this.newFeature({
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].FEATURE,
    properties: {},
    geometry: {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].POLYGON,
      coordinates: [[]]
    }
  });

  this.addFeature(polygon);

  this.clearSelectedFeatures();
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_1__["default"].disable(this);
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_2__["cursors"].ADD });
  this.activateUIButton(_constants__WEBPACK_IMPORTED_MODULE_2__["types"].POLYGON);
  this.setActionableState({
    trash: true
  });

  return {
    polygon,
    currentVertexPosition: 0
  };
};

DrawPolygon.clickAnywhere = function(state, e) {
  if (state.currentVertexPosition > 0 && Object(_lib_is_event_at_coordinates__WEBPACK_IMPORTED_MODULE_3__["default"])(e, state.polygon.coordinates[0][state.currentVertexPosition - 1])) {
    return this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_2__["modes"].SIMPLE_SELECT, { featureIds: [state.polygon.id] });
  }
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_2__["cursors"].ADD });
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
  state.currentVertexPosition++;
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
};

DrawPolygon.clickOnVertex = function(state) {
  return this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_2__["modes"].SIMPLE_SELECT, { featureIds: [state.polygon.id] });
};

DrawPolygon.onMouseMove = function(state, e) {
  state.polygon.updateCoordinate(`0.${state.currentVertexPosition}`, e.lngLat.lng, e.lngLat.lat);
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isVertex"](e)) {
    this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_2__["cursors"].POINTER });
  }
};

DrawPolygon.onTap = DrawPolygon.onClick = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isVertex"](e)) return this.clickOnVertex(state, e);
  return this.clickAnywhere(state, e);
};

DrawPolygon.onKeyUp = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isEscapeKey"](e)) {
    this.deleteFeature([state.polygon.id], { silent: true });
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_2__["modes"].SIMPLE_SELECT);
  } else if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isEnterKey"](e)) {
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_2__["modes"].SIMPLE_SELECT, { featureIds: [state.polygon.id] });
  }
};

DrawPolygon.onStop = function(state) {
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_2__["cursors"].NONE });
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_1__["default"].enable(this);
  this.activateUIButton();

  // check to see if we've deleted this feature
  if (this.getFeature(state.polygon.id) === undefined) return;

  //remove last added coordinate
  state.polygon.removeCoordinate(`0.${state.currentVertexPosition}`);
  if (state.polygon.isValid()) {
    this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_2__["events"].CREATE, {
      features: [state.polygon.toGeoJSON()]
    });
  } else {
    this.deleteFeature([state.polygon.id], { silent: true });
    this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_2__["modes"].SIMPLE_SELECT, {}, { silent: true });
  }
};

DrawPolygon.toDisplayFeatures = function(state, geojson, display) {
  const isActivePolygon = geojson.properties.id === state.polygon.id;
  geojson.properties.active = (isActivePolygon) ? _constants__WEBPACK_IMPORTED_MODULE_2__["activeStates"].ACTIVE : _constants__WEBPACK_IMPORTED_MODULE_2__["activeStates"].INACTIVE;
  if (!isActivePolygon) return display(geojson);

  // Don't render a polygon until it has two positions
  // (and a 3rd which is just the first repeated)
  if (geojson.geometry.coordinates.length === 0) return;

  const coordinateCount = geojson.geometry.coordinates[0].length;
  // 2 coordinates after selecting a draw type
  // 3 after creating the first point
  if (coordinateCount < 3) {
    return;
  }
  geojson.properties.meta = _constants__WEBPACK_IMPORTED_MODULE_2__["meta"].FEATURE;
  display(Object(_lib_create_vertex__WEBPACK_IMPORTED_MODULE_4__["default"])(state.polygon.id, geojson.geometry.coordinates[0][0], '0.0', false));
  if (coordinateCount > 3) {
    // Add a start position marker to the map, clicking on this will finish the feature
    // This should only be shown when we're in a valid spot
    const endPos = geojson.geometry.coordinates[0].length - 3;
    display(Object(_lib_create_vertex__WEBPACK_IMPORTED_MODULE_4__["default"])(state.polygon.id, geojson.geometry.coordinates[0][endPos], `0.${endPos}`, false));
  }
  if (coordinateCount <= 4) {
    // If we've only drawn two positions (plus the closer),
    // make a LineString instead of a Polygon
    const lineCoordinates = [
      [geojson.geometry.coordinates[0][0][0], geojson.geometry.coordinates[0][0][1]], [geojson.geometry.coordinates[0][1][0], geojson.geometry.coordinates[0][1][1]]
    ];
    // create an initial vertex so that we can track the first point on mobile devices
    display({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].FEATURE,
      properties: geojson.properties,
      geometry: {
        coordinates: lineCoordinates,
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["geojsonTypes"].LINE_STRING
      }
    });
    if (coordinateCount === 3) {
      return;
    }
  }
  // render the Polygon
  return display(geojson);
};

DrawPolygon.onTrash = function(state) {
  this.deleteFeature([state.polygon.id], { silent: true });
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_2__["modes"].SIMPLE_SELECT);
};

/* harmony default export */ __webpack_exports__["default"] = (DrawPolygon);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple_select */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/simple_select.js");
/* harmony import */ var _direct_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direct_select */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/direct_select.js");
/* harmony import */ var _draw_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw_point */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_point.js");
/* harmony import */ var _draw_polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw_polygon */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_polygon.js");
/* harmony import */ var _draw_line_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw_line_string */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/draw_line_string.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  simple_select: _simple_select__WEBPACK_IMPORTED_MODULE_0__["default"],
  direct_select: _direct_select__WEBPACK_IMPORTED_MODULE_1__["default"],
  draw_point: _draw_point__WEBPACK_IMPORTED_MODULE_2__["default"],
  draw_polygon: _draw_polygon__WEBPACK_IMPORTED_MODULE_3__["default"],
  draw_line_string: _draw_line_string__WEBPACK_IMPORTED_MODULE_4__["default"],
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/mode_interface.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/mode_interface.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode_interface_accessors */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/mode_interface_accessors.js");

/* harmony default export */ __webpack_exports__["default"] = (_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"]);

/**
 * Triggered while a mode is being transitioned into.
 * @param opts {Object} - this is the object passed via `draw.changeMode('mode', opts)`;
 * @name MODE.onSetup
 * @returns {Object} - this object will be passed to all other life cycle functions
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onSetup = function() {};

/**
 * Triggered when a drag event is detected on the map
 * @name MODE.onDrag
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onDrag = function() {};

/**
 * Triggered when the mouse is clicked
 * @name MODE.onClick
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onClick = function() {};

/**
 * Triggered with the mouse is moved
 * @name MODE.onMouseMove
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onMouseMove = function() {};

/**
 * Triggered when the mouse button is pressed down
 * @name MODE.onMouseDown
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onMouseDown = function() {};

/**
 * Triggered when the mouse button is released
 * @name MODE.onMouseUp
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onMouseUp = function() {};

/**
 * Triggered when the mouse leaves the map's container
 * @name MODE.onMouseOut
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onMouseOut = function() {};

/**
 * Triggered when a key up event is detected
 * @name MODE.onKeyUp
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onKeyUp = function() {};

/**
 * Triggered when a key down event is detected
 * @name MODE.onKeyDown
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onKeyDown = function() {};

/**
 * Triggered when a touch event is started
 * @name MODE.onTouchStart
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onTouchStart = function() {};

/**
 * Triggered when one drags thier finger on a mobile device
 * @name MODE.onTouchMove
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onTouchMove = function() {};

/**
 * Triggered when one removes their finger from the map
 * @name MODE.onTouchEnd
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onTouchEnd = function() {};

/**
 * Triggered when one quicly taps the map
 * @name MODE.onTap
 * @param state {Object} - a mutible state object created by onSetup
 * @param e {Object} - the captured event that is triggering this life cycle event
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onTap = function() {};

/**
 * Triggered when the mode is being exited, to be used for cleaning up artifacts such as invalid features
 * @name MODE.onStop
 * @param state {Object} - a mutible state object created by onSetup
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onStop = function() {};

/**
 * Triggered when [draw.trash()](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#trash-draw) is called.
 * @name MODE.onTrash
 * @param state {Object} - a mutible state object created by onSetup
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onTrash = function() {};

/**
 * Triggered when [draw.combineFeatures()](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#combinefeatures-draw) is called.
 * @name MODE.onCombineFeature
 * @param state {Object} - a mutible state object created by onSetup
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onCombineFeature = function() {};

/**
 * Triggered when [draw.uncombineFeatures()](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#uncombinefeatures-draw) is called.
 * @name MODE.onUncombineFeature
 * @param state {Object} - a mutible state object created by onSetup
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onUncombineFeature = function() {};

/**
 * Triggered per feature on render to convert raw features into set of features for display on the map
 * See [styling draw](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#styling-draw) for information about what geojson properties Draw uses as part of rendering.
 * @name MODE.toDisplayFeatures
 * @param state {Object} - a mutible state object created by onSetup
 * @param geojson {Object} - a geojson being evaulated. To render, pass to `display`.
 * @param display {Function} - all geojson objects passed to this be rendered onto the map
 */
_mode_interface_accessors__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toDisplayFeatures = function() {
  throw new Error('You must overwrite toDisplayFeatures');
};



/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/mode_interface_accessors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/mode_interface_accessors.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModeInterface; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _lib_features_at__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/features_at */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/features_at.js");
/* harmony import */ var _feature_types_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature_types/point */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/point.js");
/* harmony import */ var _feature_types_line_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feature_types/line_string */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/line_string.js");
/* harmony import */ var _feature_types_polygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feature_types/polygon */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/polygon.js");
/* harmony import */ var _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feature_types/multi_feature */ "./node_modules/@mapbox/mapbox-gl-draw/src/feature_types/multi_feature.js");







function ModeInterface(ctx) {
  this.map = ctx.map;
  this.drawConfig = JSON.parse(JSON.stringify(ctx.options || {}));
  this._ctx = ctx;
}

/**
 * Sets Draw's interal selected state
 * @name this.setSelected
 * @param {DrawFeature[]} - whats selected as a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js)
 */
ModeInterface.prototype.setSelected = function(features) {
  return this._ctx.store.setSelected(features);
};

/**
 * Sets Draw's internal selected coordinate state
 * @name this.setSelectedCoordinates
 * @param {Object[]} coords - a array of {coord_path: 'string', featureId: 'string'}
 */
ModeInterface.prototype.setSelectedCoordinates = function(coords) {
  this._ctx.store.setSelectedCoordinates(coords);
  coords.reduce((m, c) => {
    if (m[c.feature_id] === undefined) {
      m[c.feature_id] = true;
      this._ctx.store.get(c.feature_id).changed();
    }
    return m;
  }, {});
};

/**
 * Get all selected features as a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js)
 * @name this.getSelected
 * @returns {DrawFeature[]}
 */
ModeInterface.prototype.getSelected = function() {
  return this._ctx.store.getSelected();
};

/**
 * Get the ids of all currently selected features
 * @name this.getSelectedIds
 * @returns {String[]}
 */
ModeInterface.prototype.getSelectedIds = function() {
  return this._ctx.store.getSelectedIds();
};

/**
 * Check if a feature is selected
 * @name this.isSelected
 * @param {String} id - a feature id
 * @returns {Boolean}
 */
ModeInterface.prototype.isSelected = function(id) {
  return this._ctx.store.isSelected(id);
};

/**
 * Get a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js) by its id
 * @name this.getFeature
 * @param {String} id - a feature id
 * @returns {DrawFeature}
 */
ModeInterface.prototype.getFeature = function(id) {
  return this._ctx.store.get(id);
};

/**
 * Add a feature to draw's internal selected state
 * @name this.select
 * @param {String} id
 */
ModeInterface.prototype.select = function(id) {
  return this._ctx.store.select(id);
};

/**
 * Remove a feature from draw's internal selected state
 * @name this.delete
 * @param {String} id
 */
ModeInterface.prototype.deselect = function(id) {
  return this._ctx.store.deselect(id);
};

/**
 * Delete a feature from draw
 * @name this.deleteFeature
 * @param {String} id - a feature id
 */
ModeInterface.prototype.deleteFeature = function(id, opts = {}) {
  return this._ctx.store.delete(id, opts);
};

/**
 * Add a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js) to draw.
 * See `this.newFeature` for converting geojson into a DrawFeature
 * @name this.addFeature
 * @param {DrawFeature} feature - the feature to add
 */
ModeInterface.prototype.addFeature = function(feature) {
  return this._ctx.store.add(feature);
};

/**
 * Clear all selected features
 */
ModeInterface.prototype.clearSelectedFeatures = function() {
  return this._ctx.store.clearSelected();
};

/**
 * Clear all selected coordinates
 */
ModeInterface.prototype.clearSelectedCoordinates = function() {
  return this._ctx.store.clearSelectedCoordinates();
};

/**
 * Indicate if the different action are currently possible with your mode
 * See [draw.actionalbe](https://github.com/mapbox/mapbox-gl-draw/blob/master/API.md#drawactionable) for a list of possible actions. All undefined actions are set to **false** by default
 * @name this.setActionableState
 * @param {Object} actions
 */
ModeInterface.prototype.setActionableState = function(actions = {}) {
  const newSet = {
    trash: actions.trash || false,
    combineFeatures: actions.combineFeatures || false,
    uncombineFeatures: actions.uncombineFeatures || false
  };
  return this._ctx.events.actionable(newSet);
};

/**
 * Trigger a mode change
 * @name this.changeMode
 * @param {String} mode - the mode to transition into
 * @param {Object} opts - the options object to pass to the new mode
 * @param {Object} eventOpts - used to control what kind of events are emitted.
 */
ModeInterface.prototype.changeMode = function(mode, opts = {}, eventOpts = {}) {
  return this._ctx.events.changeMode(mode, opts, eventOpts);
};

/**
 * Update the state of draw map classes
 * @name this.updateUIClasses
 * @param {Object} opts
 */
ModeInterface.prototype.updateUIClasses = function(opts) {
  return this._ctx.ui.queueMapClasses(opts);
};

/**
 * If a name is provided it makes that button active, else if makes all buttons inactive
 * @name this.activateUIButton
 * @param {String?} name - name of the button to make active, leave as undefined to set buttons to be inactive
 */
ModeInterface.prototype.activateUIButton = function(name) {
  return this._ctx.ui.setActiveButton(name);
};

/**
 * Get the features at the location of an event object or in a bbox
 * @name this.featuresAt
 * @param {Event||NULL} event - a mapbox-gl event object
 * @param {BBOX||NULL} bbox - the area to get features from
 * @param {String} bufferType - is this `click` or `tap` event, defaults to click
 */
ModeInterface.prototype.featuresAt = function(event, bbox, bufferType = 'click') {
  if (bufferType !== 'click' && bufferType !== 'touch') throw new Error('invalid buffer type');
  return _lib_features_at__WEBPACK_IMPORTED_MODULE_1__["default"][bufferType](event, bbox, this._ctx);
};

/**
 * Create a new [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js) from geojson
 * @name this.newFeature
 * @param {GeoJSONFeature} geojson
 * @returns {DrawFeature}
 */
ModeInterface.prototype.newFeature = function(geojson) {
  const type = geojson.geometry.type;
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POINT) return new _feature_types_point__WEBPACK_IMPORTED_MODULE_2__["default"](this._ctx, geojson);
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].LINE_STRING) return new _feature_types_line_string__WEBPACK_IMPORTED_MODULE_3__["default"](this._ctx, geojson);
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POLYGON) return new _feature_types_polygon__WEBPACK_IMPORTED_MODULE_4__["default"](this._ctx, geojson);
  return new _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_5__["default"](this._ctx, geojson);
};

/**
 * Check is an object is an instance of a [DrawFeature](https://github.com/mapbox/mapbox-gl-draw/blob/master/src/feature_types/feature.js)
 * @name this.isInstanceOf
 * @param {String} type - `Point`, `LineString`, `Polygon`, `MultiFeature`
 * @param {Object} feature - the object that needs to be checked
 * @returns {Boolean}
 */
ModeInterface.prototype.isInstanceOf = function(type, feature) {
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POINT) return feature instanceof _feature_types_point__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].LINE_STRING) return feature instanceof _feature_types_line_string__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POLYGON) return feature instanceof _feature_types_polygon__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (type === 'MultiFeature') return feature instanceof _feature_types_multi_feature__WEBPACK_IMPORTED_MODULE_5__["default"];
  throw new Error(`Unknown feature class: ${type}`);
};

/**
 * Force draw to rerender the feature of the provided id
 * @name this.doRender
 * @param {String} id - a feature id
 */
ModeInterface.prototype.doRender = function(id) {
  return this._ctx.store.featureChanged(id);
};



/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/object_to_mode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/object_to_mode.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mode_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode_interface */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/mode_interface.js");


const eventMapper = {
  drag: 'onDrag',
  click: 'onClick',
  mousemove: 'onMouseMove',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseout: 'onMouseOut',
  keyup: 'onKeyUp',
  keydown: 'onKeyDown',
  touchstart: 'onTouchStart',
  touchmove: 'onTouchMove',
  touchend: 'onTouchEnd',
  tap: 'onTap'
};

const eventKeys = Object.keys(eventMapper);

/* harmony default export */ __webpack_exports__["default"] = (function(modeObject) {
  const modeObjectKeys = Object.keys(modeObject);

  return function(ctx, startOpts = {}) {
    let state = {};

    const mode = modeObjectKeys.reduce((m, k) => {
      m[k] = modeObject[k];
      return m;
    }, new _mode_interface__WEBPACK_IMPORTED_MODULE_0__["default"](ctx));

    function wrapper(eh) {
      return function(e) {
        mode[eh](state, e);
      };
    }

    return {
      start() {
        state = mode.onSetup(startOpts); // this should set ui buttons

        // Adds event handlers for all event options
        // add sets the selector to false for all
        // handlers that are not present in the mode
        // to reduce on render calls for functions that
        // have no logic
        eventKeys.forEach((key) => {
          const modeHandler = eventMapper[key];
          let selector = () => false;
          if (modeObject[modeHandler]) {
            selector = () => true;
          }
          this.on(key, selector, wrapper(modeHandler));
        });

      },
      stop() {
        mode.onStop(state);
      },
      trash() {
        mode.onTrash(state);
      },
      combineFeatures() {
        mode.onCombineFeatures(state);
      },
      uncombineFeatures() {
        mode.onUncombineFeatures(state);
      },
      render(geojson, push) {
        mode.toDisplayFeatures(state, geojson, push);
      }
    };
  };
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/simple_select.js":
/*!************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/modes/simple_select.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common_selectors */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/common_selectors.js");
/* harmony import */ var _lib_mouse_event_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/mouse_event_point */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/mouse_event_point.js");
/* harmony import */ var _lib_create_supplementary_points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/create_supplementary_points */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/create_supplementary_points.js");
/* harmony import */ var _lib_string_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/string_set */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_set.js");
/* harmony import */ var _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/double_click_zoom */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/double_click_zoom.js");
/* harmony import */ var _lib_move_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/move_features */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/move_features.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");








const SimpleSelect = {};

SimpleSelect.onSetup = function(opts) {
  // turn the opts into state.
  const state = {
    dragMoveLocation: null,
    boxSelectStartLocation: null,
    boxSelectElement: undefined,
    boxSelecting: false,
    canBoxSelect: false,
    dragMoving: false,
    canDragMove: false,
    initiallySelectedFeatureIds: opts.featureIds || []
  };

  this.setSelected(state.initiallySelectedFeatureIds.filter(id => this.getFeature(id) !== undefined));
  this.fireActionable();

  this.setActionableState({
    combineFeatures: true,
    uncombineFeatures: true,
    trash: true
  });

  return state;
};

SimpleSelect.fireUpdate = function() {
  this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_6__["events"].UPDATE, {
    action: _constants__WEBPACK_IMPORTED_MODULE_6__["updateActions"].MOVE,
    features: this.getSelected().map(f => f.toGeoJSON())
  });
};

SimpleSelect.fireActionable = function() {
  const selectedFeatures = this.getSelected();

  const multiFeatures = selectedFeatures.filter(
    feature => this.isInstanceOf('MultiFeature', feature)
  );

  let combineFeatures = false;

  if (selectedFeatures.length > 1) {
    combineFeatures = true;
    const featureType = selectedFeatures[0].type.replace('Multi', '');
    selectedFeatures.forEach((feature) => {
      if (feature.type.replace('Multi', '') !== featureType) {
        combineFeatures = false;
      }
    });
  }

  const uncombineFeatures = multiFeatures.length > 0;
  const trash = selectedFeatures.length > 0;

  this.setActionableState({
    combineFeatures, uncombineFeatures, trash
  });
};

SimpleSelect.getUniqueIds = function(allFeatures) {
  if (!allFeatures.length) return [];
  const ids = allFeatures.map(s => s.properties.id)
    .filter(id => id !== undefined)
    .reduce((memo, id) => {
      memo.add(id);
      return memo;
    }, new _lib_string_set__WEBPACK_IMPORTED_MODULE_3__["default"]());

  return ids.values();
};

SimpleSelect.stopExtendedInteractions = function(state) {
  if (state.boxSelectElement) {
    if (state.boxSelectElement.parentNode) state.boxSelectElement.parentNode.removeChild(state.boxSelectElement);
    state.boxSelectElement = null;
  }

  this.map.dragPan.enable();

  state.boxSelecting = false;
  state.canBoxSelect = false;
  state.dragMoving = false;
  state.canDragMove = false;
};

SimpleSelect.onStop = function() {
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_4__["default"].enable(this);
};

SimpleSelect.onMouseMove = function(state) {
  // On mousemove that is not a drag, stop extended interactions.
  // This is useful if you drag off the canvas, release the button,
  // then move the mouse back over the canvas --- we don't allow the
  // interaction to continue then, but we do let it continue if you held
  // the mouse button that whole time
  return this.stopExtendedInteractions(state);
};

SimpleSelect.onMouseOut = function(state) {
  // As soon as you mouse leaves the canvas, update the feature
  if (state.dragMoving) return this.fireUpdate();
};

SimpleSelect.onTap = SimpleSelect.onClick = function(state, e) {
  // Click (with or without shift) on no feature
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["noTarget"](e)) return this.clickAnywhere(state, e); // also tap
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isOfMetaType"](_constants__WEBPACK_IMPORTED_MODULE_6__["meta"].VERTEX)(e)) return this.clickOnVertex(state, e); //tap
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isFeature"](e)) return this.clickOnFeature(state, e);
};

SimpleSelect.clickAnywhere = function (state) {
  // Clear the re-render selection
  const wasSelected = this.getSelectedIds();
  if (wasSelected.length) {
    this.clearSelectedFeatures();
    wasSelected.forEach(id => this.doRender(id));
  }
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_4__["default"].enable(this);
  this.stopExtendedInteractions(state);
};

SimpleSelect.clickOnVertex = function(state, e) {
  // Enter direct select mode
  this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_6__["modes"].DIRECT_SELECT, {
    featureId: e.featureTarget.properties.parent,
    coordPath: e.featureTarget.properties.coord_path,
    startPos: e.lngLat
  });
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_6__["cursors"].MOVE });
};

SimpleSelect.startOnActiveFeature = function(state, e) {
  // Stop any already-underway extended interactions
  this.stopExtendedInteractions(state);

  // Disable map.dragPan immediately so it can't start
  this.map.dragPan.disable();

  // Re-render it and enable drag move
  this.doRender(e.featureTarget.properties.id);

  // Set up the state for drag moving
  state.canDragMove = true;
  state.dragMoveLocation = e.lngLat;
};

SimpleSelect.clickOnFeature = function(state, e) {
  // Stop everything
  _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_4__["default"].disable(this);
  this.stopExtendedInteractions(state);

  const isShiftClick = _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isShiftDown"](e);
  const selectedFeatureIds = this.getSelectedIds();
  const featureId = e.featureTarget.properties.id;
  const isFeatureSelected = this.isSelected(featureId);

  // Click (without shift) on any selected feature but a point
  if (!isShiftClick && isFeatureSelected && this.getFeature(featureId).type !== _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].POINT) {
    // Enter direct select mode
    return this.changeMode(_constants__WEBPACK_IMPORTED_MODULE_6__["modes"].DIRECT_SELECT, {
      featureId
    });
  }

  // Shift-click on a selected feature
  if (isFeatureSelected && isShiftClick) {
    // Deselect it
    this.deselect(featureId);
    this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_6__["cursors"].POINTER });
    if (selectedFeatureIds.length === 1) {
      _lib_double_click_zoom__WEBPACK_IMPORTED_MODULE_4__["default"].enable(this);
    }
  // Shift-click on an unselected feature
  } else if (!isFeatureSelected && isShiftClick) {
    // Add it to the selection
    this.select(featureId);
    this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_6__["cursors"].MOVE });
  // Click (without shift) on an unselected feature
  } else if (!isFeatureSelected && !isShiftClick) {
    // Make it the only selected feature
    selectedFeatureIds.forEach(id => this.doRender(id));
    this.setSelected(featureId);
    this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_6__["cursors"].MOVE });
  }

  // No matter what, re-render the clicked feature
  this.doRender(featureId);
};

SimpleSelect.onMouseDown = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isActiveFeature"](e)) return this.startOnActiveFeature(state, e);
  if (this.drawConfig.boxSelect && _lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isShiftMousedown"](e)) return this.startBoxSelect(state, e);
};

SimpleSelect.startBoxSelect = function(state, e) {
  this.stopExtendedInteractions(state);
  this.map.dragPan.disable();
  // Enable box select
  state.boxSelectStartLocation = Object(_lib_mouse_event_point__WEBPACK_IMPORTED_MODULE_1__["default"])(e.originalEvent, this.map.getContainer());
  state.canBoxSelect = true;
};

SimpleSelect.onTouchStart = function(state, e) {
  if (_lib_common_selectors__WEBPACK_IMPORTED_MODULE_0__["isActiveFeature"](e)) return this.startOnActiveFeature(state, e);
};

SimpleSelect.onDrag = function(state, e) {
  if (state.canDragMove) return this.dragMove(state, e);
  if (this.drawConfig.boxSelect && state.canBoxSelect) return this.whileBoxSelect(state, e);
};

SimpleSelect.whileBoxSelect = function(state, e) {
  state.boxSelecting = true;
  this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_6__["cursors"].ADD });

  // Create the box node if it doesn't exist
  if (!state.boxSelectElement) {
    state.boxSelectElement = document.createElement('div');
    state.boxSelectElement.classList.add(_constants__WEBPACK_IMPORTED_MODULE_6__["classes"].BOX_SELECT);
    this.map.getContainer().appendChild(state.boxSelectElement);
  }

  // Adjust the box node's width and xy position
  const current = Object(_lib_mouse_event_point__WEBPACK_IMPORTED_MODULE_1__["default"])(e.originalEvent, this.map.getContainer());
  const minX = Math.min(state.boxSelectStartLocation.x, current.x);
  const maxX = Math.max(state.boxSelectStartLocation.x, current.x);
  const minY = Math.min(state.boxSelectStartLocation.y, current.y);
  const maxY = Math.max(state.boxSelectStartLocation.y, current.y);
  const translateValue = `translate(${minX}px, ${minY}px)`;
  state.boxSelectElement.style.transform = translateValue;
  state.boxSelectElement.style.WebkitTransform = translateValue;
  state.boxSelectElement.style.width = `${maxX - minX}px`;
  state.boxSelectElement.style.height = `${maxY - minY}px`;
};

SimpleSelect.dragMove = function(state, e) {
  // Dragging when drag move is enabled
  state.dragMoving = true;
  e.originalEvent.stopPropagation();

  const delta = {
    lng: e.lngLat.lng - state.dragMoveLocation.lng,
    lat: e.lngLat.lat - state.dragMoveLocation.lat
  };

  Object(_lib_move_features__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getSelected(), delta);

  state.dragMoveLocation = e.lngLat;
};

SimpleSelect.onMouseUp = function(state, e) {
  // End any extended interactions
  if (state.dragMoving) {
    this.fireUpdate();
  } else if (state.boxSelecting) {
    const bbox = [
      state.boxSelectStartLocation,
      Object(_lib_mouse_event_point__WEBPACK_IMPORTED_MODULE_1__["default"])(e.originalEvent, this.map.getContainer())
    ];
    const featuresInBox = this.featuresAt(null, bbox, 'click');
    const idsToSelect = this.getUniqueIds(featuresInBox)
      .filter(id => !this.isSelected(id));

    if (idsToSelect.length) {
      this.select(idsToSelect);
      idsToSelect.forEach(id => this.doRender(id));
      this.updateUIClasses({ mouse: _constants__WEBPACK_IMPORTED_MODULE_6__["cursors"].MOVE });
    }
  }
  this.stopExtendedInteractions(state);
};

SimpleSelect.toDisplayFeatures = function(state, geojson, display) {
  geojson.properties.active = (this.isSelected(geojson.properties.id)) ?
    _constants__WEBPACK_IMPORTED_MODULE_6__["activeStates"].ACTIVE : _constants__WEBPACK_IMPORTED_MODULE_6__["activeStates"].INACTIVE;
  display(geojson);
  this.fireActionable();
  if (geojson.properties.active !== _constants__WEBPACK_IMPORTED_MODULE_6__["activeStates"].ACTIVE ||
    geojson.geometry.type === _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].POINT) return;
  Object(_lib_create_supplementary_points__WEBPACK_IMPORTED_MODULE_2__["default"])(geojson).forEach(display);
};

SimpleSelect.onTrash = function() {
  this.deleteFeature(this.getSelectedIds());
  this.fireActionable();
};

SimpleSelect.onCombineFeatures = function() {
  const selectedFeatures = this.getSelected();

  if (selectedFeatures.length === 0 || selectedFeatures.length < 2) return;

  const coordinates = [], featuresCombined = [];
  const featureType = selectedFeatures[0].type.replace('Multi', '');

  for (let i = 0; i < selectedFeatures.length; i++) {
    const feature = selectedFeatures[i];

    if (feature.type.replace('Multi', '') !== featureType) {
      return;
    }
    if (feature.type.includes('Multi')) {
      feature.getCoordinates().forEach((subcoords) => {
        coordinates.push(subcoords);
      });
    } else {
      coordinates.push(feature.getCoordinates());
    }

    featuresCombined.push(feature.toGeoJSON());
  }

  if (featuresCombined.length > 1) {
    const multiFeature = this.newFeature({
      type: _constants__WEBPACK_IMPORTED_MODULE_6__["geojsonTypes"].FEATURE,
      properties: featuresCombined[0].properties,
      geometry: {
        type: `Multi${featureType}`,
        coordinates
      }
    });

    this.addFeature(multiFeature);
    this.deleteFeature(this.getSelectedIds(), { silent: true });
    this.setSelected([multiFeature.id]);

    this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_6__["events"].COMBINE_FEATURES, {
      createdFeatures: [multiFeature.toGeoJSON()],
      deletedFeatures: featuresCombined
    });
  }
  this.fireActionable();
};

SimpleSelect.onUncombineFeatures = function() {
  const selectedFeatures = this.getSelected();
  if (selectedFeatures.length === 0) return;

  const createdFeatures = [];
  const featuresUncombined = [];

  for (let i = 0; i < selectedFeatures.length; i++) {
    const feature = selectedFeatures[i];

    if (this.isInstanceOf('MultiFeature', feature)) {
      feature.getFeatures().forEach((subFeature) => {
        this.addFeature(subFeature);
        subFeature.properties = feature.properties;
        createdFeatures.push(subFeature.toGeoJSON());
        this.select([subFeature.id]);
      });
      this.deleteFeature(feature.id, { silent: true });
      featuresUncombined.push(feature.toGeoJSON());
    }
  }

  if (createdFeatures.length > 1) {
    this.map.fire(_constants__WEBPACK_IMPORTED_MODULE_6__["events"].UNCOMBINE_FEATURES, {
      createdFeatures,
      deletedFeatures: featuresUncombined
    });
  }
  this.fireActionable();
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleSelect);


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/options.js":
/*!************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/options.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xtend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/theme */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/theme.js");
/* harmony import */ var _modes_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modes/index */ "./node_modules/@mapbox/mapbox-gl-draw/src/modes/index.js");






const defaultOptions = {
  defaultMode: _constants__WEBPACK_IMPORTED_MODULE_1__["modes"].SIMPLE_SELECT,
  keybindings: true,
  touchEnabled: true,
  clickBuffer: 2,
  touchBuffer: 25,
  boxSelect: true,
  displayControlsDefault: true,
  styles: _lib_theme__WEBPACK_IMPORTED_MODULE_2__["default"],
  modes: _modes_index__WEBPACK_IMPORTED_MODULE_3__["default"],
  controls: {},
  userProperties: false
};

const showControls = {
  point: true,
  line_string: true,
  polygon: true,
  trash: true,
  combine_features: true,
  uncombine_features: true
};

const hideControls = {
  point: false,
  line_string: false,
  polygon: false,
  trash: false,
  combine_features: false,
  uncombine_features: false
};

function addSources(styles, sourceBucket) {
  return styles.map((style) => {
    if (style.source) return style;
    return xtend__WEBPACK_IMPORTED_MODULE_0___default()(style, {
      id: `${style.id}.${sourceBucket}`,
      source: (sourceBucket === 'hot') ? _constants__WEBPACK_IMPORTED_MODULE_1__["sources"].HOT : _constants__WEBPACK_IMPORTED_MODULE_1__["sources"].COLD
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function(options = {}) {
  let withDefaults = xtend__WEBPACK_IMPORTED_MODULE_0___default()(options);

  if (!options.controls) {
    withDefaults.controls = {};
  }

  if (options.displayControlsDefault === false) {
    withDefaults.controls = xtend__WEBPACK_IMPORTED_MODULE_0___default()(hideControls, options.controls);
  } else {
    withDefaults.controls = xtend__WEBPACK_IMPORTED_MODULE_0___default()(showControls, options.controls);
  }

  withDefaults = xtend__WEBPACK_IMPORTED_MODULE_0___default()(defaultOptions, withDefaults);

  // Layers with a shared source should be adjacent for performance reasons
  withDefaults.styles = addSources(withDefaults.styles, 'cold').concat(addSources(withDefaults.styles, 'hot'));

  return withDefaults;
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/render.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/render.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");


function render() {
  // eslint-disable-next-line no-invalid-this
  const store = this;
  const mapExists = store.ctx.map && store.ctx.map.getSource(_constants__WEBPACK_IMPORTED_MODULE_0__["sources"].HOT) !== undefined;
  if (!mapExists) return cleanup();

  const mode = store.ctx.events.currentModeName();

  store.ctx.ui.queueMapClasses({ mode });

  let newHotIds = [];
  let newColdIds = [];

  if (store.isDirty) {
    newColdIds = store.getAllIds();
  } else {
    newHotIds = store.getChangedIds().filter(id => store.get(id) !== undefined);
    newColdIds = store.sources.hot.filter(geojson => geojson.properties.id && newHotIds.indexOf(geojson.properties.id) === -1 && store.get(geojson.properties.id) !== undefined).map(geojson => geojson.properties.id);
  }

  store.sources.hot = [];
  const lastColdCount = store.sources.cold.length;
  store.sources.cold = store.isDirty ? [] : store.sources.cold.filter((geojson) => {
    const id = geojson.properties.id || geojson.properties.parent;
    return newHotIds.indexOf(id) === -1;
  });

  const coldChanged = lastColdCount !== store.sources.cold.length || newColdIds.length > 0;
  newHotIds.forEach(id => renderFeature(id, 'hot'));
  newColdIds.forEach(id => renderFeature(id, 'cold'));

  function renderFeature(id, source) {
    const feature = store.get(id);
    const featureInternal = feature.internal(mode);
    store.ctx.events.currentModeRender(featureInternal, (geojson) => {
      store.sources[source].push(geojson);
    });
  }

  if (coldChanged) {
    store.ctx.map.getSource(_constants__WEBPACK_IMPORTED_MODULE_0__["sources"].COLD).setData({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].FEATURE_COLLECTION,
      features: store.sources.cold
    });
  }

  store.ctx.map.getSource(_constants__WEBPACK_IMPORTED_MODULE_0__["sources"].HOT).setData({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].FEATURE_COLLECTION,
    features: store.sources.hot
  });

  if (store._emitSelectionChange) {
    store.ctx.map.fire(_constants__WEBPACK_IMPORTED_MODULE_0__["events"].SELECTION_CHANGE, {
      features: store.getSelected().map(feature => feature.toGeoJSON()),
      points: store.getSelectedCoordinates().map(coordinate => ({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].FEATURE,
        properties: {},
        geometry: {
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["geojsonTypes"].POINT,
          coordinates: coordinate.coordinates
        }
      }))
    });
    store._emitSelectionChange = false;
  }

  if (store._deletedFeaturesToEmit.length) {
    const geojsonToEmit = store._deletedFeaturesToEmit.map(feature => feature.toGeoJSON());

    store._deletedFeaturesToEmit = [];

    store.ctx.map.fire(_constants__WEBPACK_IMPORTED_MODULE_0__["events"].DELETE, {
      features: geojsonToEmit
    });
  }

  cleanup();
  store.ctx.map.fire(_constants__WEBPACK_IMPORTED_MODULE_0__["events"].RENDER, {});

  function cleanup() {
    store.isDirty = false;
    store.clearChangedIds();
  }
}


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/setup.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/setup.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./node_modules/@mapbox/mapbox-gl-draw/src/events.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@mapbox/mapbox-gl-draw/src/store.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./node_modules/@mapbox/mapbox-gl-draw/src/ui.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xtend__WEBPACK_IMPORTED_MODULE_4__);






/* harmony default export */ __webpack_exports__["default"] = (function(ctx) {

  let controlContainer = null;
  let mapLoadedInterval = null;

  const setup = {
    onRemove() {
      // Stop connect attempt in the event that control is removed before map is loaded
      ctx.map.off('load', setup.connect);
      clearInterval(mapLoadedInterval);

      setup.removeLayers();
      ctx.store.restoreMapConfig();
      ctx.ui.removeButtons();
      ctx.events.removeEventListeners();
      ctx.ui.clearMapClasses();
      ctx.map = null;
      ctx.container = null;
      ctx.store = null;

      if (controlContainer && controlContainer.parentNode) controlContainer.parentNode.removeChild(controlContainer);
      controlContainer = null;

      return this;
    },
    connect() {
      ctx.map.off('load', setup.connect);
      clearInterval(mapLoadedInterval);
      setup.addLayers();
      ctx.store.storeMapConfig();
      ctx.events.addEventListeners();
    },
    onAdd(map) {
      if (true) {
        // Monkey patch to resolve breaking change to `fire` introduced by
        // mapbox-gl-js. See mapbox/mapbox-gl-draw/issues/766.
        const _fire = map.fire;
        map.fire = function(type, event) {
          // eslint-disable-next-line
          let args = arguments;

          if (_fire.length === 1 && arguments.length !== 1) {
            args = [xtend__WEBPACK_IMPORTED_MODULE_4___default()({}, { type }, event)];
          }

          return _fire.apply(map, args);
        };
      }

      ctx.map = map;
      ctx.events = Object(_events__WEBPACK_IMPORTED_MODULE_0__["default"])(ctx);
      ctx.ui = Object(_ui__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx);
      ctx.container = map.getContainer();
      ctx.store = new _store__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);


      controlContainer = ctx.ui.addButtons();

      if (ctx.options.boxSelect) {
        map.boxZoom.disable();
        // Need to toggle dragPan on and off or else first
        // dragPan disable attempt in simple_select doesn't work
        map.dragPan.disable();
        map.dragPan.enable();
      }

      if (map.loaded()) {
        setup.connect();
      } else {
        map.on('load', setup.connect);
        mapLoadedInterval = setInterval(() => { if (map.loaded()) setup.connect(); }, 16);
      }

      ctx.events.start();
      return controlContainer;
    },
    addLayers() {
      // drawn features style
      ctx.map.addSource(_constants__WEBPACK_IMPORTED_MODULE_3__["sources"].COLD, {
        data: {
          type: _constants__WEBPACK_IMPORTED_MODULE_3__["geojsonTypes"].FEATURE_COLLECTION,
          features: []
        },
        type: 'geojson'
      });

      // hot features style
      ctx.map.addSource(_constants__WEBPACK_IMPORTED_MODULE_3__["sources"].HOT, {
        data: {
          type: _constants__WEBPACK_IMPORTED_MODULE_3__["geojsonTypes"].FEATURE_COLLECTION,
          features: []
        },
        type: 'geojson'
      });

      ctx.options.styles.forEach((style) => {
        ctx.map.addLayer(style);
      });

      ctx.store.setDirty(true);
      ctx.store.render();
    },
    // Check for layers and sources before attempting to remove
    // If user adds draw control and removes it before the map is loaded, layers and sources will be missing
    removeLayers() {
      ctx.options.styles.forEach((style) => {
        if (ctx.map.getLayer(style.id)) {
          ctx.map.removeLayer(style.id);
        }
      });

      if (ctx.map.getSource(_constants__WEBPACK_IMPORTED_MODULE_3__["sources"].COLD)) {
        ctx.map.removeSource(_constants__WEBPACK_IMPORTED_MODULE_3__["sources"].COLD);
      }

      if (ctx.map.getSource(_constants__WEBPACK_IMPORTED_MODULE_3__["sources"].HOT)) {
        ctx.map.removeSource(_constants__WEBPACK_IMPORTED_MODULE_3__["sources"].HOT);
      }
    }
  };

  ctx.setup = setup;

  return setup;
});


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/store.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/store.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var _lib_to_dense_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/to_dense_array */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/to_dense_array.js");
/* harmony import */ var _lib_string_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/string_set */ "./node_modules/@mapbox/mapbox-gl-draw/src/lib/string_set.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./node_modules/@mapbox/mapbox-gl-draw/src/render.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");





function Store(ctx) {
  this._features = {};
  this._featureIds = new _lib_string_set__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this._selectedFeatureIds = new _lib_string_set__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this._selectedCoordinates = [];
  this._changedFeatureIds = new _lib_string_set__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this._deletedFeaturesToEmit = [];
  this._emitSelectionChange = false;
  this._mapInitialConfig = {};
  this.ctx = ctx;
  this.sources = {
    hot: [],
    cold: []
  };

  // Deduplicate requests to render and tie them to animation frames.
  let renderRequest;
  this.render = () => {
    if (!renderRequest) {
      renderRequest = requestAnimationFrame(() => {
        renderRequest = null;
        _render__WEBPACK_IMPORTED_MODULE_2__["default"].call(this);
      });
    }
  };
  this.isDirty = false;
}


/**
 * Delays all rendering until the returned function is invoked
 * @return {Function} renderBatch
 */
Store.prototype.createRenderBatch = function() {
  const holdRender = this.render;
  let numRenders = 0;
  this.render = function() {
    numRenders++;
  };

  return () => {
    this.render = holdRender;
    if (numRenders > 0) {
      this.render();
    }
  };
};

/**
 * Sets the store's state to dirty.
 * @return {Store} this
 */
Store.prototype.setDirty = function() {
  this.isDirty = true;
  return this;
};

/**
 * Sets a feature's state to changed.
 * @param {string} featureId
 * @return {Store} this
 */
Store.prototype.featureChanged = function(featureId) {
  this._changedFeatureIds.add(featureId);
  return this;
};

/**
 * Gets the ids of all features currently in changed state.
 * @return {Store} this
 */
Store.prototype.getChangedIds = function() {
  return this._changedFeatureIds.values();
};

/**
 * Sets all features to unchanged state.
 * @return {Store} this
 */
Store.prototype.clearChangedIds = function() {
  this._changedFeatureIds.clear();
  return this;
};

/**
 * Gets the ids of all features in the store.
 * @return {Store} this
 */
Store.prototype.getAllIds = function() {
  return this._featureIds.values();
};

/**
 * Adds a feature to the store.
 * @param {Object} feature
 *
 * @return {Store} this
 */
Store.prototype.add = function(feature) {
  this.featureChanged(feature.id);
  this._features[feature.id] = feature;
  this._featureIds.add(feature.id);
  return this;
};

/**
 * Deletes a feature or array of features from the store.
 * Cleans up after the deletion by deselecting the features.
 * If changes were made, sets the state to the dirty
 * and fires an event.
 * @param {string | Array<string>} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */
Store.prototype.delete = function(featureIds, options = {}) {
  Object(_lib_to_dense_array__WEBPACK_IMPORTED_MODULE_0__["default"])(featureIds).forEach((id) => {
    if (!this._featureIds.has(id)) return;
    this._featureIds.delete(id);
    this._selectedFeatureIds.delete(id);
    if (!options.silent) {
      if (this._deletedFeaturesToEmit.indexOf(this._features[id]) === -1) {
        this._deletedFeaturesToEmit.push(this._features[id]);
      }
    }
    delete this._features[id];
    this.isDirty = true;
  });
  refreshSelectedCoordinates(this, options);
  return this;
};

/**
 * Returns a feature in the store matching the specified value.
 * @return {Object | undefined} feature
 */
Store.prototype.get = function(id) {
  return this._features[id];
};

/**
 * Returns all features in the store.
 * @return {Array<Object>}
 */
Store.prototype.getAll = function() {
  return Object.keys(this._features).map(id => this._features[id]);
};

/**
 * Adds features to the current selection.
 * @param {string | Array<string>} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */
Store.prototype.select = function(featureIds, options = {}) {
  Object(_lib_to_dense_array__WEBPACK_IMPORTED_MODULE_0__["default"])(featureIds).forEach((id) => {
    if (this._selectedFeatureIds.has(id)) return;
    this._selectedFeatureIds.add(id);
    this._changedFeatureIds.add(id);
    if (!options.silent) {
      this._emitSelectionChange = true;
    }
  });
  return this;
};

/**
 * Deletes features from the current selection.
 * @param {string | Array<string>} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */
Store.prototype.deselect = function(featureIds, options = {}) {
  Object(_lib_to_dense_array__WEBPACK_IMPORTED_MODULE_0__["default"])(featureIds).forEach((id) => {
    if (!this._selectedFeatureIds.has(id)) return;
    this._selectedFeatureIds.delete(id);
    this._changedFeatureIds.add(id);
    if (!options.silent) {
      this._emitSelectionChange = true;
    }
  });
  refreshSelectedCoordinates(this, options);
  return this;
};

/**
 * Clears the current selection.
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */
Store.prototype.clearSelected = function(options = {}) {
  this.deselect(this._selectedFeatureIds.values(), { silent: options.silent });
  return this;
};

/**
 * Sets the store's selection, clearing any prior values.
 * If no feature ids are passed, the store is just cleared.
 * @param {string | Array<string> | undefined} featureIds
 * @param {Object} [options]
 * @param {Object} [options.silent] - If `true`, this invocation will not fire an event.
 * @return {Store} this
 */
Store.prototype.setSelected = function(featureIds, options = {}) {
  featureIds = Object(_lib_to_dense_array__WEBPACK_IMPORTED_MODULE_0__["default"])(featureIds);

  // Deselect any features not in the new selection
  this.deselect(this._selectedFeatureIds.values().filter(id => featureIds.indexOf(id) === -1), { silent: options.silent });

  // Select any features in the new selection that were not already selected
  this.select(featureIds.filter(id => !this._selectedFeatureIds.has(id)), { silent: options.silent });

  return this;
};

/**
 * Sets the store's coordinates selection, clearing any prior values.
 * @param {Array<Array<string>>} coordinates
 * @return {Store} this
 */
Store.prototype.setSelectedCoordinates = function(coordinates) {
  this._selectedCoordinates = coordinates;
  this._emitSelectionChange = true;
  return this;
};

/**
 * Clears the current coordinates selection.
 * @param {Object} [options]
 * @return {Store} this
 */
Store.prototype.clearSelectedCoordinates = function() {
  this._selectedCoordinates = [];
  this._emitSelectionChange = true;
  return this;
};

/**
 * Returns the ids of features in the current selection.
 * @return {Array<string>} Selected feature ids.
 */
Store.prototype.getSelectedIds = function() {
  return this._selectedFeatureIds.values();
};

/**
 * Returns features in the current selection.
 * @return {Array<Object>} Selected features.
 */
Store.prototype.getSelected = function() {
  return this._selectedFeatureIds.values().map(id => this.get(id));
};

/**
 * Returns selected coordinates in the currently selected feature.
 * @return {Array<Object>} Selected coordinates.
 */
Store.prototype.getSelectedCoordinates = function() {
  const selected = this._selectedCoordinates.map((coordinate) => {
    const feature = this.get(coordinate.feature_id);
    return {
      coordinates: feature.getCoordinate(coordinate.coord_path)
    };
  });
  return selected;
};

/**
 * Indicates whether a feature is selected.
 * @param {string} featureId
 * @return {boolean} `true` if the feature is selected, `false` if not.
 */
Store.prototype.isSelected = function(featureId) {
  return this._selectedFeatureIds.has(featureId);
};

/**
 * Sets a property on the given feature
 * @param {string} featureId
 * @param {string} property property
 * @param {string} property value
*/
Store.prototype.setFeatureProperty = function(featureId, property, value) {
  this.get(featureId).setProperty(property, value);
  this.featureChanged(featureId);
};

function refreshSelectedCoordinates(store, options) {
  const newSelectedCoordinates = store._selectedCoordinates.filter(point => store._selectedFeatureIds.has(point.feature_id));
  if (store._selectedCoordinates.length !== newSelectedCoordinates.length && !options.silent) {
    store._emitSelectionChange = true;
  }
  store._selectedCoordinates = newSelectedCoordinates;
}

/**
 * Stores the initial config for a map, so that we can set it again after we're done.
*/
Store.prototype.storeMapConfig = function() {
  _constants__WEBPACK_IMPORTED_MODULE_3__["interactions"].forEach((interaction) => {
    const interactionSet = this.ctx.map[interaction];
    if (interactionSet) {
      this._mapInitialConfig[interaction] = this.ctx.map[interaction].isEnabled();
    }
  });
};

/**
 * Restores the initial config for a map, ensuring all is well.
*/
Store.prototype.restoreMapConfig = function() {
  Object.keys(this._mapInitialConfig).forEach((key) => {
    const value = this._mapInitialConfig[key];
    if (value) {
      this.ctx.map[key].enable();
    } else {
      this.ctx.map[key].disable();
    }
  });
};

/**
 * Returns the initial state of an interaction setting.
 * @param {string} interaction
 * @return {boolean} `true` if the interaction is enabled, `false` if not.
 * Defaults to `true`. (Todo: include defaults.)
*/
Store.prototype.getInitialConfigValue = function(interaction) {
  if (this._mapInitialConfig[interaction] !== undefined) {
    return this._mapInitialConfig[interaction];
  } else {
    // This needs to be set to whatever the default is for that interaction
    // It seems to be true for all cases currently, so let's send back `true`.
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-draw/src/ui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/src/ui.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
/* harmony import */ var xtend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xtend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@mapbox/mapbox-gl-draw/src/constants.js");



const classTypes = ['mode', 'feature', 'mouse'];

/* harmony default export */ __webpack_exports__["default"] = (function(ctx) {


  const buttonElements = {};
  let activeButton = null;

  let currentMapClasses = {
    mode: null, // e.g. mode-direct_select
    feature: null, // e.g. feature-vertex
    mouse: null // e.g. mouse-move
  };

  let nextMapClasses = {
    mode: null,
    feature: null,
    mouse: null
  };

  function clearMapClasses() {
    queueMapClasses({mode:null, feature:null, mouse:null});
    updateMapClasses();
  }

  function queueMapClasses(options) {
    nextMapClasses = xtend__WEBPACK_IMPORTED_MODULE_0___default()(nextMapClasses, options);
  }

  function updateMapClasses() {
    if (!ctx.container) return;

    const classesToRemove = [];
    const classesToAdd = [];

    classTypes.forEach((type) => {
      if (nextMapClasses[type] === currentMapClasses[type]) return;

      classesToRemove.push(`${type}-${currentMapClasses[type]}`);
      if (nextMapClasses[type] !== null) {
        classesToAdd.push(`${type}-${nextMapClasses[type]}`);
      }
    });

    if (classesToRemove.length > 0) {
      ctx.container.classList.remove(...classesToRemove);
    }

    if (classesToAdd.length > 0) {
      ctx.container.classList.add(...classesToAdd);
    }

    currentMapClasses = xtend__WEBPACK_IMPORTED_MODULE_0___default()(currentMapClasses, nextMapClasses);
  }

  function createControlButton(id, options = {}) {
    const button = document.createElement('button');
    button.className = `${_constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON} ${options.className}`;
    button.setAttribute('title', options.title);
    options.container.appendChild(button);

    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const clickedButton = e.target;
      if (clickedButton === activeButton) {
        deactivateButtons();
        options.onDeactivate();
        return;
      }

      setActiveButton(id);
      options.onActivate();
    }, true);

    return button;
  }

  function deactivateButtons() {
    if (!activeButton) return;
    activeButton.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_1__["classes"].ACTIVE_BUTTON);
    activeButton = null;
  }

  function setActiveButton(id) {
    deactivateButtons();

    const button = buttonElements[id];
    if (!button) return;

    if (button && id !== 'trash') {
      button.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__["classes"].ACTIVE_BUTTON);
      activeButton = button;
    }
  }

  function addButtons() {
    const controls = ctx.options.controls;
    const controlGroup = document.createElement('div');
    controlGroup.className = `${_constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_GROUP} ${_constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BASE}`;

    if (!controls) return controlGroup;

    if (controls[_constants__WEBPACK_IMPORTED_MODULE_1__["types"].LINE]) {
      buttonElements[_constants__WEBPACK_IMPORTED_MODULE_1__["types"].LINE] = createControlButton(_constants__WEBPACK_IMPORTED_MODULE_1__["types"].LINE, {
        container: controlGroup,
        className: _constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON_LINE,
        title: `LineString tool ${ctx.options.keybindings ? '(l)' : ''}`,
        onActivate: () => ctx.events.changeMode(_constants__WEBPACK_IMPORTED_MODULE_1__["modes"].DRAW_LINE_STRING),
        onDeactivate: () => ctx.events.trash()
      });
    }

    if (controls[_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POLYGON]) {
      buttonElements[_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POLYGON] = createControlButton(_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POLYGON, {
        container: controlGroup,
        className: _constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON_POLYGON,
        title: `Polygon tool ${ctx.options.keybindings ? '(p)' : ''}`,
        onActivate: () => ctx.events.changeMode(_constants__WEBPACK_IMPORTED_MODULE_1__["modes"].DRAW_POLYGON),
        onDeactivate: () => ctx.events.trash()
      });
    }

    if (controls[_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POINT]) {
      buttonElements[_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POINT] = createControlButton(_constants__WEBPACK_IMPORTED_MODULE_1__["types"].POINT, {
        container: controlGroup,
        className: _constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON_POINT,
        title: `Marker tool ${ctx.options.keybindings ? '(m)' : ''}`,
        onActivate: () => ctx.events.changeMode(_constants__WEBPACK_IMPORTED_MODULE_1__["modes"].DRAW_POINT),
        onDeactivate: () => ctx.events.trash()
      });
    }

    if (controls.trash) {
      buttonElements.trash = createControlButton('trash', {
        container: controlGroup,
        className: _constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON_TRASH,
        title: 'Delete',
        onActivate: () => {
          ctx.events.trash();
        }
      });
    }

    if (controls.combine_features) {
      buttonElements.combine_features = createControlButton('combineFeatures', {
        container: controlGroup,
        className: _constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON_COMBINE_FEATURES,
        title: 'Combine',
        onActivate: () => {
          ctx.events.combineFeatures();
        }
      });
    }

    if (controls.uncombine_features) {
      buttonElements.uncombine_features = createControlButton('uncombineFeatures', {
        container: controlGroup,
        className: _constants__WEBPACK_IMPORTED_MODULE_1__["classes"].CONTROL_BUTTON_UNCOMBINE_FEATURES,
        title: 'Uncombine',
        onActivate: () => {
          ctx.events.uncombineFeatures();
        }
      });
    }

    return controlGroup;
  }

  function removeButtons() {
    Object.keys(buttonElements).forEach((buttonId) => {
      const button = buttonElements[buttonId];
      if (button.parentNode) {
        button.parentNode.removeChild(button);
      }
      delete buttonElements[buttonId];
    });
  }

  return {
    setActiveButton,
    queueMapClasses,
    updateMapClasses,
    clearMapClasses,
    addButtons,
    removeButtons
  };
});


/***/ }),

/***/ "./node_modules/@mapbox/point-geometry/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/point-geometry/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\F26E\"}.fa-accessible-icon:before{content:\"\\F368\"}.fa-accusoft:before{content:\"\\F369\"}.fa-acquisitions-incorporated:before{content:\"\\F6AF\"}.fa-ad:before{content:\"\\F641\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-card:before{content:\"\\F2BB\"}.fa-adjust:before{content:\"\\F042\"}.fa-adn:before{content:\"\\F170\"}.fa-adversal:before{content:\"\\F36A\"}.fa-affiliatetheme:before{content:\"\\F36B\"}.fa-air-freshener:before{content:\"\\F5D0\"}.fa-airbnb:before{content:\"\\F834\"}.fa-algolia:before{content:\"\\F36C\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-justify:before{content:\"\\F039\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-right:before{content:\"\\F038\"}.fa-alipay:before{content:\"\\F642\"}.fa-allergies:before{content:\"\\F461\"}.fa-amazon:before{content:\"\\F270\"}.fa-amazon-pay:before{content:\"\\F42C\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-amilia:before{content:\"\\F36D\"}.fa-anchor:before{content:\"\\F13D\"}.fa-android:before{content:\"\\F17B\"}.fa-angellist:before{content:\"\\F209\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-down:before{content:\"\\F107\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angry:before{content:\"\\F556\"}.fa-angrycreative:before{content:\"\\F36E\"}.fa-angular:before{content:\"\\F420\"}.fa-ankh:before{content:\"\\F644\"}.fa-app-store:before{content:\"\\F36F\"}.fa-app-store-ios:before{content:\"\\F370\"}.fa-apper:before{content:\"\\F371\"}.fa-apple:before{content:\"\\F179\"}.fa-apple-alt:before{content:\"\\F5D1\"}.fa-apple-pay:before{content:\"\\F415\"}.fa-archive:before{content:\"\\F187\"}.fa-archway:before{content:\"\\F557\"}.fa-arrow-alt-circle-down:before{content:\"\\F358\"}.fa-arrow-alt-circle-left:before{content:\"\\F359\"}.fa-arrow-alt-circle-right:before{content:\"\\F35A\"}.fa-arrow-alt-circle-up:before{content:\"\\F35B\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-arrows-alt-h:before{content:\"\\F337\"}.fa-arrows-alt-v:before{content:\"\\F338\"}.fa-artstation:before{content:\"\\F77A\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asterisk:before{content:\"\\F069\"}.fa-asymmetrik:before{content:\"\\F372\"}.fa-at:before{content:\"\\F1FA\"}.fa-atlas:before{content:\"\\F558\"}.fa-atlassian:before{content:\"\\F77B\"}.fa-atom:before{content:\"\\F5D2\"}.fa-audible:before{content:\"\\F373\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-autoprefixer:before{content:\"\\F41C\"}.fa-avianex:before{content:\"\\F374\"}.fa-aviato:before{content:\"\\F421\"}.fa-award:before{content:\"\\F559\"}.fa-aws:before{content:\"\\F375\"}.fa-baby:before{content:\"\\F77C\"}.fa-baby-carriage:before{content:\"\\F77D\"}.fa-backspace:before{content:\"\\F55A\"}.fa-backward:before{content:\"\\F04A\"}.fa-bacon:before{content:\"\\F7E5\"}.fa-bacteria:before{content:\"\\E059\"}.fa-bacterium:before{content:\"\\E05A\"}.fa-bahai:before{content:\"\\F666\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-balance-scale-left:before{content:\"\\F515\"}.fa-balance-scale-right:before{content:\"\\F516\"}.fa-ban:before{content:\"\\F05E\"}.fa-band-aid:before{content:\"\\F462\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-barcode:before{content:\"\\F02A\"}.fa-bars:before{content:\"\\F0C9\"}.fa-baseball-ball:before{content:\"\\F433\"}.fa-basketball-ball:before{content:\"\\F434\"}.fa-bath:before{content:\"\\F2CD\"}.fa-battery-empty:before{content:\"\\F244\"}.fa-battery-full:before{content:\"\\F240\"}.fa-battery-half:before{content:\"\\F242\"}.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battle-net:before{content:\"\\F835\"}.fa-bed:before{content:\"\\F236\"}.fa-beer:before{content:\"\\F0FC\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-bell:before{content:\"\\F0F3\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bezier-curve:before{content:\"\\F55B\"}.fa-bible:before{content:\"\\F647\"}.fa-bicycle:before{content:\"\\F206\"}.fa-biking:before{content:\"\\F84A\"}.fa-bimobject:before{content:\"\\F378\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-biohazard:before{content:\"\\F780\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitcoin:before{content:\"\\F379\"}.fa-bity:before{content:\"\\F37A\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-blackberry:before{content:\"\\F37B\"}.fa-blender:before{content:\"\\F517\"}.fa-blender-phone:before{content:\"\\F6B6\"}.fa-blind:before{content:\"\\F29D\"}.fa-blog:before{content:\"\\F781\"}.fa-blogger:before{content:\"\\F37C\"}.fa-blogger-b:before{content:\"\\F37D\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-bold:before{content:\"\\F032\"}.fa-bolt:before{content:\"\\F0E7\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-bone:before{content:\"\\F5D7\"}.fa-bong:before{content:\"\\F55C\"}.fa-book:before{content:\"\\F02D\"}.fa-book-dead:before{content:\"\\F6B7\"}.fa-book-medical:before{content:\"\\F7E6\"}.fa-book-open:before{content:\"\\F518\"}.fa-book-reader:before{content:\"\\F5DA\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-bootstrap:before{content:\"\\F836\"}.fa-border-all:before{content:\"\\F84C\"}.fa-border-none:before{content:\"\\F850\"}.fa-border-style:before{content:\"\\F853\"}.fa-bowling-ball:before{content:\"\\F436\"}.fa-box:before{content:\"\\F466\"}.fa-box-open:before{content:\"\\F49E\"}.fa-box-tissue:before{content:\"\\E05B\"}.fa-boxes:before{content:\"\\F468\"}.fa-braille:before{content:\"\\F2A1\"}.fa-brain:before{content:\"\\F5DC\"}.fa-bread-slice:before{content:\"\\F7EC\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-briefcase-medical:before{content:\"\\F469\"}.fa-broadcast-tower:before{content:\"\\F519\"}.fa-broom:before{content:\"\\F51A\"}.fa-brush:before{content:\"\\F55D\"}.fa-btc:before{content:\"\\F15A\"}.fa-buffer:before{content:\"\\F837\"}.fa-bug:before{content:\"\\F188\"}.fa-building:before{content:\"\\F1AD\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bullseye:before{content:\"\\F140\"}.fa-burn:before{content:\"\\F46A\"}.fa-buromobelexperte:before{content:\"\\F37F\"}.fa-bus:before{content:\"\\F207\"}.fa-bus-alt:before{content:\"\\F55E\"}.fa-business-time:before{content:\"\\F64A\"}.fa-buy-n-large:before{content:\"\\F8A6\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-calendar:before{content:\"\\F133\"}.fa-calendar-alt:before{content:\"\\F073\"}.fa-calendar-check:before{content:\"\\F274\"}.fa-calendar-day:before{content:\"\\F783\"}.fa-calendar-minus:before{content:\"\\F272\"}.fa-calendar-plus:before{content:\"\\F271\"}.fa-calendar-times:before{content:\"\\F273\"}.fa-calendar-week:before{content:\"\\F784\"}.fa-camera:before{content:\"\\F030\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-campground:before{content:\"\\F6BB\"}.fa-canadian-maple-leaf:before{content:\"\\F785\"}.fa-candy-cane:before{content:\"\\F786\"}.fa-cannabis:before{content:\"\\F55F\"}.fa-capsules:before{content:\"\\F46B\"}.fa-car:before{content:\"\\F1B9\"}.fa-car-alt:before{content:\"\\F5DE\"}.fa-car-battery:before{content:\"\\F5DF\"}.fa-car-crash:before{content:\"\\F5E1\"}.fa-car-side:before{content:\"\\F5E4\"}.fa-caravan:before{content:\"\\F8FF\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-caret-square-down:before{content:\"\\F150\"}.fa-caret-square-left:before{content:\"\\F191\"}.fa-caret-square-right:before{content:\"\\F152\"}.fa-caret-square-up:before{content:\"\\F151\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-carrot:before{content:\"\\F787\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cash-register:before{content:\"\\F788\"}.fa-cat:before{content:\"\\F6BE\"}.fa-cc-amazon-pay:before{content:\"\\F42D\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-apple-pay:before{content:\"\\F416\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-centercode:before{content:\"\\F380\"}.fa-centos:before{content:\"\\F789\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-chair:before{content:\"\\F6C0\"}.fa-chalkboard:before{content:\"\\F51B\"}.fa-chalkboard-teacher:before{content:\"\\F51C\"}.fa-charging-station:before{content:\"\\F5E7\"}.fa-chart-area:before{content:\"\\F1FE\"}.fa-chart-bar:before{content:\"\\F080\"}.fa-chart-line:before{content:\"\\F201\"}.fa-chart-pie:before{content:\"\\F200\"}.fa-check:before{content:\"\\F00C\"}.fa-check-circle:before{content:\"\\F058\"}.fa-check-double:before{content:\"\\F560\"}.fa-check-square:before{content:\"\\F14A\"}.fa-cheese:before{content:\"\\F7EF\"}.fa-chess:before{content:\"\\F439\"}.fa-chess-bishop:before{content:\"\\F43A\"}.fa-chess-board:before{content:\"\\F43C\"}.fa-chess-king:before{content:\"\\F43F\"}.fa-chess-knight:before{content:\"\\F441\"}.fa-chess-pawn:before{content:\"\\F443\"}.fa-chess-queen:before{content:\"\\F445\"}.fa-chess-rook:before{content:\"\\F447\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-child:before{content:\"\\F1AE\"}.fa-chrome:before{content:\"\\F268\"}.fa-chromecast:before{content:\"\\F838\"}.fa-church:before{content:\"\\F51D\"}.fa-circle:before{content:\"\\F111\"}.fa-circle-notch:before{content:\"\\F1CE\"}.fa-city:before{content:\"\\F64F\"}.fa-clinic-medical:before{content:\"\\F7F2\"}.fa-clipboard:before{content:\"\\F328\"}.fa-clipboard-check:before{content:\"\\F46C\"}.fa-clipboard-list:before{content:\"\\F46D\"}.fa-clock:before{content:\"\\F017\"}.fa-clone:before{content:\"\\F24D\"}.fa-closed-captioning:before{content:\"\\F20A\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-cloud-download-alt:before{content:\"\\F381\"}.fa-cloud-meatball:before{content:\"\\F73B\"}.fa-cloud-moon:before{content:\"\\F6C3\"}.fa-cloud-moon-rain:before{content:\"\\F73C\"}.fa-cloud-rain:before{content:\"\\F73D\"}.fa-cloud-showers-heavy:before{content:\"\\F740\"}.fa-cloud-sun:before{content:\"\\F6C4\"}.fa-cloud-sun-rain:before{content:\"\\F743\"}.fa-cloud-upload-alt:before{content:\"\\F382\"}.fa-cloudflare:before{content:\"\\E07D\"}.fa-cloudscale:before{content:\"\\F383\"}.fa-cloudsmith:before{content:\"\\F384\"}.fa-cloudversify:before{content:\"\\F385\"}.fa-cocktail:before{content:\"\\F561\"}.fa-code:before{content:\"\\F121\"}.fa-code-branch:before{content:\"\\F126\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-codiepie:before{content:\"\\F284\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cog:before{content:\"\\F013\"}.fa-cogs:before{content:\"\\F085\"}.fa-coins:before{content:\"\\F51E\"}.fa-columns:before{content:\"\\F0DB\"}.fa-comment:before{content:\"\\F075\"}.fa-comment-alt:before{content:\"\\F27A\"}.fa-comment-dollar:before{content:\"\\F651\"}.fa-comment-dots:before{content:\"\\F4AD\"}.fa-comment-medical:before{content:\"\\F7F5\"}.fa-comment-slash:before{content:\"\\F4B3\"}.fa-comments:before{content:\"\\F086\"}.fa-comments-dollar:before{content:\"\\F653\"}.fa-compact-disc:before{content:\"\\F51F\"}.fa-compass:before{content:\"\\F14E\"}.fa-compress:before{content:\"\\F066\"}.fa-compress-alt:before{content:\"\\F422\"}.fa-compress-arrows-alt:before{content:\"\\F78C\"}.fa-concierge-bell:before{content:\"\\F562\"}.fa-confluence:before{content:\"\\F78D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-contao:before{content:\"\\F26D\"}.fa-cookie:before{content:\"\\F563\"}.fa-cookie-bite:before{content:\"\\F564\"}.fa-copy:before{content:\"\\F0C5\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-cotton-bureau:before{content:\"\\F89E\"}.fa-couch:before{content:\"\\F4B8\"}.fa-cpanel:before{content:\"\\F388\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-creative-commons-by:before{content:\"\\F4E7\"}.fa-creative-commons-nc:before{content:\"\\F4E8\"}.fa-creative-commons-nc-eu:before{content:\"\\F4E9\"}.fa-creative-commons-nc-jp:before{content:\"\\F4EA\"}.fa-creative-commons-nd:before{content:\"\\F4EB\"}.fa-creative-commons-pd:before{content:\"\\F4EC\"}.fa-creative-commons-pd-alt:before{content:\"\\F4ED\"}.fa-creative-commons-remix:before{content:\"\\F4EE\"}.fa-creative-commons-sa:before{content:\"\\F4EF\"}.fa-creative-commons-sampling:before{content:\"\\F4F0\"}.fa-creative-commons-sampling-plus:before{content:\"\\F4F1\"}.fa-creative-commons-share:before{content:\"\\F4F2\"}.fa-creative-commons-zero:before{content:\"\\F4F3\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-critical-role:before{content:\"\\F6C9\"}.fa-crop:before{content:\"\\F125\"}.fa-crop-alt:before{content:\"\\F565\"}.fa-cross:before{content:\"\\F654\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-crow:before{content:\"\\F520\"}.fa-crown:before{content:\"\\F521\"}.fa-crutch:before{content:\"\\F7F7\"}.fa-css3:before{content:\"\\F13C\"}.fa-css3-alt:before{content:\"\\F38B\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-cut:before{content:\"\\F0C4\"}.fa-cuttlefish:before{content:\"\\F38C\"}.fa-d-and-d:before{content:\"\\F38D\"}.fa-d-and-d-beyond:before{content:\"\\F6CA\"}.fa-dailymotion:before{content:\"\\E052\"}.fa-dashcube:before{content:\"\\F210\"}.fa-database:before{content:\"\\F1C0\"}.fa-deaf:before{content:\"\\F2A4\"}.fa-deezer:before{content:\"\\E077\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-democrat:before{content:\"\\F747\"}.fa-deploydog:before{content:\"\\F38E\"}.fa-deskpro:before{content:\"\\F38F\"}.fa-desktop:before{content:\"\\F108\"}.fa-dev:before{content:\"\\F6CC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-dharmachakra:before{content:\"\\F655\"}.fa-dhl:before{content:\"\\F790\"}.fa-diagnoses:before{content:\"\\F470\"}.fa-diaspora:before{content:\"\\F791\"}.fa-dice:before{content:\"\\F522\"}.fa-dice-d20:before{content:\"\\F6CF\"}.fa-dice-d6:before{content:\"\\F6D1\"}.fa-dice-five:before{content:\"\\F523\"}.fa-dice-four:before{content:\"\\F524\"}.fa-dice-one:before{content:\"\\F525\"}.fa-dice-six:before{content:\"\\F526\"}.fa-dice-three:before{content:\"\\F527\"}.fa-dice-two:before{content:\"\\F528\"}.fa-digg:before{content:\"\\F1A6\"}.fa-digital-ocean:before{content:\"\\F391\"}.fa-digital-tachograph:before{content:\"\\F566\"}.fa-directions:before{content:\"\\F5EB\"}.fa-discord:before{content:\"\\F392\"}.fa-discourse:before{content:\"\\F393\"}.fa-disease:before{content:\"\\F7FA\"}.fa-divide:before{content:\"\\F529\"}.fa-dizzy:before{content:\"\\F567\"}.fa-dna:before{content:\"\\F471\"}.fa-dochub:before{content:\"\\F394\"}.fa-docker:before{content:\"\\F395\"}.fa-dog:before{content:\"\\F6D3\"}.fa-dollar-sign:before{content:\"\\F155\"}.fa-dolly:before{content:\"\\F472\"}.fa-dolly-flatbed:before{content:\"\\F474\"}.fa-donate:before{content:\"\\F4B9\"}.fa-door-closed:before{content:\"\\F52A\"}.fa-door-open:before{content:\"\\F52B\"}.fa-dot-circle:before{content:\"\\F192\"}.fa-dove:before{content:\"\\F4BA\"}.fa-download:before{content:\"\\F019\"}.fa-draft2digital:before{content:\"\\F396\"}.fa-drafting-compass:before{content:\"\\F568\"}.fa-dragon:before{content:\"\\F6D5\"}.fa-draw-polygon:before{content:\"\\F5EE\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-dribbble-square:before{content:\"\\F397\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-drum:before{content:\"\\F569\"}.fa-drum-steelpan:before{content:\"\\F56A\"}.fa-drumstick-bite:before{content:\"\\F6D7\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-dumbbell:before{content:\"\\F44B\"}.fa-dumpster:before{content:\"\\F793\"}.fa-dumpster-fire:before{content:\"\\F794\"}.fa-dungeon:before{content:\"\\F6D9\"}.fa-dyalog:before{content:\"\\F399\"}.fa-earlybirds:before{content:\"\\F39A\"}.fa-ebay:before{content:\"\\F4F4\"}.fa-edge:before{content:\"\\F282\"}.fa-edge-legacy:before{content:\"\\E078\"}.fa-edit:before{content:\"\\F044\"}.fa-egg:before{content:\"\\F7FB\"}.fa-eject:before{content:\"\\F052\"}.fa-elementor:before{content:\"\\F430\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-ello:before{content:\"\\F5F1\"}.fa-ember:before{content:\"\\F423\"}.fa-empire:before{content:\"\\F1D1\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-text:before{content:\"\\F658\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-envira:before{content:\"\\F299\"}.fa-equals:before{content:\"\\F52C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-erlang:before{content:\"\\F39D\"}.fa-ethereum:before{content:\"\\F42E\"}.fa-ethernet:before{content:\"\\F796\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-euro-sign:before{content:\"\\F153\"}.fa-evernote:before{content:\"\\F839\"}.fa-exchange-alt:before{content:\"\\F362\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-expand:before{content:\"\\F065\"}.fa-expand-alt:before{content:\"\\F424\"}.fa-expand-arrows-alt:before{content:\"\\F31E\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-external-link-alt:before{content:\"\\F35D\"}.fa-external-link-square-alt:before{content:\"\\F360\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-dropper:before{content:\"\\F1FB\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-facebook:before{content:\"\\F09A\"}.fa-facebook-f:before{content:\"\\F39E\"}.fa-facebook-messenger:before{content:\"\\F39F\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-fan:before{content:\"\\F863\"}.fa-fantasy-flight-games:before{content:\"\\F6DC\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-faucet:before{content:\"\\E005\"}.fa-fax:before{content:\"\\F1AC\"}.fa-feather:before{content:\"\\F52D\"}.fa-feather-alt:before{content:\"\\F56B\"}.fa-fedex:before{content:\"\\F797\"}.fa-fedora:before{content:\"\\F798\"}.fa-female:before{content:\"\\F182\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-figma:before{content:\"\\F799\"}.fa-file:before{content:\"\\F15B\"}.fa-file-alt:before{content:\"\\F15C\"}.fa-file-archive:before{content:\"\\F1C6\"}.fa-file-audio:before{content:\"\\F1C7\"}.fa-file-code:before{content:\"\\F1C9\"}.fa-file-contract:before{content:\"\\F56C\"}.fa-file-csv:before{content:\"\\F6DD\"}.fa-file-download:before{content:\"\\F56D\"}.fa-file-excel:before{content:\"\\F1C3\"}.fa-file-export:before{content:\"\\F56E\"}.fa-file-image:before{content:\"\\F1C5\"}.fa-file-import:before{content:\"\\F56F\"}.fa-file-invoice:before{content:\"\\F570\"}.fa-file-invoice-dollar:before{content:\"\\F571\"}.fa-file-medical:before{content:\"\\F477\"}.fa-file-medical-alt:before{content:\"\\F478\"}.fa-file-pdf:before{content:\"\\F1C1\"}.fa-file-powerpoint:before{content:\"\\F1C4\"}.fa-file-prescription:before{content:\"\\F572\"}.fa-file-signature:before{content:\"\\F573\"}.fa-file-upload:before{content:\"\\F574\"}.fa-file-video:before{content:\"\\F1C8\"}.fa-file-word:before{content:\"\\F1C2\"}.fa-fill:before{content:\"\\F575\"}.fa-fill-drip:before{content:\"\\F576\"}.fa-film:before{content:\"\\F008\"}.fa-filter:before{content:\"\\F0B0\"}.fa-fingerprint:before{content:\"\\F577\"}.fa-fire:before{content:\"\\F06D\"}.fa-fire-alt:before{content:\"\\F7E4\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-firefox:before{content:\"\\F269\"}.fa-firefox-browser:before{content:\"\\E007\"}.fa-first-aid:before{content:\"\\F479\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-first-order-alt:before{content:\"\\F50A\"}.fa-firstdraft:before{content:\"\\F3A1\"}.fa-fish:before{content:\"\\F578\"}.fa-fist-raised:before{content:\"\\F6DE\"}.fa-flag:before{content:\"\\F024\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-flag-usa:before{content:\"\\F74D\"}.fa-flask:before{content:\"\\F0C3\"}.fa-flickr:before{content:\"\\F16E\"}.fa-flipboard:before{content:\"\\F44D\"}.fa-flushed:before{content:\"\\F579\"}.fa-fly:before{content:\"\\F417\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-minus:before{content:\"\\F65D\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-folder-plus:before{content:\"\\F65E\"}.fa-font:before{content:\"\\F031\"}.fa-font-awesome:before{content:\"\\F2B4\"}.fa-font-awesome-alt:before{content:\"\\F35C\"}.fa-font-awesome-flag:before{content:\"\\F425\"}.fa-font-awesome-logo-full:before{content:\"\\F4E6\"}.fa-fonticons:before{content:\"\\F280\"}.fa-fonticons-fi:before{content:\"\\F3A2\"}.fa-football-ball:before{content:\"\\F44E\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-fort-awesome-alt:before{content:\"\\F3A3\"}.fa-forumbee:before{content:\"\\F211\"}.fa-forward:before{content:\"\\F04E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-freebsd:before{content:\"\\F3A4\"}.fa-frog:before{content:\"\\F52E\"}.fa-frown:before{content:\"\\F119\"}.fa-frown-open:before{content:\"\\F57A\"}.fa-fulcrum:before{content:\"\\F50B\"}.fa-funnel-dollar:before{content:\"\\F662\"}.fa-futbol:before{content:\"\\F1E3\"}.fa-galactic-republic:before{content:\"\\F50C\"}.fa-galactic-senate:before{content:\"\\F50D\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-gas-pump:before{content:\"\\F52F\"}.fa-gavel:before{content:\"\\F0E3\"}.fa-gem:before{content:\"\\F3A5\"}.fa-genderless:before{content:\"\\F22D\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-ghost:before{content:\"\\F6E2\"}.fa-gift:before{content:\"\\F06B\"}.fa-gifts:before{content:\"\\F79C\"}.fa-git:before{content:\"\\F1D3\"}.fa-git-alt:before{content:\"\\F841\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-github:before{content:\"\\F09B\"}.fa-github-alt:before{content:\"\\F113\"}.fa-github-square:before{content:\"\\F092\"}.fa-gitkraken:before{content:\"\\F3A6\"}.fa-gitlab:before{content:\"\\F296\"}.fa-gitter:before{content:\"\\F426\"}.fa-glass-cheers:before{content:\"\\F79F\"}.fa-glass-martini:before{content:\"\\F000\"}.fa-glass-martini-alt:before{content:\"\\F57B\"}.fa-glass-whiskey:before{content:\"\\F7A0\"}.fa-glasses:before{content:\"\\F530\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-globe:before{content:\"\\F0AC\"}.fa-globe-africa:before{content:\"\\F57C\"}.fa-globe-americas:before{content:\"\\F57D\"}.fa-globe-asia:before{content:\"\\F57E\"}.fa-globe-europe:before{content:\"\\F7A2\"}.fa-gofore:before{content:\"\\F3A7\"}.fa-golf-ball:before{content:\"\\F450\"}.fa-goodreads:before{content:\"\\F3A8\"}.fa-goodreads-g:before{content:\"\\F3A9\"}.fa-google:before{content:\"\\F1A0\"}.fa-google-drive:before{content:\"\\F3AA\"}.fa-google-pay:before{content:\"\\E079\"}.fa-google-play:before{content:\"\\F3AB\"}.fa-google-plus:before{content:\"\\F2B3\"}.fa-google-plus-g:before{content:\"\\F0D5\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-gopuram:before{content:\"\\F664\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-gratipay:before{content:\"\\F184\"}.fa-grav:before{content:\"\\F2D6\"}.fa-greater-than:before{content:\"\\F531\"}.fa-greater-than-equal:before{content:\"\\F532\"}.fa-grimace:before{content:\"\\F57F\"}.fa-grin:before{content:\"\\F580\"}.fa-grin-alt:before{content:\"\\F581\"}.fa-grin-beam:before{content:\"\\F582\"}.fa-grin-beam-sweat:before{content:\"\\F583\"}.fa-grin-hearts:before{content:\"\\F584\"}.fa-grin-squint:before{content:\"\\F585\"}.fa-grin-squint-tears:before{content:\"\\F586\"}.fa-grin-stars:before{content:\"\\F587\"}.fa-grin-tears:before{content:\"\\F588\"}.fa-grin-tongue:before{content:\"\\F589\"}.fa-grin-tongue-squint:before{content:\"\\F58A\"}.fa-grin-tongue-wink:before{content:\"\\F58B\"}.fa-grin-wink:before{content:\"\\F58C\"}.fa-grip-horizontal:before{content:\"\\F58D\"}.fa-grip-lines:before{content:\"\\F7A4\"}.fa-grip-lines-vertical:before{content:\"\\F7A5\"}.fa-grip-vertical:before{content:\"\\F58E\"}.fa-gripfire:before{content:\"\\F3AC\"}.fa-grunt:before{content:\"\\F3AD\"}.fa-guilded:before{content:\"\\E07E\"}.fa-guitar:before{content:\"\\F7A6\"}.fa-gulp:before{content:\"\\F3AE\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-hacker-news:before{content:\"\\F1D4\"}.fa-hacker-news-square:before{content:\"\\F3AF\"}.fa-hackerrank:before{content:\"\\F5F7\"}.fa-hamburger:before{content:\"\\F805\"}.fa-hammer:before{content:\"\\F6E3\"}.fa-hamsa:before{content:\"\\F665\"}.fa-hand-holding:before{content:\"\\F4BD\"}.fa-hand-holding-heart:before{content:\"\\F4BE\"}.fa-hand-holding-medical:before{content:\"\\E05C\"}.fa-hand-holding-usd:before{content:\"\\F4C0\"}.fa-hand-holding-water:before{content:\"\\F4C1\"}.fa-hand-lizard:before{content:\"\\F258\"}.fa-hand-middle-finger:before{content:\"\\F806\"}.fa-hand-paper:before{content:\"\\F256\"}.fa-hand-peace:before{content:\"\\F25B\"}.fa-hand-point-down:before{content:\"\\F0A7\"}.fa-hand-point-left:before{content:\"\\F0A5\"}.fa-hand-point-right:before{content:\"\\F0A4\"}.fa-hand-point-up:before{content:\"\\F0A6\"}.fa-hand-pointer:before{content:\"\\F25A\"}.fa-hand-rock:before{content:\"\\F255\"}.fa-hand-scissors:before{content:\"\\F257\"}.fa-hand-sparkles:before{content:\"\\E05D\"}.fa-hand-spock:before{content:\"\\F259\"}.fa-hands:before{content:\"\\F4C2\"}.fa-hands-helping:before{content:\"\\F4C4\"}.fa-hands-wash:before{content:\"\\E05E\"}.fa-handshake:before{content:\"\\F2B5\"}.fa-handshake-alt-slash:before{content:\"\\E05F\"}.fa-handshake-slash:before{content:\"\\E060\"}.fa-hanukiah:before{content:\"\\F6E6\"}.fa-hard-hat:before{content:\"\\F807\"}.fa-hashtag:before{content:\"\\F292\"}.fa-hat-cowboy:before{content:\"\\F8C0\"}.fa-hat-cowboy-side:before{content:\"\\F8C1\"}.fa-hat-wizard:before{content:\"\\F6E8\"}.fa-hdd:before{content:\"\\F0A0\"}.fa-head-side-cough:before{content:\"\\E061\"}.fa-head-side-cough-slash:before{content:\"\\E062\"}.fa-head-side-mask:before{content:\"\\E063\"}.fa-head-side-virus:before{content:\"\\E064\"}.fa-heading:before{content:\"\\F1DC\"}.fa-headphones:before{content:\"\\F025\"}.fa-headphones-alt:before{content:\"\\F58F\"}.fa-headset:before{content:\"\\F590\"}.fa-heart:before{content:\"\\F004\"}.fa-heart-broken:before{content:\"\\F7A9\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-helicopter:before{content:\"\\F533\"}.fa-highlighter:before{content:\"\\F591\"}.fa-hiking:before{content:\"\\F6EC\"}.fa-hippo:before{content:\"\\F6ED\"}.fa-hips:before{content:\"\\F452\"}.fa-hire-a-helper:before{content:\"\\F3B0\"}.fa-history:before{content:\"\\F1DA\"}.fa-hive:before{content:\"\\E07F\"}.fa-hockey-puck:before{content:\"\\F453\"}.fa-holly-berry:before{content:\"\\F7AA\"}.fa-home:before{content:\"\\F015\"}.fa-hooli:before{content:\"\\F427\"}.fa-hornbill:before{content:\"\\F592\"}.fa-horse:before{content:\"\\F6F0\"}.fa-horse-head:before{content:\"\\F7AB\"}.fa-hospital:before{content:\"\\F0F8\"}.fa-hospital-alt:before{content:\"\\F47D\"}.fa-hospital-symbol:before{content:\"\\F47E\"}.fa-hospital-user:before{content:\"\\F80D\"}.fa-hot-tub:before{content:\"\\F593\"}.fa-hotdog:before{content:\"\\F80F\"}.fa-hotel:before{content:\"\\F594\"}.fa-hotjar:before{content:\"\\F3B1\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-start:before{content:\"\\F251\"}.fa-house-damage:before{content:\"\\F6F1\"}.fa-house-user:before{content:\"\\E065\"}.fa-houzz:before{content:\"\\F27C\"}.fa-hryvnia:before{content:\"\\F6F2\"}.fa-html5:before{content:\"\\F13B\"}.fa-hubspot:before{content:\"\\F3B2\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-ice-cream:before{content:\"\\F810\"}.fa-icicles:before{content:\"\\F7AD\"}.fa-icons:before{content:\"\\F86D\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-id-card:before{content:\"\\F2C2\"}.fa-id-card-alt:before{content:\"\\F47F\"}.fa-ideal:before{content:\"\\E013\"}.fa-igloo:before{content:\"\\F7AE\"}.fa-image:before{content:\"\\F03E\"}.fa-images:before{content:\"\\F302\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-inbox:before{content:\"\\F01C\"}.fa-indent:before{content:\"\\F03C\"}.fa-industry:before{content:\"\\F275\"}.fa-infinity:before{content:\"\\F534\"}.fa-info:before{content:\"\\F129\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-innosoft:before{content:\"\\E080\"}.fa-instagram:before{content:\"\\F16D\"}.fa-instagram-square:before{content:\"\\E055\"}.fa-instalod:before{content:\"\\E081\"}.fa-intercom:before{content:\"\\F7AF\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-invision:before{content:\"\\F7B0\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-italic:before{content:\"\\F033\"}.fa-itch-io:before{content:\"\\F83A\"}.fa-itunes:before{content:\"\\F3B4\"}.fa-itunes-note:before{content:\"\\F3B5\"}.fa-java:before{content:\"\\F4E4\"}.fa-jedi:before{content:\"\\F669\"}.fa-jedi-order:before{content:\"\\F50E\"}.fa-jenkins:before{content:\"\\F3B6\"}.fa-jira:before{content:\"\\F7B1\"}.fa-joget:before{content:\"\\F3B7\"}.fa-joint:before{content:\"\\F595\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-journal-whills:before{content:\"\\F66A\"}.fa-js:before{content:\"\\F3B8\"}.fa-js-square:before{content:\"\\F3B9\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-kaaba:before{content:\"\\F66B\"}.fa-kaggle:before{content:\"\\F5FA\"}.fa-key:before{content:\"\\F084\"}.fa-keybase:before{content:\"\\F4F5\"}.fa-keyboard:before{content:\"\\F11C\"}.fa-keycdn:before{content:\"\\F3BA\"}.fa-khanda:before{content:\"\\F66D\"}.fa-kickstarter:before{content:\"\\F3BB\"}.fa-kickstarter-k:before{content:\"\\F3BC\"}.fa-kiss:before{content:\"\\F596\"}.fa-kiss-beam:before{content:\"\\F597\"}.fa-kiss-wink-heart:before{content:\"\\F598\"}.fa-kiwi-bird:before{content:\"\\F535\"}.fa-korvue:before{content:\"\\F42F\"}.fa-landmark:before{content:\"\\F66F\"}.fa-language:before{content:\"\\F1AB\"}.fa-laptop:before{content:\"\\F109\"}.fa-laptop-code:before{content:\"\\F5FC\"}.fa-laptop-house:before{content:\"\\E066\"}.fa-laptop-medical:before{content:\"\\F812\"}.fa-laravel:before{content:\"\\F3BD\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-laugh:before{content:\"\\F599\"}.fa-laugh-beam:before{content:\"\\F59A\"}.fa-laugh-squint:before{content:\"\\F59B\"}.fa-laugh-wink:before{content:\"\\F59C\"}.fa-layer-group:before{content:\"\\F5FD\"}.fa-leaf:before{content:\"\\F06C\"}.fa-leanpub:before{content:\"\\F212\"}.fa-lemon:before{content:\"\\F094\"}.fa-less:before{content:\"\\F41D\"}.fa-less-than:before{content:\"\\F536\"}.fa-less-than-equal:before{content:\"\\F537\"}.fa-level-down-alt:before{content:\"\\F3BE\"}.fa-level-up-alt:before{content:\"\\F3BF\"}.fa-life-ring:before{content:\"\\F1CD\"}.fa-lightbulb:before{content:\"\\F0EB\"}.fa-line:before{content:\"\\F3C0\"}.fa-link:before{content:\"\\F0C1\"}.fa-linkedin:before{content:\"\\F08C\"}.fa-linkedin-in:before{content:\"\\F0E1\"}.fa-linode:before{content:\"\\F2B8\"}.fa-linux:before{content:\"\\F17C\"}.fa-lira-sign:before{content:\"\\F195\"}.fa-list:before{content:\"\\F03A\"}.fa-list-alt:before{content:\"\\F022\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-lock:before{content:\"\\F023\"}.fa-lock-open:before{content:\"\\F3C1\"}.fa-long-arrow-alt-down:before{content:\"\\F309\"}.fa-long-arrow-alt-left:before{content:\"\\F30A\"}.fa-long-arrow-alt-right:before{content:\"\\F30B\"}.fa-long-arrow-alt-up:before{content:\"\\F30C\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-luggage-cart:before{content:\"\\F59D\"}.fa-lungs:before{content:\"\\F604\"}.fa-lungs-virus:before{content:\"\\E067\"}.fa-lyft:before{content:\"\\F3C3\"}.fa-magento:before{content:\"\\F3C4\"}.fa-magic:before{content:\"\\F0D0\"}.fa-magnet:before{content:\"\\F076\"}.fa-mail-bulk:before{content:\"\\F674\"}.fa-mailchimp:before{content:\"\\F59E\"}.fa-male:before{content:\"\\F183\"}.fa-mandalorian:before{content:\"\\F50F\"}.fa-map:before{content:\"\\F279\"}.fa-map-marked:before{content:\"\\F59F\"}.fa-map-marked-alt:before{content:\"\\F5A0\"}.fa-map-marker:before{content:\"\\F041\"}.fa-map-marker-alt:before{content:\"\\F3C5\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-markdown:before{content:\"\\F60F\"}.fa-marker:before{content:\"\\F5A1\"}.fa-mars:before{content:\"\\F222\"}.fa-mars-double:before{content:\"\\F227\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mask:before{content:\"\\F6FA\"}.fa-mastodon:before{content:\"\\F4F6\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-mdb:before{content:\"\\F8CA\"}.fa-medal:before{content:\"\\F5A2\"}.fa-medapps:before{content:\"\\F3C6\"}.fa-medium:before{content:\"\\F23A\"}.fa-medium-m:before{content:\"\\F3C7\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-medrt:before{content:\"\\F3C8\"}.fa-meetup:before{content:\"\\F2E0\"}.fa-megaport:before{content:\"\\F5A3\"}.fa-meh:before{content:\"\\F11A\"}.fa-meh-blank:before{content:\"\\F5A4\"}.fa-meh-rolling-eyes:before{content:\"\\F5A5\"}.fa-memory:before{content:\"\\F538\"}.fa-mendeley:before{content:\"\\F7B3\"}.fa-menorah:before{content:\"\\F676\"}.fa-mercury:before{content:\"\\F223\"}.fa-meteor:before{content:\"\\F753\"}.fa-microblog:before{content:\"\\E01A\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-alt:before{content:\"\\F3C9\"}.fa-microphone-alt-slash:before{content:\"\\F539\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-microscope:before{content:\"\\F610\"}.fa-microsoft:before{content:\"\\F3CA\"}.fa-minus:before{content:\"\\F068\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-minus-square:before{content:\"\\F146\"}.fa-mitten:before{content:\"\\F7B5\"}.fa-mix:before{content:\"\\F3CB\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-mixer:before{content:\"\\E056\"}.fa-mizuni:before{content:\"\\F3CC\"}.fa-mobile:before{content:\"\\F10B\"}.fa-mobile-alt:before{content:\"\\F3CD\"}.fa-modx:before{content:\"\\F285\"}.fa-monero:before{content:\"\\F3D0\"}.fa-money-bill:before{content:\"\\F0D6\"}.fa-money-bill-alt:before{content:\"\\F3D1\"}.fa-money-bill-wave:before{content:\"\\F53A\"}.fa-money-bill-wave-alt:before{content:\"\\F53B\"}.fa-money-check:before{content:\"\\F53C\"}.fa-money-check-alt:before{content:\"\\F53D\"}.fa-monument:before{content:\"\\F5A6\"}.fa-moon:before{content:\"\\F186\"}.fa-mortar-pestle:before{content:\"\\F5A7\"}.fa-mosque:before{content:\"\\F678\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-mountain:before{content:\"\\F6FC\"}.fa-mouse:before{content:\"\\F8CC\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-mug-hot:before{content:\"\\F7B6\"}.fa-music:before{content:\"\\F001\"}.fa-napster:before{content:\"\\F3D2\"}.fa-neos:before{content:\"\\F612\"}.fa-network-wired:before{content:\"\\F6FF\"}.fa-neuter:before{content:\"\\F22C\"}.fa-newspaper:before{content:\"\\F1EA\"}.fa-nimblr:before{content:\"\\F5A8\"}.fa-node:before{content:\"\\F419\"}.fa-node-js:before{content:\"\\F3D3\"}.fa-not-equal:before{content:\"\\F53E\"}.fa-notes-medical:before{content:\"\\F481\"}.fa-npm:before{content:\"\\F3D4\"}.fa-ns8:before{content:\"\\F3D5\"}.fa-nutritionix:before{content:\"\\F3D6\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-octopus-deploy:before{content:\"\\E082\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-oil-can:before{content:\"\\F613\"}.fa-old-republic:before{content:\"\\F510\"}.fa-om:before{content:\"\\F679\"}.fa-opencart:before{content:\"\\F23D\"}.fa-openid:before{content:\"\\F19B\"}.fa-opera:before{content:\"\\F26A\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-orcid:before{content:\"\\F8D2\"}.fa-osi:before{content:\"\\F41A\"}.fa-otter:before{content:\"\\F700\"}.fa-outdent:before{content:\"\\F03B\"}.fa-page4:before{content:\"\\F3D7\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-pager:before{content:\"\\F815\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-paint-roller:before{content:\"\\F5AA\"}.fa-palette:before{content:\"\\F53F\"}.fa-palfed:before{content:\"\\F3D8\"}.fa-pallet:before{content:\"\\F482\"}.fa-paper-plane:before{content:\"\\F1D8\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-parachute-box:before{content:\"\\F4CD\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-parking:before{content:\"\\F540\"}.fa-passport:before{content:\"\\F5AB\"}.fa-pastafarianism:before{content:\"\\F67B\"}.fa-paste:before{content:\"\\F0EA\"}.fa-patreon:before{content:\"\\F3D9\"}.fa-pause:before{content:\"\\F04C\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-paw:before{content:\"\\F1B0\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-peace:before{content:\"\\F67C\"}.fa-pen:before{content:\"\\F304\"}.fa-pen-alt:before{content:\"\\F305\"}.fa-pen-fancy:before{content:\"\\F5AC\"}.fa-pen-nib:before{content:\"\\F5AD\"}.fa-pen-square:before{content:\"\\F14B\"}.fa-pencil-alt:before{content:\"\\F303\"}.fa-pencil-ruler:before{content:\"\\F5AE\"}.fa-penny-arcade:before{content:\"\\F704\"}.fa-people-arrows:before{content:\"\\E068\"}.fa-people-carry:before{content:\"\\F4CE\"}.fa-pepper-hot:before{content:\"\\F816\"}.fa-perbyte:before{content:\"\\E083\"}.fa-percent:before{content:\"\\F295\"}.fa-percentage:before{content:\"\\F541\"}.fa-periscope:before{content:\"\\F3DA\"}.fa-person-booth:before{content:\"\\F756\"}.fa-phabricator:before{content:\"\\F3DB\"}.fa-phoenix-framework:before{content:\"\\F3DC\"}.fa-phoenix-squadron:before{content:\"\\F511\"}.fa-phone:before{content:\"\\F095\"}.fa-phone-alt:before{content:\"\\F879\"}.fa-phone-slash:before{content:\"\\F3DD\"}.fa-phone-square:before{content:\"\\F098\"}.fa-phone-square-alt:before{content:\"\\F87B\"}.fa-phone-volume:before{content:\"\\F2A0\"}.fa-photo-video:before{content:\"\\F87C\"}.fa-php:before{content:\"\\F457\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-pied-piper-hat:before{content:\"\\F4E5\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-square:before{content:\"\\E01E\"}.fa-piggy-bank:before{content:\"\\F4D3\"}.fa-pills:before{content:\"\\F484\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-pizza-slice:before{content:\"\\F818\"}.fa-place-of-worship:before{content:\"\\F67F\"}.fa-plane:before{content:\"\\F072\"}.fa-plane-arrival:before{content:\"\\F5AF\"}.fa-plane-departure:before{content:\"\\F5B0\"}.fa-plane-slash:before{content:\"\\E069\"}.fa-play:before{content:\"\\F04B\"}.fa-play-circle:before{content:\"\\F144\"}.fa-playstation:before{content:\"\\F3DF\"}.fa-plug:before{content:\"\\F1E6\"}.fa-plus:before{content:\"\\F067\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-poll:before{content:\"\\F681\"}.fa-poll-h:before{content:\"\\F682\"}.fa-poo:before{content:\"\\F2FE\"}.fa-poo-storm:before{content:\"\\F75A\"}.fa-poop:before{content:\"\\F619\"}.fa-portrait:before{content:\"\\F3E0\"}.fa-pound-sign:before{content:\"\\F154\"}.fa-power-off:before{content:\"\\F011\"}.fa-pray:before{content:\"\\F683\"}.fa-praying-hands:before{content:\"\\F684\"}.fa-prescription:before{content:\"\\F5B1\"}.fa-prescription-bottle:before{content:\"\\F485\"}.fa-prescription-bottle-alt:before{content:\"\\F486\"}.fa-print:before{content:\"\\F02F\"}.fa-procedures:before{content:\"\\F487\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-project-diagram:before{content:\"\\F542\"}.fa-pump-medical:before{content:\"\\E06A\"}.fa-pump-soap:before{content:\"\\E06B\"}.fa-pushed:before{content:\"\\F3E1\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-python:before{content:\"\\F3E2\"}.fa-qq:before{content:\"\\F1D6\"}.fa-qrcode:before{content:\"\\F029\"}.fa-question:before{content:\"\\F128\"}.fa-question-circle:before{content:\"\\F059\"}.fa-quidditch:before{content:\"\\F458\"}.fa-quinscape:before{content:\"\\F459\"}.fa-quora:before{content:\"\\F2C4\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-quran:before{content:\"\\F687\"}.fa-r-project:before{content:\"\\F4F7\"}.fa-radiation:before{content:\"\\F7B9\"}.fa-radiation-alt:before{content:\"\\F7BA\"}.fa-rainbow:before{content:\"\\F75B\"}.fa-random:before{content:\"\\F074\"}.fa-raspberry-pi:before{content:\"\\F7BB\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-react:before{content:\"\\F41B\"}.fa-reacteurope:before{content:\"\\F75D\"}.fa-readme:before{content:\"\\F4D5\"}.fa-rebel:before{content:\"\\F1D0\"}.fa-receipt:before{content:\"\\F543\"}.fa-record-vinyl:before{content:\"\\F8D9\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-red-river:before{content:\"\\F3E3\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-redhat:before{content:\"\\F7BC\"}.fa-redo:before{content:\"\\F01E\"}.fa-redo-alt:before{content:\"\\F2F9\"}.fa-registered:before{content:\"\\F25D\"}.fa-remove-format:before{content:\"\\F87D\"}.fa-renren:before{content:\"\\F18B\"}.fa-reply:before{content:\"\\F3E5\"}.fa-reply-all:before{content:\"\\F122\"}.fa-replyd:before{content:\"\\F3E6\"}.fa-republican:before{content:\"\\F75E\"}.fa-researchgate:before{content:\"\\F4F8\"}.fa-resolving:before{content:\"\\F3E7\"}.fa-restroom:before{content:\"\\F7BD\"}.fa-retweet:before{content:\"\\F079\"}.fa-rev:before{content:\"\\F5B2\"}.fa-ribbon:before{content:\"\\F4D6\"}.fa-ring:before{content:\"\\F70B\"}.fa-road:before{content:\"\\F018\"}.fa-robot:before{content:\"\\F544\"}.fa-rocket:before{content:\"\\F135\"}.fa-rocketchat:before{content:\"\\F3E8\"}.fa-rockrms:before{content:\"\\F3E9\"}.fa-route:before{content:\"\\F4D7\"}.fa-rss:before{content:\"\\F09E\"}.fa-rss-square:before{content:\"\\F143\"}.fa-ruble-sign:before{content:\"\\F158\"}.fa-ruler:before{content:\"\\F545\"}.fa-ruler-combined:before{content:\"\\F546\"}.fa-ruler-horizontal:before{content:\"\\F547\"}.fa-ruler-vertical:before{content:\"\\F548\"}.fa-running:before{content:\"\\F70C\"}.fa-rupee-sign:before{content:\"\\F156\"}.fa-rust:before{content:\"\\E07A\"}.fa-sad-cry:before{content:\"\\F5B3\"}.fa-sad-tear:before{content:\"\\F5B4\"}.fa-safari:before{content:\"\\F267\"}.fa-salesforce:before{content:\"\\F83B\"}.fa-sass:before{content:\"\\F41E\"}.fa-satellite:before{content:\"\\F7BF\"}.fa-satellite-dish:before{content:\"\\F7C0\"}.fa-save:before{content:\"\\F0C7\"}.fa-schlix:before{content:\"\\F3EA\"}.fa-school:before{content:\"\\F549\"}.fa-screwdriver:before{content:\"\\F54A\"}.fa-scribd:before{content:\"\\F28A\"}.fa-scroll:before{content:\"\\F70E\"}.fa-sd-card:before{content:\"\\F7C2\"}.fa-search:before{content:\"\\F002\"}.fa-search-dollar:before{content:\"\\F688\"}.fa-search-location:before{content:\"\\F689\"}.fa-search-minus:before{content:\"\\F010\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-searchengin:before{content:\"\\F3EB\"}.fa-seedling:before{content:\"\\F4D8\"}.fa-sellcast:before{content:\"\\F2DA\"}.fa-sellsy:before{content:\"\\F213\"}.fa-server:before{content:\"\\F233\"}.fa-servicestack:before{content:\"\\F3EC\"}.fa-shapes:before{content:\"\\F61F\"}.fa-share:before{content:\"\\F064\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-share-square:before{content:\"\\F14D\"}.fa-shekel-sign:before{content:\"\\F20B\"}.fa-shield-alt:before{content:\"\\F3ED\"}.fa-shield-virus:before{content:\"\\E06C\"}.fa-ship:before{content:\"\\F21A\"}.fa-shipping-fast:before{content:\"\\F48B\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-shoe-prints:before{content:\"\\F54B\"}.fa-shopify:before{content:\"\\E057\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-shopware:before{content:\"\\F5B5\"}.fa-shower:before{content:\"\\F2CC\"}.fa-shuttle-van:before{content:\"\\F5B6\"}.fa-sign:before{content:\"\\F4D9\"}.fa-sign-in-alt:before{content:\"\\F2F6\"}.fa-sign-language:before{content:\"\\F2A7\"}.fa-sign-out-alt:before{content:\"\\F2F5\"}.fa-signal:before{content:\"\\F012\"}.fa-signature:before{content:\"\\F5B7\"}.fa-sim-card:before{content:\"\\F7C4\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-sink:before{content:\"\\E06D\"}.fa-sistrix:before{content:\"\\F3EE\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-sith:before{content:\"\\F512\"}.fa-skating:before{content:\"\\F7C5\"}.fa-sketch:before{content:\"\\F7C6\"}.fa-skiing:before{content:\"\\F7C9\"}.fa-skiing-nordic:before{content:\"\\F7CA\"}.fa-skull:before{content:\"\\F54C\"}.fa-skull-crossbones:before{content:\"\\F714\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-skype:before{content:\"\\F17E\"}.fa-slack:before{content:\"\\F198\"}.fa-slack-hash:before{content:\"\\F3EF\"}.fa-slash:before{content:\"\\F715\"}.fa-sleigh:before{content:\"\\F7CC\"}.fa-sliders-h:before{content:\"\\F1DE\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-smile:before{content:\"\\F118\"}.fa-smile-beam:before{content:\"\\F5B8\"}.fa-smile-wink:before{content:\"\\F4DA\"}.fa-smog:before{content:\"\\F75F\"}.fa-smoking:before{content:\"\\F48D\"}.fa-smoking-ban:before{content:\"\\F54D\"}.fa-sms:before{content:\"\\F7CD\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-snowboarding:before{content:\"\\F7CE\"}.fa-snowflake:before{content:\"\\F2DC\"}.fa-snowman:before{content:\"\\F7D0\"}.fa-snowplow:before{content:\"\\F7D2\"}.fa-soap:before{content:\"\\E06E\"}.fa-socks:before{content:\"\\F696\"}.fa-solar-panel:before{content:\"\\F5BA\"}.fa-sort:before{content:\"\\F0DC\"}.fa-sort-alpha-down:before{content:\"\\F15D\"}.fa-sort-alpha-down-alt:before{content:\"\\F881\"}.fa-sort-alpha-up:before{content:\"\\F15E\"}.fa-sort-alpha-up-alt:before{content:\"\\F882\"}.fa-sort-amount-down:before{content:\"\\F160\"}.fa-sort-amount-down-alt:before{content:\"\\F884\"}.fa-sort-amount-up:before{content:\"\\F161\"}.fa-sort-amount-up-alt:before{content:\"\\F885\"}.fa-sort-down:before{content:\"\\F0DD\"}.fa-sort-numeric-down:before{content:\"\\F162\"}.fa-sort-numeric-down-alt:before{content:\"\\F886\"}.fa-sort-numeric-up:before{content:\"\\F163\"}.fa-sort-numeric-up-alt:before{content:\"\\F887\"}.fa-sort-up:before{content:\"\\F0DE\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-sourcetree:before{content:\"\\F7D3\"}.fa-spa:before{content:\"\\F5BB\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-speakap:before{content:\"\\F3F3\"}.fa-speaker-deck:before{content:\"\\F83C\"}.fa-spell-check:before{content:\"\\F891\"}.fa-spider:before{content:\"\\F717\"}.fa-spinner:before{content:\"\\F110\"}.fa-splotch:before{content:\"\\F5BC\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-spray-can:before{content:\"\\F5BD\"}.fa-square:before{content:\"\\F0C8\"}.fa-square-full:before{content:\"\\F45C\"}.fa-square-root-alt:before{content:\"\\F698\"}.fa-squarespace:before{content:\"\\F5BE\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-stackpath:before{content:\"\\F842\"}.fa-stamp:before{content:\"\\F5BF\"}.fa-star:before{content:\"\\F005\"}.fa-star-and-crescent:before{content:\"\\F699\"}.fa-star-half:before{content:\"\\F089\"}.fa-star-half-alt:before{content:\"\\F5C0\"}.fa-star-of-david:before{content:\"\\F69A\"}.fa-star-of-life:before{content:\"\\F621\"}.fa-staylinked:before{content:\"\\F3F5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-steam-symbol:before{content:\"\\F3F6\"}.fa-step-backward:before{content:\"\\F048\"}.fa-step-forward:before{content:\"\\F051\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-sticker-mule:before{content:\"\\F3F7\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-stop:before{content:\"\\F04D\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stopwatch:before{content:\"\\F2F2\"}.fa-stopwatch-20:before{content:\"\\E06F\"}.fa-store:before{content:\"\\F54E\"}.fa-store-alt:before{content:\"\\F54F\"}.fa-store-alt-slash:before{content:\"\\E070\"}.fa-store-slash:before{content:\"\\E071\"}.fa-strava:before{content:\"\\F428\"}.fa-stream:before{content:\"\\F550\"}.fa-street-view:before{content:\"\\F21D\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-stripe:before{content:\"\\F429\"}.fa-stripe-s:before{content:\"\\F42A\"}.fa-stroopwafel:before{content:\"\\F551\"}.fa-studiovinari:before{content:\"\\F3F8\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-subscript:before{content:\"\\F12C\"}.fa-subway:before{content:\"\\F239\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-suitcase-rolling:before{content:\"\\F5C1\"}.fa-sun:before{content:\"\\F185\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-superscript:before{content:\"\\F12B\"}.fa-supple:before{content:\"\\F3F9\"}.fa-surprise:before{content:\"\\F5C2\"}.fa-suse:before{content:\"\\F7D6\"}.fa-swatchbook:before{content:\"\\F5C3\"}.fa-swift:before{content:\"\\F8E1\"}.fa-swimmer:before{content:\"\\F5C4\"}.fa-swimming-pool:before{content:\"\\F5C5\"}.fa-symfony:before{content:\"\\F83D\"}.fa-synagogue:before{content:\"\\F69B\"}.fa-sync:before{content:\"\\F021\"}.fa-sync-alt:before{content:\"\\F2F1\"}.fa-syringe:before{content:\"\\F48E\"}.fa-table:before{content:\"\\F0CE\"}.fa-table-tennis:before{content:\"\\F45D\"}.fa-tablet:before{content:\"\\F10A\"}.fa-tablet-alt:before{content:\"\\F3FA\"}.fa-tablets:before{content:\"\\F490\"}.fa-tachometer-alt:before{content:\"\\F3FD\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-tape:before{content:\"\\F4DB\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-taxi:before{content:\"\\F1BA\"}.fa-teamspeak:before{content:\"\\F4F9\"}.fa-teeth:before{content:\"\\F62E\"}.fa-teeth-open:before{content:\"\\F62F\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-telegram-plane:before{content:\"\\F3FE\"}.fa-temperature-high:before{content:\"\\F769\"}.fa-temperature-low:before{content:\"\\F76B\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-tenge:before{content:\"\\F7D7\"}.fa-terminal:before{content:\"\\F120\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-th:before{content:\"\\F00A\"}.fa-th-large:before{content:\"\\F009\"}.fa-th-list:before{content:\"\\F00B\"}.fa-the-red-yeti:before{content:\"\\F69D\"}.fa-theater-masks:before{content:\"\\F630\"}.fa-themeco:before{content:\"\\F5C6\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-thermometer:before{content:\"\\F491\"}.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-think-peaks:before{content:\"\\F731\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbtack:before{content:\"\\F08D\"}.fa-ticket-alt:before{content:\"\\F3FF\"}.fa-tiktok:before{content:\"\\E07B\"}.fa-times:before{content:\"\\F00D\"}.fa-times-circle:before{content:\"\\F057\"}.fa-tint:before{content:\"\\F043\"}.fa-tint-slash:before{content:\"\\F5C7\"}.fa-tired:before{content:\"\\F5C8\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-toilet:before{content:\"\\F7D8\"}.fa-toilet-paper:before{content:\"\\F71E\"}.fa-toilet-paper-slash:before{content:\"\\E072\"}.fa-toolbox:before{content:\"\\F552\"}.fa-tools:before{content:\"\\F7D9\"}.fa-tooth:before{content:\"\\F5C9\"}.fa-torah:before{content:\"\\F6A0\"}.fa-torii-gate:before{content:\"\\F6A1\"}.fa-tractor:before{content:\"\\F722\"}.fa-trade-federation:before{content:\"\\F513\"}.fa-trademark:before{content:\"\\F25C\"}.fa-traffic-light:before{content:\"\\F637\"}.fa-trailer:before{content:\"\\E041\"}.fa-train:before{content:\"\\F238\"}.fa-tram:before{content:\"\\F7DA\"}.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-trash:before{content:\"\\F1F8\"}.fa-trash-alt:before{content:\"\\F2ED\"}.fa-trash-restore:before{content:\"\\F829\"}.fa-trash-restore-alt:before{content:\"\\F82A\"}.fa-tree:before{content:\"\\F1BB\"}.fa-trello:before{content:\"\\F181\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-trophy:before{content:\"\\F091\"}.fa-truck:before{content:\"\\F0D1\"}.fa-truck-loading:before{content:\"\\F4DE\"}.fa-truck-monster:before{content:\"\\F63B\"}.fa-truck-moving:before{content:\"\\F4DF\"}.fa-truck-pickup:before{content:\"\\F63C\"}.fa-tshirt:before{content:\"\\F553\"}.fa-tty:before{content:\"\\F1E4\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-tv:before{content:\"\\F26C\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-twitter:before{content:\"\\F099\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-typo3:before{content:\"\\F42B\"}.fa-uber:before{content:\"\\F402\"}.fa-ubuntu:before{content:\"\\F7DF\"}.fa-uikit:before{content:\"\\F403\"}.fa-umbraco:before{content:\"\\F8E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-umbrella-beach:before{content:\"\\F5CA\"}.fa-uncharted:before{content:\"\\E084\"}.fa-underline:before{content:\"\\F0CD\"}.fa-undo:before{content:\"\\F0E2\"}.fa-undo-alt:before{content:\"\\F2EA\"}.fa-uniregistry:before{content:\"\\F404\"}.fa-unity:before{content:\"\\E049\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-university:before{content:\"\\F19C\"}.fa-unlink:before{content:\"\\F127\"}.fa-unlock:before{content:\"\\F09C\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-unsplash:before{content:\"\\E07C\"}.fa-untappd:before{content:\"\\F405\"}.fa-upload:before{content:\"\\F093\"}.fa-ups:before{content:\"\\F7E0\"}.fa-usb:before{content:\"\\F287\"}.fa-user:before{content:\"\\F007\"}.fa-user-alt:before{content:\"\\F406\"}.fa-user-alt-slash:before{content:\"\\F4FA\"}.fa-user-astronaut:before{content:\"\\F4FB\"}.fa-user-check:before{content:\"\\F4FC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-clock:before{content:\"\\F4FD\"}.fa-user-cog:before{content:\"\\F4FE\"}.fa-user-edit:before{content:\"\\F4FF\"}.fa-user-friends:before{content:\"\\F500\"}.fa-user-graduate:before{content:\"\\F501\"}.fa-user-injured:before{content:\"\\F728\"}.fa-user-lock:before{content:\"\\F502\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-user-minus:before{content:\"\\F503\"}.fa-user-ninja:before{content:\"\\F504\"}.fa-user-nurse:before{content:\"\\F82F\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-user-shield:before{content:\"\\F505\"}.fa-user-slash:before{content:\"\\F506\"}.fa-user-tag:before{content:\"\\F507\"}.fa-user-tie:before{content:\"\\F508\"}.fa-user-times:before{content:\"\\F235\"}.fa-users:before{content:\"\\F0C0\"}.fa-users-cog:before{content:\"\\F509\"}.fa-users-slash:before{content:\"\\E073\"}.fa-usps:before{content:\"\\F7E1\"}.fa-ussunnah:before{content:\"\\F407\"}.fa-utensil-spoon:before{content:\"\\F2E5\"}.fa-utensils:before{content:\"\\F2E7\"}.fa-vaadin:before{content:\"\\F408\"}.fa-vector-square:before{content:\"\\F5CB\"}.fa-venus:before{content:\"\\F221\"}.fa-venus-double:before{content:\"\\F226\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-vest:before{content:\"\\E085\"}.fa-vest-patches:before{content:\"\\E086\"}.fa-viacoin:before{content:\"\\F237\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-vial:before{content:\"\\F492\"}.fa-vials:before{content:\"\\F493\"}.fa-viber:before{content:\"\\F409\"}.fa-video:before{content:\"\\F03D\"}.fa-video-slash:before{content:\"\\F4E2\"}.fa-vihara:before{content:\"\\F6A7\"}.fa-vimeo:before{content:\"\\F40A\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-vimeo-v:before{content:\"\\F27D\"}.fa-vine:before{content:\"\\F1CA\"}.fa-virus:before{content:\"\\E074\"}.fa-virus-slash:before{content:\"\\E075\"}.fa-viruses:before{content:\"\\E076\"}.fa-vk:before{content:\"\\F189\"}.fa-vnv:before{content:\"\\F40B\"}.fa-voicemail:before{content:\"\\F897\"}.fa-volleyball-ball:before{content:\"\\F45F\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-mute:before{content:\"\\F6A9\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-up:before{content:\"\\F028\"}.fa-vote-yea:before{content:\"\\F772\"}.fa-vr-cardboard:before{content:\"\\F729\"}.fa-vuejs:before{content:\"\\F41F\"}.fa-walking:before{content:\"\\F554\"}.fa-wallet:before{content:\"\\F555\"}.fa-warehouse:before{content:\"\\F494\"}.fa-watchman-monitoring:before{content:\"\\E087\"}.fa-water:before{content:\"\\F773\"}.fa-wave-square:before{content:\"\\F83E\"}.fa-waze:before{content:\"\\F83F\"}.fa-weebly:before{content:\"\\F5CC\"}.fa-weibo:before{content:\"\\F18A\"}.fa-weight:before{content:\"\\F496\"}.fa-weight-hanging:before{content:\"\\F5CD\"}.fa-weixin:before{content:\"\\F1D7\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-whatsapp-square:before{content:\"\\F40C\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-whmcs:before{content:\"\\F40D\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-wind:before{content:\"\\F72E\"}.fa-window-close:before{content:\"\\F410\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-windows:before{content:\"\\F17A\"}.fa-wine-bottle:before{content:\"\\F72F\"}.fa-wine-glass:before{content:\"\\F4E3\"}.fa-wine-glass-alt:before{content:\"\\F5CE\"}.fa-wix:before{content:\"\\F5CF\"}.fa-wizards-of-the-coast:before{content:\"\\F730\"}.fa-wodu:before{content:\"\\E088\"}.fa-wolf-pack-battalion:before{content:\"\\F514\"}.fa-won-sign:before{content:\"\\F159\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-wordpress-simple:before{content:\"\\F411\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-wpforms:before{content:\"\\F298\"}.fa-wpressr:before{content:\"\\F3E4\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-x-ray:before{content:\"\\F497\"}.fa-xbox:before{content:\"\\F412\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-y-combinator:before{content:\"\\F23B\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-yammer:before{content:\"\\F840\"}.fa-yandex:before{content:\"\\F413\"}.fa-yandex-international:before{content:\"\\F414\"}.fa-yarn:before{content:\"\\F7E3\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-yen-sign:before{content:\"\\F157\"}.fa-yin-yang:before{content:\"\\F6AD\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-youtube:before{content:\"\\F167\"}.fa-youtube-square:before{content:\"\\F431\"}.fa-zhihu:before{content:\"\\F63F\"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:400;font-display:block;src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot")) + ");src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot")) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg")) + "#fontawesome) format(\"svg\")}.fab{font-family:\"Font Awesome 5 Brands\"}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;font-display:block;src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot")) + ");src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot")) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg")) + "#fontawesome) format(\"svg\")}.fab,.far{font-weight:400}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;font-display:block;src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot")) + ");src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot")) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg")) + "#fontawesome) format(\"svg\")}.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}.fa,.fas{font-weight:900}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* Override default control style */\n.mapbox-gl-draw_ctrl-bottom-left,\n.mapbox-gl-draw_ctrl-top-left {\n  margin-left:0;\n  border-radius:0 4px 4px 0;\n}\n.mapbox-gl-draw_ctrl-top-right,\n.mapbox-gl-draw_ctrl-bottom-right {\n  margin-right:0;\n  border-radius:4px 0 0 4px;\n}\n.mapbox-gl-draw_ctrl-draw {\n  background-color:rgba(0,0,0,0.75);\n  border-color:rgba(0,0,0,0.9);\n}\n.mapbox-gl-draw_ctrl-draw > button {\n  border-color:rgba(0,0,0,0.9);\n  color:rgba(255,255,255,0.5);\n  width:30px;\n  height:30px;\n}\n.mapbox-gl-draw_ctrl-draw > button:hover {\n  background-color:rgba(0,0,0,0.85);\n  color:rgba(255,255,255,0.75);\n}\n.mapbox-gl-draw_ctrl-draw > button.active,\n.mapbox-gl-draw_ctrl-draw > button.active:hover {\n  background-color:rgba(0,0,0,0.95);\n  color:#fff;\n}\n.mapbox-gl-draw_ctrl-draw-btn {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.mapbox-gl-draw_point {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgdmlld0JveD0iMCAwIDIwIDIwIiAgIGlkPSJzdmcxOTE2NyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MStkZXZlbCtvc3htZW51IHIxMjkxMSIgICBzb2RpcG9kaTpkb2NuYW1lPSJtYXJrZXIuc3ZnIj4gIDxkZWZzICAgICBpZD0iZGVmczE5MTY5IiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMTYiICAgICBpbmtzY2FwZTpjeD0iMTQuMTY0MjUzIiAgICAgaW5rc2NhcGU6Y3k9IjguODg1NzIiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0iZmFsc2UiICAgICB1bml0cz0icHgiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3NTEiICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjA4IiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjE5MCIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiICAgICBpbmtzY2FwZTpvYmplY3Qtbm9kZXM9InRydWUiPiAgICA8aW5rc2NhcGU6Z3JpZCAgICAgICB0eXBlPSJ4eWdyaWQiICAgICAgIGlkPSJncmlkMTk3MTUiIC8+ICA8L3NvZGlwb2RpOm5hbWVkdmlldz4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhMTkxNzIiPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGUgLz4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8ZyAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgaWQ9ImxheWVyMSIgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEwMzIuMzYyMikiPiAgICA8cGF0aCAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgICAgICAgZD0ibSAzNiwxMDQwLjM2MjIgYyA2ZS02LDMuMzA5MyAtNS45ODg2MTIsMTAgLTUuOTg4NjEyLDEwIDAsMCAtNS45OTg3NzYsLTYuNjY4IC02LjAxMTM0NSwtOS45NzcyIC0wLjAxMjU3LC0zLjMwOTIgMi42NTY1NzYsLTYuMDAzOSA1Ljk2NTc5MiwtNi4wMjI3IDMuMzA5MTg5LC0wLjAxOSA2LjAwODg0LDIuNjQ1MiA2LjAzMzk5Miw1Ljk1NDMiICAgICAgIGlkPSJwYXRoMTI1NjEiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2Nzc2MiIC8+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBkPSJtIDM0LjAwMDExNSwxMDQwLjM2MjIgYyAtNWUtNiwyLjIwNjIgLTMuOTkyNTIzLDcuMDAwMSAtMy45OTI1MjMsNy4wMDAxIDAsMCAtMy45OTkyOTEsLTQuNzc4NyAtNC4wMDc2NzksLTYuOTg0OSAtMC4wMDg0LC0yLjIwNjIgMS43NzEwODIsLTQuMDAyNyAzLjk3NzMxLC00LjAxNTMgMi4yMDYyMSwtMC4wMTMgNC4wMDYwMzcsMS43NjM1IDQuMDIyNzc3LDMuOTY5NyIgICAgICAgaWQ9InBhdGgxMjU2MyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NzYyIgLz4gICAgPHBhdGggICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiICAgICAgIGQ9Ik0gOS45NjY3OTY5LDEwMTQuMzYyMiBDIDYuNjU3NTgwOSwxMDE0LjM4MSAzLjk4NzQzLDEwMTcuMDc2NCA0LDEwMjAuMzg1NiBjIDAuMDEyNTY5LDMuMzA5MiA2LjAxMTcxOSw4Ljk3NjYgNi4wMTE3MTksOC45NzY2IDAsMCA1Ljk4ODI4NywtNS42OTA3IDUuOTg4MjgxLC05IGwgMCwtMC4wNDUgYyAtMC4wMjUxNSwtMy4zMDkxIC0yLjcyNDAxNCwtNS45NzQxIC02LjAzMzIwMzEsLTUuOTU1MSB6IG0gMC4wMDk3NywyIGMgMi4yMDYyMDYxLC0wLjAxMyA0LjAwNjY5MzEsMS43NjI2IDQuMDIzNDMzMSwzLjk2ODggbCAwLDAuMDMxIGMgLTVlLTYsMi4yMDYyIC0zLjk5MjE4OCw2IC0zLjk5MjE4OCw2IDAsMCAtMy45OTk0MjQsLTMuNzc4MiAtNC4wMDc4MTIsLTUuOTg0NCAtMC4wMDg0LC0yLjIwNjIgMS43NzAzMzQ1LC00LjAwMyAzLjk3NjU2MjUsLTQuMDE1NiB6IiAgICAgICBpZD0icGF0aDEyNTY4IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNzY3NjY2Njc2NzYyIgLz4gICAgPHBhdGggICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46YmV2ZWw7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lIiAgICAgICBkPSJNIDEwIDIgQyA2LjY4NjI5MiAyIDQgNC42ODYzIDQgOCBDIDQgMTEuMzEzNyAxMCAxNyAxMCAxNyBDIDEwIDE3IDE2IDExLjMxMzcgMTYgOCBDIDE2IDQuNjg2MyAxMy4zMTM3MDggMiAxMCAyIHogTSAxMCA0IEMgMTIuMDcxMDY4IDQgMTMuNzUgNS42Nzg5IDEzLjc1IDcuNzUgQyAxMy43NSA5LjIwNTMyNzggMTEuOTMxMTEgMTEuNjQ0MzkzIDEwLjgzMDA3OCAxMyBMIDkuMTY5OTIxOSAxMyBDIDguMDY4ODkwMyAxMS42NDQzOTMgNi4yNSA5LjIwNTMyNzggNi4yNSA3Ljc1IEMgNi4yNSA1LjY3ODkgNy45Mjg5MzIgNCAxMCA0IHogIiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEwMzIuMzYyMikiICAgICAgIGlkPSJwYXRoMTczMDUiIC8+ICA8L2c+PC9zdmc+);\n}\n.mapbox-gl-draw_polygon {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgdmlld0JveD0iMCAwIDIwIDIwIiAgIGlkPSJzdmcxOTE2NyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MStkZXZlbCtvc3htZW51IHIxMjkxMSIgICBzb2RpcG9kaTpkb2NuYW1lPSJzcXVhcmUuc3ZnIj4gIDxkZWZzICAgICBpZD0iZGVmczE5MTY5IiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMTEuMzEzNzA4IiAgICAgaW5rc2NhcGU6Y3g9IjExLjY4MTYzNCIgICAgIGlua3NjYXBlOmN5PSI5LjI4NTcxNDMiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0idHJ1ZSIgICAgIHVuaXRzPSJweCIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSIwIiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjIzIiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+ICAgIDxpbmtzY2FwZTpncmlkICAgICAgIHR5cGU9Inh5Z3JpZCIgICAgICAgaWQ9ImdyaWQxOTcxNSIgLz4gIDwvc29kaXBvZGk6bmFtZWR2aWV3PiAgPG1ldGFkYXRhICAgICBpZD0ibWV0YWRhdGExOTE3MiI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZSAvPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiICAgICBpZD0ibGF5ZXIxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+ICAgIDxwYXRoICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41O21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiICAgICAgIGQ9Im0gNSwxMDM5LjM2MjIgMCw2IDIsMiA2LDAgMiwtMiAwLC02IC0yLC0yIC02LDAgeiBtIDMsMCA0LDAgMSwxIDAsNCAtMSwxIC00LDAgLTEsLTEgMCwtNCB6IiAgICAgICBpZD0icmVjdDc3OTciICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjY2NjY2NjIiAvPiAgICA8Y2lyY2xlICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS42MDAwMDAwMjttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBpZD0icGF0aDQzNjQiICAgICAgIGN4PSI2IiAgICAgICBjeT0iMTA0Ni4zNjIyIiAgICAgICByPSIyIiAvPiAgICA8Y2lyY2xlICAgICAgIGlkPSJwYXRoNDM2OCIgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjYwMDAwMDAyO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiICAgICAgIGN4PSIxNCIgICAgICAgY3k9IjEwNDYuMzYyMiIgICAgICAgcj0iMiIgLz4gICAgPGNpcmNsZSAgICAgICBpZD0icGF0aDQzNzAiICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS42MDAwMDAwMjttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBjeD0iNiIgICAgICAgY3k9IjEwMzguMzYyMiIgICAgICAgcj0iMiIgLz4gICAgPGNpcmNsZSAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuNjAwMDAwMDI7bWFya2VyOm5vbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgICAgICAgaWQ9InBhdGg0MzcyIiAgICAgICBjeD0iMTQiICAgICAgIGN5PSIxMDM4LjM2MjIiICAgICAgIHI9IjIiIC8+ICA8L2c+PC9zdmc+);\n}\n.mapbox-gl-draw_line {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgdmlld0JveD0iMCAwIDIwIDIwIiAgIGlkPSJzdmcxOTE2NyIgICB2ZXJzaW9uPSIxLjEiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MStkZXZlbCtvc3htZW51IHIxMjkxMSIgICBzb2RpcG9kaTpkb2NuYW1lPSJsaW5lLnN2ZyI+ICA8ZGVmcyAgICAgaWQ9ImRlZnMxOTE2OSIgLz4gIDxzb2RpcG9kaTpuYW1lZHZpZXcgICAgIGlkPSJiYXNlIiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiICAgICBib3JkZXJvcGFjaXR5PSIxLjAiICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgICAgIGlua3NjYXBlOnpvb209IjE2IiAgICAgaW5rc2NhcGU6Y3g9IjEyLjg5ODc3NSIgICAgIGlua3NjYXBlOmN5PSI5LjU4OTAxNTIiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0idHJ1ZSIgICAgIHVuaXRzPSJweCIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSIwIiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjIzIiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+ICAgIDxpbmtzY2FwZTpncmlkICAgICAgIHR5cGU9Inh5Z3JpZCIgICAgICAgaWQ9ImdyaWQxOTcxNSIgLz4gIDwvc29kaXBvZGk6bmFtZWR2aWV3PiAgPG1ldGFkYXRhICAgICBpZD0ibWV0YWRhdGExOTE3MiI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZSAvPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiICAgICBpZD0ibGF5ZXIxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBkPSJtIDEzLjUsMTAzNS44NjIyIGMgLTEuMzgwNzEyLDAgLTIuNSwxLjExOTMgLTIuNSwyLjUgMCwwLjMyMDggMC4wNDYxNCwwLjYyNDQgMC4xNTYyNSwwLjkwNjMgbCAtMy43NSwzLjc1IGMgLTAuMjgxODM2LC0wLjExMDIgLTAuNTg1NDIxLC0wLjE1NjMgLTAuOTA2MjUsLTAuMTU2MyAtMS4zODA3MTIsMCAtMi41LDEuMTE5MyAtMi41LDIuNSAwLDEuMzgwNyAxLjExOTI4OCwyLjUgMi41LDIuNSAxLjM4MDcxMiwwIDIuNSwtMS4xMTkzIDIuNSwtMi41IDAsLTAuMzIwOCAtMC4wNDYxNCwtMC42MjQ0IC0wLjE1NjI1LC0wLjkwNjIgbCAzLjc1LC0zLjc1IGMgMC4yODE4MzYsMC4xMTAxIDAuNTg1NDIxLDAuMTU2MiAwLjkwNjI1LDAuMTU2MiAxLjM4MDcxMiwwIDIuNSwtMS4xMTkzIDIuNSwtMi41IDAsLTEuMzgwNyAtMS4xMTkyODgsLTIuNSAtMi41LC0yLjUgeiIgICAgICAgaWQ9InJlY3Q2NDY3IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPiAgPC9nPjwvc3ZnPg==);\n}\n.mapbox-gl-draw_trash {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjIwIiAgIGhlaWdodD0iMjAiICAgaWQ9InN2ZzU3MzgiICAgdmVyc2lvbj0iMS4xIiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTErZGV2ZWwrb3N4bWVudSByMTI5MTEiICAgc29kaXBvZGk6ZG9jbmFtZT0idHJhc2guc3ZnIiAgIHZpZXdCb3g9IjAgMCAyMCAyMCI+ICA8ZGVmcyAgICAgaWQ9ImRlZnM1NzQwIiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6em9vbT0iMjIuNjI3NDE3IiAgICAgaW5rc2NhcGU6Y3g9IjEyLjEyODE4NCIgICAgIGlua3NjYXBlOmN5PSI4Ljg0NjEzMDciICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiICAgICBzaG93Z3JpZD0idHJ1ZSIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTAzMyIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc1MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSIyMCIgICAgIGlua3NjYXBlOndpbmRvdy15PSIyMyIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiICAgICBpbmtzY2FwZTpzbmFwLXNtb290aC1ub2Rlcz0idHJ1ZSIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+ICAgIDxpbmtzY2FwZTpncmlkICAgICAgIHR5cGU9Inh5Z3JpZCIgICAgICAgaWQ9ImdyaWQ1NzQ2IiAgICAgICBlbXBzcGFjaW5nPSI1IiAgICAgICB2aXNpYmxlPSJ0cnVlIiAgICAgICBlbmFibGVkPSJ0cnVlIiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiIC8+ICA8L3NvZGlwb2RpOm5hbWVkdmlldz4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhNTc0MyI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZSAvPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiICAgICBpZD0ibGF5ZXIxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+ICAgIDxwYXRoICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45OTk5OTk4MjttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAgICAgICBkPSJtIDEwLDEwMzUuNzc0MyBjIC0wLjc4NDkyNTMsOGUtNCAtMS40OTY4Mzc2LDAuNDYwNiAtMS44MjAzMTI1LDEuMTc1OCBsIC0zLjE3OTY4NzUsMCAtMSwxIDAsMSAxMiwwIDAsLTEgLTEsLTEgLTMuMTc5Njg4LDAgYyAtMC4zMjM0NzUsLTAuNzE1MiAtMS4wMzUzODcsLTEuMTc1IC0xLjgyMDMxMiwtMS4xNzU4IHogbSAtNSw0LjU4NzkgMCw3IGMgMCwxIDEsMiAyLDIgbCA2LDAgYyAxLDAgMiwtMSAyLC0yIGwgMCwtNyAtMiwwIDAsNS41IC0xLjUsMCAwLC01LjUgLTMsMCAwLDUuNSAtMS41LDAgMCwtNS41IHoiICAgICAgIGlkPSJyZWN0MjQzOS03IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2MiIC8+ICA8L2c+PC9zdmc+);\n}\n\n.mapbox-gl-draw_uncombine {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICBpZD0ic3ZnNTczOCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idW5jb21iaW5lLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczU3NDAiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0MTAzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDE4NCIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgeDE9IjMwMDMiCiAgICAgICB5MT0iMTAiCiAgICAgICB4Mj0iMzAxNyIKICAgICAgIHkyPSIxMCIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSwyLjYxNzE4NzRlLTYpIiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0MTAzIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A0MTA1IiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eTowOyIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQxMDciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuMzEzNzA4IgogICAgIGlua3NjYXBlOmN4PSItMTAuMjczOTQ2IgogICAgIGlua3NjYXBlOmN5PSI2LjkzMDM0NCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjIwNzgiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iOTAwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOTYiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6YmJveC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpvYmplY3Qtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1zbW9vdGgtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1vdGhlcnM9ImZhbHNlIgogICAgIGlua3NjYXBlOnNuYXAtbm9kZXM9ImZhbHNlIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDU3NDYiCiAgICAgICBlbXBzcGFjaW5nPSIyIgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiCiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiCiAgICAgICBzcGFjaW5neD0iMC41cHgiCiAgICAgICBzcGFjaW5neT0iMC41cHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIG9wYWNpdHk9IjAuMDU4ODIzNTMiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTc0MyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTAzMi4zNjIyKSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIKICAgICAgIGQ9Ik0gMTIuMDA1ODU5IDIgQyAxMS43NTAzNiAyIDExLjQ5NDYwNSAyLjA5NzE4NyAxMS4yOTg4MjggMi4yOTI5Njg4IEwgMTAuMzAyNzM0IDMuMjg5MDYyNSBDIDkuOTExMTgwNCAzLjY4MDYyNiA5LjkxMTE4MDQgNC4zMTE1NjE1IDEwLjMwMjczNCA0LjcwMzEyNSBMIDExLjMwMjczNCA1LjcwMTE3MTkgQyAxMS42OTQyODggNi4wOTI3MzU0IDEyLjMyMzI5IDYuMDkyNzM1NCAxMi43MTQ4NDQgNS43MDExNzE5IEwgMTMuNzEwOTM4IDQuNzA1MDc4MSBDIDE0LjEwMjQ5MSA0LjMxMzUxNDYgMTQuMTAyNDkxIDMuNjgyNTc5MSAxMy43MTA5MzggMy4yOTEwMTU2IEwgMTIuNzEyODkxIDIuMjkyOTY4OCBDIDEyLjUxNzExNCAyLjA5NzE4NyAxMi4yNjEzNTkgMiAxMi4wMDU4NTkgMiB6IE0gMTYuMDAxOTUzIDUuOTk0MTQwNiBDIDE1Ljc0NjQ2MyA1Ljk5NDE0MDYgMTUuNDkwNjkyIDYuMDkzMjczNSAxNS4yOTQ5MjIgNi4yODkwNjI1IEwgMTQuMjk4ODI4IDcuMjg1MTU2MiBDIDEzLjkwNzI4OSA3LjY3NjczNDIgMTMuOTA3Mjg5IDguMzA1Njg3NyAxNC4yOTg4MjggOC42OTcyNjU2IEwgMTUuMjk2ODc1IDkuNjk3MjY1NiBDIDE1LjY4ODQxNCAxMC4wODg4NDQgMTYuMzE5Mzk4IDEwLjA4ODg0NCAxNi43MTA5MzggOS42OTcyNjU2IEwgMTcuNzA3MDMxIDguNzAxMTcxOSBDIDE4LjA5ODU3MSA4LjMwOTU5MzkgMTguMDk4NTcxIDcuNjc4Njg3MyAxNy43MDcwMzEgNy4yODcxMDk0IEwgMTYuNzA4OTg0IDYuMjg5MDYyNSBDIDE2LjUxMzIxNSA2LjA5MzI3MzUgMTYuMjU3NDQzIDUuOTk0MTQwNiAxNi4wMDE5NTMgNS45OTQxNDA2IHogTSA5IDcgQyA4IDcgOCA4IDguNSA4LjUgQyA4LjgzMzMzMyA4LjgzMzMgOS41IDkuNSA5LjUgOS41IEwgOC41IDEwLjUgQyA4LjUgMTAuNSA4IDExIDguNSAxMS41IEMgOSAxMiA5LjUgMTEuNSA5LjUgMTEuNSBMIDEwLjUgMTAuNSBMIDExLjUgMTEuNSBDIDEyIDEyIDEzIDEyIDEzIDExIEwgMTMgNyBMIDkgNyB6IE0gNC4wNDg4MjgxIDEwLjAwMTk1MyBDIDMuNzkzMzA4NyAxMC4wMDE5NTMgMy41Mzc1ODkxIDEwLjA5OTEyOSAzLjM0MTc5NjkgMTAuMjk0OTIyIEwgMi4yOTg4MjgxIDExLjMzNzg5MSBDIDEuOTA3MjQzNyAxMS43Mjk0NzYgMS45MDcyNDM3IDEyLjM2MDM2OCAyLjI5ODgyODEgMTIuNzUxOTUzIEwgNy4yNDgwNDY5IDE3LjcwMTE3MiBDIDcuNjM5NjMxMyAxOC4wOTI3NTcgOC4yNzA1MjUgMTguMDkyNzU3IDguNjYyMTA5NCAxNy43MDExNzIgTCA5LjcwNTA3ODEgMTYuNjU4MjAzIEMgMTAuMDk2NjYzIDE2LjI2NjYxOCAxMC4wOTY2NjMgMTUuNjM1NzI2IDkuNzA1MDc4MSAxNS4yNDQxNDEgTCA0Ljc1NTg1OTQgMTAuMjk0OTIyIEMgNC41NjAwNjcyIDEwLjA5OTEyOSA0LjMwNDM0NzUgMTAuMDAxOTUzIDQuMDQ4ODI4MSAxMC4wMDE5NTMgeiAiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEwMzIuMzYyMikiCiAgICAgICBpZD0icmVjdDkxOTgiIC8+CiAgPC9nPgo8L3N2Zz4K);\n}\n.mapbox-gl-draw_combine {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICBpZD0ic3ZnNTczOCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iY29tYmluZS5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1NzQwIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDEwMyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQxODQiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHgxPSIzMDAzIgogICAgICAgeTE9IjEwIgogICAgICAgeDI9IjMwMTciCiAgICAgICB5Mj0iMTAiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDEsMi42MTcxODc0ZS02KSIgLz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDEwMyI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjE7IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDEwNSIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MDsiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3A0MTA3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjE2IgogICAgIGlua3NjYXBlOmN4PSIyLjQyMzAwNiIKICAgICBpbmtzY2FwZTpjeT0iMTIuMTczMTY1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMjA3OCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDU0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI5MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIHNob3dndWlkZXM9ImZhbHNlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOmJib3gtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6b2JqZWN0LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLXNtb290aC1ub2Rlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLW90aGVycz0iZmFsc2UiCiAgICAgaW5rc2NhcGU6c25hcC1ub2Rlcz0iZmFsc2UiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNTc0NiIKICAgICAgIGVtcHNwYWNpbmc9IjIiCiAgICAgICB2aXNpYmxlPSJ0cnVlIgogICAgICAgZW5hYmxlZD0idHJ1ZSIKICAgICAgIHNuYXB2aXNpYmxlZ3JpZGxpbmVzb25seT0idHJ1ZSIKICAgICAgIHNwYWNpbmd4PSIwLjVweCIKICAgICAgIHNwYWNpbmd5PSIwLjVweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4wNTg4MjM1MyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1NzQzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMDMyLjM2MjIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0iTSAxMi4wNTA3ODEgMiBDIDExLjc5NTI2MiAyIDExLjUzOTU0MiAyLjA5NzE3NjIgMTEuMzQzNzUgMi4yOTI5Njg4IEwgMTAuMjk4ODI4IDMuMzM3ODkwNiBDIDkuOTA3MjQzNyAzLjcyOTQ3NTcgOS45MDcyNDM3IDQuMzYwMzY4IDEwLjI5ODgyOCA0Ljc1MTk1MzEgTCAxNS4yNDgwNDcgOS43MDExNzE5IEMgMTUuNjM5NjMxIDEwLjA5Mjc1NyAxNi4yNzA1MjUgMTAuMDkyNzU3IDE2LjY2MjEwOSA5LjcwMTE3MTkgTCAxNy43MDcwMzEgOC42NTYyNSBDIDE4LjA5ODYxNiA4LjI2NDY2NDkgMTguMDk4NjE2IDcuNjMzNzcyNiAxNy43MDcwMzEgNy4yNDIxODc1IEwgMTIuNzU3ODEyIDIuMjkyOTY4OCBDIDEyLjU2MjAyIDIuMDk3MTc2MiAxMi4zMDYzMDEgMiAxMi4wNTA3ODEgMiB6IE0gOCA4IEMgNyA4IDcgOSA3LjUgOS41IEMgNy44MzMzMzMgOS44MzMzIDguNSAxMC41IDguNSAxMC41IEwgNy41IDExLjUgQyA3LjUgMTEuNSA3IDEyIDcuNSAxMi41IEMgOCAxMyA4LjUgMTIuNSA4LjUgMTIuNSBMIDkuNSAxMS41IEwgMTAuNSAxMi41IEMgMTEgMTMgMTIgMTMgMTIgMTIgTCAxMiA4IEwgOCA4IHogTSA0IDEwLjAwMzkwNiBDIDMuNzQ0NTEgMTAuMDAzOTA2IDMuNDkwNjkxNiAxMC4xMDMwMzkgMy4yOTQ5MjE5IDEwLjI5ODgyOCBMIDIuMjk4ODI4MSAxMS4yOTQ5MjIgQyAxLjkwNzI4ODggMTEuNjg2NSAxLjkwNzI4ODggMTIuMzE1NDUzIDIuMjk4ODI4MSAxMi43MDcwMzEgTCAzLjI5Njg3NSAxMy43MDcwMzEgQyAzLjY4ODQxNDQgMTQuMDk4NjA5IDQuMzE5Mzk4MSAxNC4wOTg2MDkgNC43MTA5Mzc1IDEzLjcwNzAzMSBMIDUuNzA3MDMxMiAxMi43MTA5MzggQyA2LjA5ODU3MDYgMTIuMzE5MzYgNi4wOTg1NzA2IDExLjY4ODQ1MyA1LjcwNzAzMTIgMTEuMjk2ODc1IEwgNC43MDcwMzEyIDEwLjI5ODgyOCBDIDQuNTExMjYxNiAxMC4xMDMwMzkgNC4yNTU0OSAxMC4wMDM5MDYgNCAxMC4wMDM5MDYgeiBNIDcuOTk2MDkzOCAxNCBDIDcuNzQwNTk0MiAxNCA3LjQ4NDgzOTUgMTQuMDk3MTg3IDcuMjg5MDYyNSAxNC4yOTI5NjkgTCA2LjI5NDkyMTkgMTUuMjg5MDYyIEMgNS45MDMzNjc5IDE1LjY4MDYyNiA1LjkwMzM2NzkgMTYuMzExNTYxIDYuMjk0OTIxOSAxNi43MDMxMjUgTCA3LjI5Mjk2ODggMTcuNzAxMTcyIEMgNy42ODQ1MjI3IDE4LjA5MjczNSA4LjMxMzUyNDIgMTguMDkyNzM1IDguNzA1MDc4MSAxNy43MDExNzIgTCA5LjcwMTE3MTkgMTYuNzA1MDc4IEMgMTAuMDkyNzI2IDE2LjMxMzUxNSAxMC4wOTI3MjYgMTUuNjg0NTMyIDkuNzAxMTcxOSAxNS4yOTI5NjkgTCA4LjcwMzEyNSAxNC4yOTI5NjkgQyA4LjUwNzM0OCAxNC4wOTcxODcgOC4yNTE1OTMzIDE0IDcuOTk2MDkzOCAxNCB6ICIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTAzMi4zNjIyKSIKICAgICAgIGlkPSJyZWN0OTE5OCIgLz4KICA8L2c+Cjwvc3ZnPgo=);\n}\n\n.mapboxgl-map.mouse-pointer .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: pointer;\n}\n.mapboxgl-map.mouse-move .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: move;\n}\n.mapboxgl-map.mouse-add .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: crosshair;\n}\n.mapboxgl-map.mouse-move.mode-direct_select .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.mapboxgl-map.mode-direct_select.feature-vertex.mouse-move .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: move;\n}\n.mapboxgl-map.mode-direct_select.feature-midpoint.mouse-pointer .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: cell;\n}\n.mapboxgl-map.mode-direct_select.feature-feature.mouse-move .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: move;\n}\n.mapboxgl-map.mode-static.mouse-pointer  .mapboxgl-canvas-container.mapboxgl-interactive {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.mapbox-gl-draw_boxselect {\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    background: rgba(0,0,0,.1);\n    border: 2px dotted #fff;\n    opacity: 0.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/mapbox-gl/dist/mapbox-gl.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/mapbox-gl/dist/mapbox-gl.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mapboxgl-map {\n    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    overflow: hidden;\n    position: relative;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.mapboxgl-map:-webkit-full-screen {\n    width: 100%;\n    height: 100%;\n}\n\n.mapboxgl-canary {\n    background-color: salmon;\n}\n\n.mapboxgl-canvas-container.mapboxgl-interactive,\n.mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass {\n    cursor: -webkit-grab;\n    cursor: -moz-grab;\n    cursor: grab;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.mapboxgl-canvas-container.mapboxgl-interactive:active,\n.mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass:active {\n    cursor: -webkit-grabbing;\n    cursor: -moz-grabbing;\n    cursor: grabbing;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas {\n    touch-action: pan-x pan-y;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan,\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas {\n    touch-action: pinch-zoom;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {\n    touch-action: none;\n}\n\n.mapboxgl-ctrl-top-left,\n.mapboxgl-ctrl-top-right,\n.mapboxgl-ctrl-bottom-left,\n.mapboxgl-ctrl-bottom-right { position: absolute; pointer-events: none; z-index: 2; }\n.mapboxgl-ctrl-top-left     { top: 0; left: 0; }\n.mapboxgl-ctrl-top-right    { top: 0; right: 0; }\n.mapboxgl-ctrl-bottom-left  { bottom: 0; left: 0; }\n.mapboxgl-ctrl-bottom-right { right: 0; bottom: 0; }\n\n.mapboxgl-ctrl { clear: both; pointer-events: auto; }\n.mapboxgl-ctrl-top-left .mapboxgl-ctrl     { margin: 10px 0 0 10px; float: left; }\n.mapboxgl-ctrl-top-right .mapboxgl-ctrl    { margin: 10px 10px 0 0; float: right; }\n.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl  { margin: 0 0 10px 10px; float: left; }\n.mapboxgl-ctrl-bottom-right .mapboxgl-ctrl { margin: 0 10px 10px 0; float: right; }\n\n.mapboxgl-ctrl-group {\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n}\n\n.mapboxgl-ctrl-group:not(:empty) {\n    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.mapboxgl-ctrl-group > button {\n    width: 30px;\n    height: 30px;\n    display: block;\n    padding: 0;\n    outline: none;\n    border: 0;\n    box-sizing: border-box;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.mapboxgl-ctrl-group > button + button {\n    border-top: 1px solid #ddd;\n}\n\n/* https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */\n.mapboxgl-ctrl > button::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n.mapboxgl-ctrl > button:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.mapboxgl-ctrl-icon,\n.mapboxgl-ctrl-icon > .mapboxgl-ctrl-compass-arrow {\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.mapboxgl-ctrl-icon {\n    padding: 5px;\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23333333;' d='m 7,9 c -0.554,0 -1,0.446 -1,1 0,0.554 0.446,1 1,1 l 6,0 c 0.554,0 1,-0.446 1,-1 0,-0.554 -0.446,-1 -1,-1 z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23333333;' d='M 10 6 C 9.446 6 9 6.4459904 9 7 L 9 9 L 7 9 C 6.446 9 6 9.446 6 10 C 6 10.554 6.446 11 7 11 L 9 11 L 9 13 C 9 13.55401 9.446 14 10 14 C 10.554 14 11 13.55401 11 13 L 11 11 L 13 11 C 13.554 11 14 10.554 14 10 C 14 9.446 13.554 9 13 9 L 11 9 L 11 7 C 11 6.4459904 10.554 6 10 6 z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate:disabled {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23aaa'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M 10,4 C 9,4 9,5 9,5 L 9,5.1 C 7.0357113,5.5006048 5.5006048,7.0357113 5.1,9 L 5,9 c 0,0 -1,0 -1,1 0,1 1,1 1,1 l 0.1,0 c 0.4006048,1.964289 1.9357113,3.499395 3.9,3.9 L 9,15 c 0,0 0,1 1,1 1,0 1,-1 1,-1 l 0,-0.1 c 1.964289,-0.400605 3.499395,-1.935711 3.9,-3.9 l 0.1,0 c 0,0 1,0 1,-1 C 16,9 15,9 15,9 L 14.9,9 C 14.499395,7.0357113 12.964289,5.5006048 11,5.1 L 11,5 c 0,0 0,-1 -1,-1 z m 0,2.5 c 1.932997,0 3.5,1.5670034 3.5,3.5 0,1.932997 -1.567003,3.5 -3.5,3.5 C 8.0670034,13.5 6.5,11.932997 6.5,10 6.5,8.0670034 8.0670034,6.5 10,6.5 Z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E %3Cpath d='M 10,4 C 9,4 9,5 9,5 L 9,5.1 C 7.0357113,5.5006048 5.5006048,7.0357113 5.1,9 L 5,9 c 0,0 -1,0 -1,1 0,1 1,1 1,1 l 0.1,0 c 0.4006048,1.964289 1.9357113,3.499395 3.9,3.9 L 9,15 c 0,0 0,1 1,1 1,0 1,-1 1,-1 l 0,-0.1 c 1.964289,-0.400605 3.499395,-1.935711 3.9,-3.9 l 0.1,0 c 0,0 1,0 1,-1 C 16,9 15,9 15,9 L 14.9,9 C 14.499395,7.0357113 12.964289,5.5006048 11,5.1 L 11,5 c 0,0 0,-1 -1,-1 z m 0,2.5 c 1.932997,0 3.5,1.5670034 3.5,3.5 0,1.932997 -1.567003,3.5 -3.5,3.5 C 8.0670034,13.5 6.5,11.932997 6.5,10 6.5,8.0670034 8.0670034,6.5 10,6.5 Z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-waiting {\n    -webkit-animation: mapboxgl-spin 2s infinite linear;\n    -moz-animation: mapboxgl-spin 2s infinite linear;\n    -o-animation: mapboxgl-spin 2s infinite linear;\n    -ms-animation: mapboxgl-spin 2s infinite linear;\n    animation: mapboxgl-spin 2s infinite linear;\n}\n\n@-webkit-keyframes mapboxgl-spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n\n@-moz-keyframes mapboxgl-spin {\n    0% { -moz-transform: rotate(0deg); }\n    100% { -moz-transform: rotate(360deg); }\n}\n\n@-o-keyframes mapboxgl-spin {\n    0% { -o-transform: rotate(0deg); }\n    100% { -o-transform: rotate(360deg); }\n}\n\n@-ms-keyframes mapboxgl-spin {\n    0% { -ms-transform: rotate(0deg); }\n    100% { -ms-transform: rotate(360deg); }\n}\n\n@keyframes mapboxgl-spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-fullscreen {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M 5 4 C 4.5 4 4 4.5 4 5 L 4 6 L 4 9 L 4.5 9 L 5.7773438 7.296875 C 6.7771319 8.0602131 7.835765 8.9565728 8.890625 10 C 7.8257121 11.0633 6.7761791 11.951675 5.78125 12.707031 L 4.5 11 L 4 11 L 4 15 C 4 15.5 4.5 16 5 16 L 9 16 L 9 15.5 L 7.2734375 14.205078 C 8.0428931 13.187886 8.9395441 12.133481 9.9609375 11.068359 C 11.042371 12.14699 11.942093 13.2112 12.707031 14.21875 L 11 15.5 L 11 16 L 14 16 L 15 16 C 15.5 16 16 15.5 16 15 L 16 14 L 16 11 L 15.5 11 L 14.205078 12.726562 C 13.177985 11.949617 12.112718 11.043577 11.037109 10.009766 C 12.151856 8.981061 13.224345 8.0798624 14.228516 7.3046875 L 15.5 9 L 16 9 L 16 5 C 16 4.5 15.5 4 15 4 L 11 4 L 11 4.5 L 12.703125 5.7773438 C 11.932647 6.7864834 11.026693 7.8554712 9.9707031 8.9199219 C 8.9584739 7.8204943 8.0698767 6.7627188 7.3046875 5.7714844 L 9 4.5 L 9 4 L 6 4 L 5 4 z '/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-shrink {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23000000;' d='M 4.2421875 3.4921875 A 0.750075 0.750075 0 0 0 3.71875 4.78125 L 5.9648438 7.0273438 L 4 8.5 L 4 9 L 8 9 C 8.500001 8.9999988 9 8.4999992 9 8 L 9 4 L 8.5 4 L 7.0175781 5.9550781 L 4.78125 3.71875 A 0.750075 0.750075 0 0 0 4.2421875 3.4921875 z M 15.734375 3.4921875 A 0.750075 0.750075 0 0 0 15.21875 3.71875 L 12.984375 5.953125 L 11.5 4 L 11 4 L 11 8 C 11 8.4999992 11.499999 8.9999988 12 9 L 16 9 L 16 8.5 L 14.035156 7.0273438 L 16.28125 4.78125 A 0.750075 0.750075 0 0 0 15.734375 3.4921875 z M 4 11 L 4 11.5 L 5.9648438 12.972656 L 3.71875 15.21875 A 0.75130096 0.75130096 0 1 0 4.78125 16.28125 L 7.0273438 14.035156 L 8.5 16 L 9 16 L 9 12 C 9 11.500001 8.500001 11.000001 8 11 L 4 11 z M 12 11 C 11.499999 11.000001 11 11.500001 11 12 L 11 16 L 11.5 16 L 12.972656 14.035156 L 15.21875 16.28125 A 0.75130096 0.75130096 0 1 0 16.28125 15.21875 L 14.035156 12.972656 L 16 11.5 L 16 11 L 12 11 z '/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-compass > .mapboxgl-ctrl-compass-arrow {\n    width: 20px;\n    height: 20px;\n    margin: 5px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpolygon fill='%23333333' points='6,9 10,1 14,9'/%3E %3Cpolygon fill='%23CCCCCC' points='6,11 10,19 14,11 '/%3E %3C/svg%3E\");\n    background-repeat: no-repeat;\n    display: inline-block;\n}\n\na.mapboxgl-ctrl-logo {\n    width: 85px;\n    height: 21px;\n    margin: 0 0 -3px -3px;\n    display: block;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 84.49 21' style='enable-background:new 0 0 84.49 21;' xml:space='preserve'%3E%3Cg%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M83.25,14.26c0,0.12-0.09,0.21-0.21,0.21h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39l-1.44,2.39 c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68L76.2,6.84 c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.4-2.35 c0.06-0.11,0.18-0.17,0.3-0.17H83c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.37,3.63l2.43,3.67 C83.24,14.18,83.25,14.22,83.25,14.26z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M66.24,9.59c-0.39-1.88-1.96-3.28-3.84-3.28c-1.03,0-2.03,0.42-2.73,1.18V3.51c0-0.13-0.1-0.23-0.23-0.23h-1.4 c-0.13,0-0.23,0.11-0.23,0.23v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.11,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.73,1.18 c1.88,0,3.45-1.41,3.84-3.29C66.37,10.79,66.37,10.18,66.24,9.59L66.24,9.59z M62.08,13c-1.32,0-2.39-1.11-2.41-2.48v-0.06 c0.02-1.38,1.09-2.48,2.41-2.48s2.42,1.12,2.42,2.51S63.41,13,62.08,13z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M71.67,6.32c-1.98-0.01-3.72,1.35-4.16,3.29c-0.13,0.59-0.13,1.19,0,1.77c0.44,1.94,2.17,3.32,4.17,3.3 c2.35,0,4.26-1.87,4.26-4.19S74.04,6.32,71.67,6.32z M71.65,13.01c-1.33,0-2.42-1.12-2.42-2.51s1.08-2.52,2.42-2.52 c1.33,0,2.42,1.12,2.42,2.51S72.99,13,71.65,13.01L71.65,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M62.08,7.98c-1.32,0-2.39,1.11-2.41,2.48v0.06C59.68,11.9,60.75,13,62.08,13s2.42-1.12,2.42-2.51 S63.41,7.98,62.08,7.98z M62.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25 c0.63,0,1.17,0.57,1.17,1.27C63.24,11.2,62.73,11.76,62.08,11.76z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M71.65,7.98c-1.33,0-2.42,1.12-2.42,2.51S70.32,13,71.65,13s2.42-1.12,2.42-2.51S72.99,7.98,71.65,7.98z M71.65,11.76c-0.64,0-1.17-0.57-1.17-1.27c0-0.7,0.53-1.26,1.17-1.26s1.17,0.57,1.17,1.27C72.82,11.21,72.29,11.76,71.65,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M45.74,6.53h-1.4c-0.13,0-0.23,0.11-0.23,0.23v0.73c-0.71-0.75-1.7-1.18-2.73-1.18 c-2.17,0-3.94,1.87-3.94,4.19s1.77,4.19,3.94,4.19c1.04,0,2.03-0.43,2.73-1.19v0.73c0,0.13,0.1,0.23,0.23,0.23h1.4 c0.13,0,0.23-0.11,0.23-0.23V6.74c0-0.12-0.09-0.22-0.22-0.22C45.75,6.53,45.75,6.53,45.74,6.53z M44.12,10.53 C44.11,11.9,43.03,13,41.71,13s-2.42-1.12-2.42-2.51s1.08-2.52,2.4-2.52c1.33,0,2.39,1.11,2.41,2.48L44.12,10.53z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M41.71,7.98c-1.33,0-2.42,1.12-2.42,2.51S40.37,13,41.71,13s2.39-1.11,2.41-2.48v-0.06 C44.1,9.09,43.03,7.98,41.71,7.98z M40.55,10.49c0-0.7,0.52-1.27,1.17-1.27c0.64,0,1.14,0.56,1.17,1.25v0.04 c-0.01,0.68-0.53,1.24-1.17,1.24C41.08,11.75,40.55,11.19,40.55,10.49z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M52.41,6.32c-1.03,0-2.03,0.42-2.73,1.18V6.75c0-0.13-0.1-0.23-0.23-0.23h-1.4c-0.13,0-0.23,0.11-0.23,0.23 v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.1,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.74,1.18c2.17,0,3.94-1.87,3.94-4.19 S54.58,6.32,52.41,6.32z M52.08,13.01c-1.32,0-2.39-1.11-2.42-2.48v-0.07c0.02-1.38,1.09-2.49,2.4-2.49c1.32,0,2.41,1.12,2.41,2.51 S53.4,13,52.08,13.01L52.08,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M52.08,7.98c-1.32,0-2.39,1.11-2.42,2.48v0.06c0.03,1.38,1.1,2.48,2.42,2.48s2.41-1.12,2.41-2.51 S53.4,7.98,52.08,7.98z M52.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25c0.63,0,1.17,0.58,1.17,1.27 S52.72,11.76,52.08,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M36.08,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68c0-0.98-0.74-1.71-1.62-1.71 c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.11,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V6.74 c0.01-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03c1.09,0,2.09,0.6,2.6,1.55 c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78L36.08,14.24z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M84.34,13.59l-0.07-0.13l-1.96-2.99l1.94-2.95c0.44-0.67,0.26-1.56-0.41-2.02c-0.02,0-0.03,0-0.04-0.01 c-0.23-0.15-0.5-0.22-0.78-0.22h-1.61c-0.56,0-1.08,0.29-1.37,0.78L79.72,6.6l-0.34-0.56C79.09,5.56,78.57,5.27,78,5.27h-1.6 c-0.6,0-1.13,0.37-1.35,0.92c-2.19-1.66-5.28-1.47-7.26,0.45c-0.35,0.34-0.65,0.72-0.89,1.14c-0.9-1.62-2.58-2.72-4.5-2.72 c-0.5,0-1.01,0.07-1.48,0.23V3.51c0-0.82-0.66-1.48-1.47-1.48h-1.4c-0.81,0-1.47,0.66-1.47,1.47v3.75 c-0.95-1.36-2.5-2.18-4.17-2.19c-0.74,0-1.46,0.16-2.12,0.47c-0.24-0.17-0.54-0.26-0.84-0.26h-1.4c-0.45,0-0.87,0.21-1.15,0.56 c-0.02-0.03-0.04-0.05-0.07-0.08c-0.28-0.3-0.68-0.47-1.09-0.47h-1.39c-0.3,0-0.6,0.09-0.84,0.26c-0.67-0.3-1.39-0.46-2.12-0.46 c-1.83,0-3.43,1-4.37,2.5c-0.2-0.46-0.48-0.89-0.83-1.25c-0.8-0.81-1.89-1.25-3.02-1.25h-0.01c-0.89,0.01-1.75,0.33-2.46,0.88 c-0.74-0.57-1.64-0.88-2.57-0.88H28.1c-0.29,0-0.58,0.03-0.86,0.11c-0.28,0.06-0.56,0.16-0.82,0.28c-0.21-0.12-0.45-0.18-0.7-0.18 h-1.4c-0.82,0-1.47,0.66-1.47,1.47v7.5c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.48-0.66,1.48-1.48l0,0V9.79 c0.03-0.36,0.23-0.59,0.36-0.59c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41c0.82,0,1.47-0.66,1.47-1.47 l-0.01-4.57c0.06-0.32,0.25-0.47,0.35-0.47c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41 c0.82,0,1.47-0.66,1.47-1.47v-0.38c0.96,1.29,2.46,2.06,4.06,2.06c0.74,0,1.46-0.16,2.12-0.47c0.24,0.17,0.54,0.26,0.84,0.26h1.39 c0.3,0,0.6-0.09,0.84-0.26v2.01c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.47-0.66,1.47-1.47v-1.77c0.48,0.15,0.99,0.23,1.49,0.22 c1.7,0,3.22-0.87,4.17-2.2v0.52c0,0.82,0.66,1.47,1.47,1.47h1.4c0.3,0,0.6-0.09,0.84-0.26c0.66,0.31,1.39,0.47,2.12,0.47 c1.92,0,3.6-1.1,4.49-2.73c1.54,2.65,4.95,3.53,7.58,1.98c0.18-0.11,0.36-0.22,0.53-0.36c0.22,0.55,0.76,0.91,1.35,0.9H78 c0.56,0,1.08-0.29,1.37-0.78l0.37-0.61l0.37,0.61c0.29,0.48,0.81,0.78,1.38,0.78h1.6c0.81,0,1.46-0.66,1.45-1.46 C84.49,14.02,84.44,13.8,84.34,13.59L84.34,13.59z M35.86,14.47h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23 V9.68c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23 V6.74c0.01-0.13,0.11-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03 c1.09,0,2.09,0.6,2.6,1.55c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78l0.01,5.16C36.09,14.36,35.98,14.46,35.86,14.47 L35.86,14.47z M45.97,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V13.5c-0.7,0.76-1.69,1.18-2.72,1.18 c-2.17,0-3.94-1.87-3.94-4.19s1.77-4.19,3.94-4.19c1.03,0,2.02,0.43,2.73,1.18V6.74c0-0.13,0.1-0.23,0.23-0.23h1.4 c0.12-0.01,0.22,0.08,0.23,0.21c0,0.01,0,0.01,0,0.02v7.51h-0.01V14.24z M52.41,14.67c-1.03,0-2.02-0.43-2.73-1.18v3.97 c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.1-0.23-0.23V6.75c0-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.23,0.11,0.23,0.23v0.73 c0.71-0.76,1.7-1.18,2.73-1.18c2.17,0,3.94,1.86,3.94,4.18S54.58,14.67,52.41,14.67z M66.24,11.39c-0.39,1.87-1.96,3.29-3.84,3.29 c-1.03,0-2.02-0.43-2.73-1.18v0.73c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V3.51c0-0.13,0.1-0.23,0.23-0.23 h1.4c0.13,0,0.23,0.11,0.23,0.23v3.97c0.71-0.75,1.7-1.18,2.73-1.17c1.88,0,3.45,1.4,3.84,3.28C66.37,10.19,66.37,10.8,66.24,11.39 L66.24,11.39L66.24,11.39z M71.67,14.68c-2,0.01-3.73-1.35-4.17-3.3c-0.13-0.59-0.13-1.19,0-1.77c0.44-1.94,2.17-3.31,4.17-3.3 c2.36,0,4.26,1.87,4.26,4.19S74.03,14.68,71.67,14.68L71.67,14.68z M83.04,14.47h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39 l-1.44,2.39c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68 L76.2,6.84c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.41-2.36 c0.06-0.11,0.18-0.17,0.3-0.17h1.61c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.38,3.64l2.43,3.67 c0.02,0.03,0.03,0.07,0.03,0.12C83.25,14.38,83.16,14.47,83.04,14.47L83.04,14.47L83.04,14.47z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M10.5,1.24c-5.11,0-9.25,4.15-9.25,9.25s4.15,9.25,9.25,9.25s9.25-4.15,9.25-9.25 C19.75,5.38,15.61,1.24,10.5,1.24z M14.89,12.77c-1.93,1.93-4.78,2.31-6.7,2.31c-0.7,0-1.41-0.05-2.1-0.16c0,0-1.02-5.64,2.14-8.81 c0.83-0.83,1.95-1.28,3.13-1.28c1.27,0,2.49,0.51,3.39,1.42C16.59,8.09,16.64,11,14.89,12.77z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M10.5-0.01C4.7-0.01,0,4.7,0,10.49s4.7,10.5,10.5,10.5S21,16.29,21,10.49C20.99,4.7,16.3-0.01,10.5-0.01z M10.5,19.74c-5.11,0-9.25-4.15-9.25-9.25s4.14-9.26,9.25-9.26s9.25,4.15,9.25,9.25C19.75,15.61,15.61,19.74,10.5,19.74z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M14.74,6.25C12.9,4.41,9.98,4.35,8.23,6.1c-3.16,3.17-2.14,8.81-2.14,8.81s5.64,1.02,8.81-2.14 C16.64,11,16.59,8.09,14.74,6.25z M12.47,10.34l-0.91,1.87l-0.9-1.87L8.8,9.43l1.86-0.9l0.9-1.87l0.91,1.87l1.86,0.9L12.47,10.34z'/%3E %3Cpolygon class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' points='14.33,9.43 12.47,10.34 11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 '/%3E%3C/g%3E%3C/svg%3E\");\n}\n\na.mapboxgl-ctrl-logo.mapboxgl-compact {\n    width: 21px;\n    height: 21px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 21 21' style='enable-background:new 0 0 21 21;' xml:space='preserve'%3E%3Cg transform='translate(0,0.01)'%3E%3Cpath d='m 10.5,1.24 c -5.11,0 -9.25,4.15 -9.25,9.25 0,5.1 4.15,9.25 9.25,9.25 5.1,0 9.25,-4.15 9.25,-9.25 0,-5.11 -4.14,-9.25 -9.25,-9.25 z m 4.39,11.53 c -1.93,1.93 -4.78,2.31 -6.7,2.31 -0.7,0 -1.41,-0.05 -2.1,-0.16 0,0 -1.02,-5.64 2.14,-8.81 0.83,-0.83 1.95,-1.28 3.13,-1.28 1.27,0 2.49,0.51 3.39,1.42 1.84,1.84 1.89,4.75 0.14,6.52 z' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3Cpath d='M 10.5,-0.01 C 4.7,-0.01 0,4.7 0,10.49 c 0,5.79 4.7,10.5 10.5,10.5 5.8,0 10.5,-4.7 10.5,-10.5 C 20.99,4.7 16.3,-0.01 10.5,-0.01 Z m 0,19.75 c -5.11,0 -9.25,-4.15 -9.25,-9.25 0,-5.1 4.14,-9.26 9.25,-9.26 5.11,0 9.25,4.15 9.25,9.25 0,5.13 -4.14,9.26 -9.25,9.26 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpath d='M 14.74,6.25 C 12.9,4.41 9.98,4.35 8.23,6.1 5.07,9.27 6.09,14.91 6.09,14.91 c 0,0 5.64,1.02 8.81,-2.14 C 16.64,11 16.59,8.09 14.74,6.25 Z m -2.27,4.09 -0.91,1.87 -0.9,-1.87 -1.86,-0.91 1.86,-0.9 0.9,-1.87 0.91,1.87 1.86,0.9 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpolygon points='11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 14.33,9.43 12.47,10.34 ' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.mapboxgl-ctrl.mapboxgl-ctrl-attrib {\n    padding: 0 5px;\n    background-color: rgba(255, 255, 255, 0.5);\n    margin: 0;\n}\n\n@media screen {\n    .mapboxgl-ctrl-attrib.mapboxgl-compact {\n        margin: 10px;\n        position: relative;\n        background-color: #fff;\n        border-radius: 3px 12px 12px 3px;\n    }\n\n    .mapboxgl-ctrl-attrib.mapboxgl-compact:hover {\n        padding: 2px 24px 2px 4px;\n        visibility: visible;\n    }\n\n    .mapboxgl-ctrl-top-left > .mapboxgl-ctrl-attrib.mapboxgl-compact:hover,\n    .mapboxgl-ctrl-bottom-left > .mapboxgl-ctrl-attrib.mapboxgl-compact:hover {\n        padding: 2px 4px 2px 24px;\n        border-radius: 12px 3px 3px 12px;\n    }\n\n    .mapboxgl-ctrl-attrib.mapboxgl-compact .mapboxgl-ctrl-attrib-inner {\n        display: none;\n    }\n\n    .mapboxgl-ctrl-attrib.mapboxgl-compact:hover .mapboxgl-ctrl-attrib-inner {\n        display: block;\n    }\n\n    .mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n        content: '';\n        cursor: pointer;\n        position: absolute;\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill='%23333333' fill-rule='evenodd' d='M4,10a6,6 0 1,0 12,0a6,6 0 1,0 -12,0 M9,7a1,1 0 1,0 2,0a1,1 0 1,0 -2,0 M9,10a1,1 0 1,1 2,0l0,3a1,1 0 1,1 -2,0'/%3E %3C/svg%3E\");\n        background-color: rgba(255, 255, 255, 0.5);\n        width: 24px;\n        height: 24px;\n        box-sizing: border-box;\n        border-radius: 12px;\n    }\n\n    .mapboxgl-ctrl-bottom-right > .mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n        bottom: 0;\n        right: 0;\n    }\n\n    .mapboxgl-ctrl-top-right > .mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n        top: 0;\n        right: 0;\n    }\n\n    .mapboxgl-ctrl-top-left > .mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n        top: 0;\n        left: 0;\n    }\n\n    .mapboxgl-ctrl-bottom-left > .mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n        bottom: 0;\n        left: 0;\n    }\n}\n\n.mapboxgl-ctrl-attrib a {\n    color: rgba(0, 0, 0, 0.75);\n    text-decoration: none;\n}\n\n.mapboxgl-ctrl-attrib a:hover {\n    color: inherit;\n    text-decoration: underline;\n}\n\n/* stylelint-disable-next-line selector-class-pattern */\n.mapboxgl-ctrl-attrib .mapbox-improve-map {\n    font-weight: bold;\n    margin-left: 2px;\n}\n\n.mapboxgl-attrib-empty {\n    display: none;\n}\n\n.mapboxgl-ctrl-scale {\n    background-color: rgba(255, 255, 255, 0.75);\n    font-size: 10px;\n    border-width: medium 2px 2px;\n    border-style: none solid solid;\n    border-color: #333;\n    padding: 0 5px;\n    color: #333;\n    box-sizing: border-box;\n}\n\n.mapboxgl-popup {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-flex;\n    display: flex;\n    will-change: transform;\n    pointer-events: none;\n}\n\n.mapboxgl-popup-anchor-top,\n.mapboxgl-popup-anchor-top-left,\n.mapboxgl-popup-anchor-top-right {\n    -webkit-flex-direction: column;\n    flex-direction: column;\n}\n\n.mapboxgl-popup-anchor-bottom,\n.mapboxgl-popup-anchor-bottom-left,\n.mapboxgl-popup-anchor-bottom-right {\n    -webkit-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n}\n\n.mapboxgl-popup-anchor-left {\n    -webkit-flex-direction: row;\n    flex-direction: row;\n}\n\n.mapboxgl-popup-anchor-right {\n    -webkit-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n}\n\n.mapboxgl-popup-tip {\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n    z-index: 1;\n}\n\n.mapboxgl-popup-anchor-top .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-top: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {\n    -webkit-align-self: flex-start;\n    align-self: flex-start;\n    border-top: none;\n    border-left: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {\n    -webkit-align-self: flex-end;\n    align-self: flex-end;\n    border-top: none;\n    border-right: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-bottom: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {\n    -webkit-align-self: flex-start;\n    align-self: flex-start;\n    border-bottom: none;\n    border-left: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {\n    -webkit-align-self: flex-end;\n    align-self: flex-end;\n    border-bottom: none;\n    border-right: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-left: none;\n    border-right-color: #fff;\n}\n\n.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-right: none;\n    border-left-color: #fff;\n}\n\n.mapboxgl-popup-close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    border: 0;\n    border-radius: 0 3px 0 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\n.mapboxgl-popup-close-button:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.mapboxgl-popup-content {\n    position: relative;\n    background: #fff;\n    border-radius: 3px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    padding: 10px 10px 15px;\n    pointer-events: auto;\n}\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {\n    border-top-left-radius: 0;\n}\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {\n    border-top-right-radius: 0;\n}\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {\n    border-bottom-left-radius: 0;\n}\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {\n    border-bottom-right-radius: 0;\n}\n\n.mapboxgl-marker {\n    position: absolute;\n    top: 0;\n    left: 0;\n    will-change: transform;\n}\n\n.mapboxgl-user-location-dot {\n    background-color: #1da1f2;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);\n}\n\n.mapboxgl-user-location-dot::before {\n    background-color: #1da1f2;\n    content: '';\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    position: absolute;\n    -webkit-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    -moz-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    -ms-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    animation: mapboxgl-user-location-dot-pulse 2s infinite;\n}\n\n.mapboxgl-user-location-dot::after {\n    border-radius: 50%;\n    border: 2px solid #fff;\n    content: '';\n    height: 19px;\n    left: -2px;\n    position: absolute;\n    top: -2px;\n    width: 19px;\n    box-sizing: border-box;\n}\n\n@-webkit-keyframes mapboxgl-user-location-dot-pulse {\n    0%   { -webkit-transform: scale(1); opacity: 1; }\n    70%  { -webkit-transform: scale(3); opacity: 0; }\n    100% { -webkit-transform: scale(1); opacity: 0; }\n}\n\n@-ms-keyframes mapboxgl-user-location-dot-pulse {\n    0%   { -ms-transform: scale(1); opacity: 1; }\n    70%  { -ms-transform: scale(3); opacity: 0; }\n    100% { -ms-transform: scale(1); opacity: 0; }\n}\n\n@keyframes mapboxgl-user-location-dot-pulse {\n    0%   { transform: scale(1); opacity: 1; }\n    70%  { transform: scale(3); opacity: 0; }\n    100% { transform: scale(1); opacity: 0; }\n}\n\n.mapboxgl-user-location-dot-stale {\n    background-color: #aaa;\n}\n\n.mapboxgl-user-location-dot-stale::after {\n    display: none;\n}\n\n.mapboxgl-crosshair,\n.mapboxgl-crosshair .mapboxgl-interactive,\n.mapboxgl-crosshair .mapboxgl-interactive:active {\n    cursor: crosshair;\n}\n\n.mapboxgl-boxzoom {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    background: #fff;\n    border: 2px dotted #202020;\n    opacity: 0.5;\n}\n\n@media print {\n    /* stylelint-disable-next-line selector-class-pattern */\n    .mapbox-improve-map {\n        display: none;\n    }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/css/main.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/main.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Barlow|Oxygen|Bellota&display=swap);", ""]);

// module
exports.push([module.i, "/* Base 16 Ocean Color Palette\n#eff1f5,#c0c5ce,#2A303C,#222831,#1B1F27,#b48ead,#8fa1b3,#96b5b4\n#a3be8c,#ebcb8b,#bf616a\n*/\n\n:root {\n    --header-bg: #1B1F27;\n    --header-txt: #eff1f5;\n    --title-txt: #ebcb8b;\n    --header-filter-txt: #96b5b4;\n\n    --main-bg: #222831;\n    --sub-bg: #2A303C;\n    --main-txt: #c0c5ce;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: 'Barlow', sans-serif;\n    overflow: hidden;\n}\n\n#main {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background: var(--main-bg);\n    color:  var(--main-txt);\n}\n\n#map {\n    width: 600px;\n    height: calc(100% - 200px);\n    float: left;\n    background-color: var(--sub-bg);\n    box-sizing: border-box;\n    border-right: 2px solid #1B1F27;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/geojson-flatten/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/geojson-flatten/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function e(t){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.reduce(function(t,r){return t.concat(e(r))},[]),t;case"Feature":return t.geometry?e(t.geometry).map(function(e){var r={type:"Feature",properties:JSON.parse(JSON.stringify(t.properties)),geometry:e};return void 0!==t.id&&(r.id=t.id),r}):t;case"MultiPoint":return t.coordinates.map(function(e){return{type:"Point",coordinates:e}});case"MultiPolygon":return t.coordinates.map(function(e){return{type:"Polygon",coordinates:e}});case"MultiLineString":return t.coordinates.map(function(e){return{type:"LineString",coordinates:e}});case"GeometryCollection":return t.geometries.map(e).reduce(function(e,t){return e.concat(t)},[]);case"Point":case"Polygon":case"LineString":return[t]}};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/hat/index.js":
/*!***********************************!*\
  !*** ./node_modules/hat/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits === undefined) bits = 128;
    if (bits <= 0) return '0';
    
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};

hat.rack = function (bits, base, expandBy) {
    var fn = function (data) {
        var iters = 0;
        do {
            if (iters ++ > 10) {
                if (expandBy) bits += expandBy;
                else throw new Error('too many ID collisions, use more bits')
            }
            
            var id = hat(bits, base);
        } while (Object.hasOwnProperty.call(hats, id));
        
        hats[id] = data;
        return id;
    };
    var hats = fn.hats = {};
    
    fn.get = function (id) {
        return fn.hats[id];
    };
    
    fn.set = function (id, value) {
        fn.hats[id] = value;
        return fn;
    };
    
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
};


/***/ }),

/***/ "./node_modules/jsonlint-lines/lib/jsonlint.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsonlint-lines/lib/jsonlint.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var jsonlint = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,14],$V6=[1,15],$V7=[14,18,22,24],$V8=[18,22],$V9=[22,24];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"JSONString":3,"STRING":4,"JSONNumber":5,"NUMBER":6,"JSONNullLiteral":7,"NULL":8,"JSONBooleanLiteral":9,"TRUE":10,"FALSE":11,"JSONText":12,"JSONValue":13,"EOF":14,"JSONObject":15,"JSONArray":16,"{":17,"}":18,"JSONMemberList":19,"JSONMember":20,":":21,",":22,"[":23,"]":24,"JSONElementList":25,"$accept":0,"$end":1},
terminals_: {2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},
productions_: [0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 // replace escaped characters with actual character
          this.$ = yytext.replace(/\\(\\|")/g, "$"+"1")
                     .replace(/\\n/g,'\n')
                     .replace(/\\r/g,'\r')
                     .replace(/\\t/g,'\t')
                     .replace(/\\v/g,'\v')
                     .replace(/\\f/g,'\f')
                     .replace(/\\b/g,'\b');
        
break;
case 2:
this.$ = Number(yytext);
break;
case 3:
this.$ = null;
break;
case 4:
this.$ = true;
break;
case 5:
this.$ = false;
break;
case 6:
return this.$ = $$[$0-1];
break;
case 13:
this.$ = {}; Object.defineProperty(this.$, '__line__', {
            value: this._$.first_line,
            enumerable: false
        })
break;
case 14: case 19:
this.$ = $$[$0-1]; Object.defineProperty(this.$, '__line__', {
            value: this._$.first_line,
            enumerable: false
        })
break;
case 15:
this.$ = [$$[$0-2], $$[$0]];
break;
case 16:
this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];
break;
case 17:

            this.$ = $$[$0-2];
            if ($$[$0-2][$$[$0][0]] !== undefined) {
                if (!this.$.__duplicateProperties__) {
                    Object.defineProperty(this.$, '__duplicateProperties__', {
                        value: [],
                        enumerable: false
                    });
                }
                this.$.__duplicateProperties__.push($$[$0][0]);
            }
            $$[$0-2][$$[$0][0]] = $$[$0][1];
        
break;
case 18:
this.$ = []; Object.defineProperty(this.$, '__line__', {
            value: this._$.first_line,
            enumerable: false
        })
break;
case 20:
this.$ = [$$[$0]];
break;
case 21:
this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
}
},
table: [{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,12:1,13:2,15:7,16:8,17:$V5,23:$V6},{1:[3]},{14:[1,16]},o($V7,[2,7]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),o($V7,[2,11]),o($V7,[2,12]),o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o([14,18,21,22,24],[2,1]),o($V7,[2,2]),{3:20,4:$V0,18:[1,17],19:18,20:19},{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,13:23,15:7,16:8,17:$V5,23:$V6,24:[1,21],25:22},{1:[2,6]},o($V7,[2,13]),{18:[1,24],22:[1,25]},o($V8,[2,16]),{21:[1,26]},o($V7,[2,18]),{22:[1,28],24:[1,27]},o($V9,[2,20]),o($V7,[2,14]),{3:20,4:$V0,20:29},{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,13:30,15:7,16:8,17:$V5,23:$V6},o($V7,[2,19]),{3:5,4:$V0,5:6,6:$V1,7:3,8:$V2,9:4,10:$V3,11:$V4,13:31,15:7,16:8,17:$V5,23:$V6},o($V8,[2,17]),o($V8,[2,15]),o($V9,[2,21])],
defaultActions: {16:[2,6]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 6
break;
case 2:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 4
break;
case 3:return 17
break;
case 4:return 18
break;
case 5:return 23
break;
case 6:return 24
break;
case 7:return 22
break;
case 8:return 21
break;
case 9:return 10
break;
case 10:return 11
break;
case 11:return 8
break;
case 12:return 14
break;
case 13:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt\/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = jsonlint;
exports.Parser = jsonlint.Parser;
exports.parse = function () { return jsonlint.parse.apply(jsonlint, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js").readFileSync(__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js").normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/mapbox-gl/dist/mapbox-gl.css":
/*!***************************************************!*\
  !*** ./node_modules/mapbox-gl/dist/mapbox-gl.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./mapbox-gl.css */ "./node_modules/css-loader/index.js!./node_modules/mapbox-gl/dist/mapbox-gl.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/traverse/index.js":
/*!****************************************!*\
  !*** ./node_modules/traverse/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var traverse = module.exports = function (obj) {
    return new Traverse(obj);
};

function Traverse (obj) {
    this.value = obj;
}

Traverse.prototype.get = function (ps) {
    var node = this.value;
    for (var i = 0; i < ps.length; i ++) {
        var key = ps[i];
        if (!node || !hasOwnProperty.call(node, key)) {
            node = undefined;
            break;
        }
        node = node[key];
    }
    return node;
};

Traverse.prototype.has = function (ps) {
    var node = this.value;
    for (var i = 0; i < ps.length; i ++) {
        var key = ps[i];
        if (!node || !hasOwnProperty.call(node, key)) {
            return false;
        }
        node = node[key];
    }
    return true;
};

Traverse.prototype.set = function (ps, value) {
    var node = this.value;
    for (var i = 0; i < ps.length - 1; i ++) {
        var key = ps[i];
        if (!hasOwnProperty.call(node, key)) node[key] = {};
        node = node[key];
    }
    node[ps[i]] = value;
    return value;
};

Traverse.prototype.map = function (cb) {
    return walk(this.value, cb, true);
};

Traverse.prototype.forEach = function (cb) {
    this.value = walk(this.value, cb, false);
    return this.value;
};

Traverse.prototype.reduce = function (cb, init) {
    var skip = arguments.length === 1;
    var acc = skip ? this.value : init;
    this.forEach(function (x) {
        if (!this.isRoot || !skip) {
            acc = cb.call(this, acc, x);
        }
    });
    return acc;
};

Traverse.prototype.paths = function () {
    var acc = [];
    this.forEach(function (x) {
        acc.push(this.path); 
    });
    return acc;
};

Traverse.prototype.nodes = function () {
    var acc = [];
    this.forEach(function (x) {
        acc.push(this.node);
    });
    return acc;
};

Traverse.prototype.clone = function () {
    var parents = [], nodes = [];
    
    return (function clone (src) {
        for (var i = 0; i < parents.length; i++) {
            if (parents[i] === src) {
                return nodes[i];
            }
        }
        
        if (typeof src === 'object' && src !== null) {
            var dst = copy(src);
            
            parents.push(src);
            nodes.push(dst);
            
            forEach(objectKeys(src), function (key) {
                dst[key] = clone(src[key]);
            });
            
            parents.pop();
            nodes.pop();
            return dst;
        }
        else {
            return src;
        }
    })(this.value);
};

function walk (root, cb, immutable) {
    var path = [];
    var parents = [];
    var alive = true;
    
    return (function walker (node_) {
        var node = immutable ? copy(node_) : node_;
        var modifiers = {};
        
        var keepGoing = true;
        
        var state = {
            node : node,
            node_ : node_,
            path : [].concat(path),
            parent : parents[parents.length - 1],
            parents : parents,
            key : path.slice(-1)[0],
            isRoot : path.length === 0,
            level : path.length,
            circular : null,
            update : function (x, stopHere) {
                if (!state.isRoot) {
                    state.parent.node[state.key] = x;
                }
                state.node = x;
                if (stopHere) keepGoing = false;
            },
            'delete' : function (stopHere) {
                delete state.parent.node[state.key];
                if (stopHere) keepGoing = false;
            },
            remove : function (stopHere) {
                if (isArray(state.parent.node)) {
                    state.parent.node.splice(state.key, 1);
                }
                else {
                    delete state.parent.node[state.key];
                }
                if (stopHere) keepGoing = false;
            },
            keys : null,
            before : function (f) { modifiers.before = f },
            after : function (f) { modifiers.after = f },
            pre : function (f) { modifiers.pre = f },
            post : function (f) { modifiers.post = f },
            stop : function () { alive = false },
            block : function () { keepGoing = false }
        };
        
        if (!alive) return state;
        
        function updateState() {
            if (typeof state.node === 'object' && state.node !== null) {
                if (!state.keys || state.node_ !== state.node) {
                    state.keys = objectKeys(state.node)
                }
                
                state.isLeaf = state.keys.length == 0;
                
                for (var i = 0; i < parents.length; i++) {
                    if (parents[i].node_ === node_) {
                        state.circular = parents[i];
                        break;
                    }
                }
            }
            else {
                state.isLeaf = true;
                state.keys = null;
            }
            
            state.notLeaf = !state.isLeaf;
            state.notRoot = !state.isRoot;
        }
        
        updateState();
        
        // use return values to update if defined
        var ret = cb.call(state, state.node);
        if (ret !== undefined && state.update) state.update(ret);
        
        if (modifiers.before) modifiers.before.call(state, state.node);
        
        if (!keepGoing) return state;
        
        if (typeof state.node == 'object'
        && state.node !== null && !state.circular) {
            parents.push(state);
            
            updateState();
            
            forEach(state.keys, function (key, i) {
                path.push(key);
                
                if (modifiers.pre) modifiers.pre.call(state, state.node[key], key);
                
                var child = walker(state.node[key]);
                if (immutable && hasOwnProperty.call(state.node, key)) {
                    state.node[key] = child.node;
                }
                
                child.isLast = i == state.keys.length - 1;
                child.isFirst = i == 0;
                
                if (modifiers.post) modifiers.post.call(state, child);
                
                path.pop();
            });
            parents.pop();
        }
        
        if (modifiers.after) modifiers.after.call(state, state.node);
        
        return state;
    })(root).node;
}

function copy (src) {
    if (typeof src === 'object' && src !== null) {
        var dst;
        
        if (isArray(src)) {
            dst = [];
        }
        else if (isDate(src)) {
            dst = new Date(src.getTime ? src.getTime() : src);
        }
        else if (isRegExp(src)) {
            dst = new RegExp(src);
        }
        else if (isError(src)) {
            dst = { message: src.message };
        }
        else if (isBoolean(src)) {
            dst = new Boolean(src);
        }
        else if (isNumber(src)) {
            dst = new Number(src);
        }
        else if (isString(src)) {
            dst = new String(src);
        }
        else if (Object.create && Object.getPrototypeOf) {
            dst = Object.create(Object.getPrototypeOf(src));
        }
        else if (src.constructor === Object) {
            dst = {};
        }
        else {
            var proto =
                (src.constructor && src.constructor.prototype)
                || src.__proto__
                || {}
            ;
            var T = function () {};
            T.prototype = proto;
            dst = new T;
        }
        
        forEach(objectKeys(src), function (key) {
            dst[key] = src[key];
        });
        return dst;
    }
    else return src;
}

var objectKeys = Object.keys || function keys (obj) {
    var res = [];
    for (var key in obj) res.push(key)
    return res;
};

function toS (obj) { return Object.prototype.toString.call(obj) }
function isDate (obj) { return toS(obj) === '[object Date]' }
function isRegExp (obj) { return toS(obj) === '[object RegExp]' }
function isError (obj) { return toS(obj) === '[object Error]' }
function isBoolean (obj) { return toS(obj) === '[object Boolean]' }
function isNumber (obj) { return toS(obj) === '[object Number]' }
function isString (obj) { return toS(obj) === '[object String]' }

var isArray = Array.isArray || function isArray (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

forEach(objectKeys(Traverse.prototype), function (key) {
    traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = new Traverse(obj);
        return t[key].apply(t, args);
    };
});

var hasOwnProperty = Object.hasOwnProperty || function (obj, key) {
    return key in obj;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/wgs84/index.js":
/*!*************************************!*\
  !*** ./node_modules/wgs84/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.RADIUS = 6378137;
module.exports.FLATTENING = 1/298.257223563;
module.exports.POLAR_RADIUS = 6356752.3142;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./main.css */ "./node_modules/css-loader/index.js!./src/css/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var _node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_mapbox_mapbox_gl_draw_dist_mapbox_gl_draw_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css");
/* harmony import */ var _node_modules_mapbox_mapbox_gl_draw_dist_mapbox_gl_draw_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mapbox_mapbox_gl_draw_dist_mapbox_gl_draw_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/map */ "./src/js/map.js");







// Initialize map
Object(_js_map__WEBPACK_IMPORTED_MODULE_4__["map_initialize"])('map');
// Fire when map finished loading
_js_map__WEBPACK_IMPORTED_MODULE_4__["map_main"].on('load', function () {
    // Initialize all map components
    Object(_js_map__WEBPACK_IMPORTED_MODULE_4__["map_add_draw_controls"])();
    Object(_js_map__WEBPACK_IMPORTED_MODULE_4__["map_events"])();
});

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: map_main, map_draw, map_initialize, map_add_draw_controls, map_events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_main", function() { return map_main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_draw", function() { return map_draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_initialize", function() { return map_initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_add_draw_controls", function() { return map_add_draw_controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map_events", function() { return map_events; });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/index.js");


// Public variables
let map_main = undefined;
let map_draw = undefined;

// Private Variables
let access_token = 'pk.eyJ1IjoiZGlnaXRhbGtpIiwiYSI6ImNqNXh1MDdibTA4bTMycnAweDBxYXBpYncifQ.daSatfva2eG-95QHWC9Mig';

function map_initialize(container_id) {
    // Add access token
    mapbox_gl.accessToken = access_token;
    // Initialize map
    map_main = new mapbox_gl.Map({
        container: container_id,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-74.5, 40],
        zoom: 9
    });
}

function map_add_draw_controls() {
    // Initialize map draw controls
    map_draw = new _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__["default"]({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });
    // Add controls to current map
    map_main.addControl(map_draw, 'top-left');
}

function map_events() {
    // On drag ended
    map_main.on('dragend', function (e) {
        let bbox_polygon = map_get_bbox_polygon();
    });

    // On zoom ended
    map_main.on('zoomend', function (e) {
        let bbox_polygon = map_get_bbox_polygon();
    });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map