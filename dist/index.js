"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DynamicSelect = function DynamicSelect(_ref) {
  var cutoff = _ref.cutoff,
      inputProps = _ref.inputProps,
      items = _ref.items,
      labelProps = _ref.labelProps,
      multiple = _ref.multiple,
      name = _ref.name,
      selectProps = _ref.selectProps,
      value = _ref.value,
      _onChange = _ref.onChange;

  if (items.length > cutoff) {
    return _react.default.createElement(_reactSelect.default, _extends({
      name: name,
      options: items,
      value: value,
      multi: multiple,
      onChange: function onChange(selected) {
        return _onChange(multiple ? selected.map(function (item) {
          return item.value;
        }) : selected && selected.value);
      },
      closeOnSelect: !multiple
    }, selectProps));
  }

  if (multiple) {
    return items.map(function (item, index) {
      return _react.default.createElement("label", _extends({
        key: index
      }, labelProps), _react.default.createElement("input", _extends({
        type: "checkbox",
        name: name,
        checked: value.includes(item.value),
        onChange: function onChange(event) {
          return event.target.checked ? _onChange(value.concat(item.value)) : _onChange(value.filter(function (x) {
            return x !== item.value;
          }));
        }
      }, inputProps)), " ", item.label);
    });
  }

  return items.map(function (item, index) {
    return _react.default.createElement("label", _extends({
      key: index
    }, labelProps), _react.default.createElement("input", _extends({
      type: "radio",
      name: name,
      value: item.value,
      checked: value === item.value,
      onChange: function onChange(_) {
        return _onChange(item.value);
      }
    }, inputProps)), " ", item.label);
  });
};

DynamicSelect.defaultProps = {
  cutoff: 5,
  multiple: false
};
DynamicSelect.propTypes = {
  cutoff: _propTypes.default.number.isRequired,
  inputProps: _propTypes.default.object,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.any.isRequired,
    label: _propTypes.default.string.isRequired
  })).isRequired,
  labelProps: _propTypes.default.object,
  multiple: _propTypes.default.bool.isRequired,
  name: _propTypes.default.string.isRequired,
  selectProps: _propTypes.default.object,
  value: function value(props) {
    if (props.multiple && !Array.isArray(props.value)) {
      return new Error('Value must be an array in multiple select mode');
    }
  },
  onChange: _propTypes.default.func.isRequired
};
var _default = DynamicSelect;
exports.default = _default;

