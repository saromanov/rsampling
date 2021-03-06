"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = require("underscore");

var underscore = _interopRequire(_underscore);

var random = _underscore.random;

var RSampling = exports.RSampling = (function () {
    function RSampling() {
        var mindensity = arguments[0] === undefined ? 0 : arguments[0];
        var maxdensity = arguments[1] === undefined ? 10 : arguments[1];

        _classCallCheck(this, RSampling);

        this.mindensity = mindensity;
        this.maxdensity = maxdensity;
    }

    _createClass(RSampling, {
        fit: {

            //Apply parameters
            //where q is a density function
            //n - number of samples

            value: function fit(q, n) {
                var i = 0;
                var result = [];
                while (i != n) {
                    var x = random(this.mindensity, this.maxdensity);
                    var u = Math.random();
                    if (u * this.maxdensity <= q(x)) {
                        i += 1;
                        result.push(x);
                    }
                }

                return result;
            }
        },
        fit2: {

            //Another rejection sampling method.
            //One difference is rejection criteria.

            value: function fit2(f, g, m, n) {
                var i = 0;
                var result = [];
                while (i != n) {
                    var x = random(this.mindensity, this.maxdensity);
                    var prob = f(x) / (m * g(x));
                    var u = Math.random();
                    if (prob > u) {
                        result.push(x);
                        i += 1;
                    }
                }

                return result;
            }
        }
    });

    return RSampling;
})();