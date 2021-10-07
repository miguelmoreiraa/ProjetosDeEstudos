"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselTitle = exports.Map = exports.Logo = exports.Search = exports.Container = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 29px;\n  margin: 16px 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-color: red;\n    width: 500px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #ffffff;\n    padding: 16px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    width: 360px;\n    height: 100vh;\n    overflow-y: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

exports.Wrapper = Wrapper;

var Container = _styledComponents["default"].aside(_templateObject2(), function (props) {
  return props.theme.colors.background;
});

exports.Container = Container;

var Search = _styledComponents["default"].section(_templateObject3());

exports.Search = Search;

var Logo = _styledComponents["default"].img(_templateObject4());

exports.Logo = Logo;

var Map = _styledComponents["default"].div(_templateObject5());

exports.Map = Map;

var CarouselTitle = _styledComponents["default"].h1(_templateObject6(), function (props) {
  return props.theme.fonts.regular;
}, function (props) {
  return props.theme.colors.text;
});

exports.CarouselTitle = CarouselTitle;