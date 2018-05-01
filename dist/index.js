'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(_reactSelect2.default, _extends({
      name: name,
      options: items,
      value: value,
      multi: multiple,
      onChange: function onChange(selected) {
        return _onChange(multiple ? selected.map(function (item) {
          return item.value;
        }) : selected.value);
      },
      closeOnSelect: !multiple
    }, selectProps));
  }

  if (multiple) {
    return items.map(function (item, index) {
      return _react2.default.createElement(
        'label',
        _extends({ key: index }, labelProps),
        _react2.default.createElement('input', _extends({
          type: 'checkbox',
          name: name,
          checked: value.includes(item.value),
          onChange: function onChange(event) {
            return event.target.checked ? _onChange(value.concat(item.value)) : _onChange(value.filter(function (x) {
              return x !== item.value;
            }));
          }
        }, inputProps)),
        ' ',
        item.label
      );
    });
  }

  return items.map(function (item, index) {
    return _react2.default.createElement(
      'label',
      _extends({ key: index }, labelProps),
      _react2.default.createElement('input', _extends({
        type: 'radio',
        name: name,
        value: item.value,
        onChange: function onChange(_) {
          return _onChange(item.value);
        }
      }, inputProps)),
      ' ',
      item.label
    );
  });
};

DynamicSelect.defaultProps = {
  cutoff: 5,
  multiple: false
};

DynamicSelect.propTypes = {
  cutoff: _propTypes2.default.number.isRequired,
  inputProps: _propTypes2.default.object,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired
  })).isRequired,
  labelProps: _propTypes2.default.object,
  multiple: _propTypes2.default.bool.isRequired,
  name: _propTypes2.default.string.isRequired,
  selectProps: _propTypes2.default.object,
  value: function value(props) {
    if (props.multiple && !Array.isArray(props.value)) {
      return new Error('Value must be an array in multiple select mode');
    }
  },
  onChange: _propTypes2.default.func.isRequired
};

exports.default = DynamicSelect;

