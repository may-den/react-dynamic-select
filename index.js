import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const DynamicSelect = ({ cutoff, inputProps, items, labelProps, multiple, name, selectProps, value, onChange }) => {
  if (items.length > cutoff) {
    return (
      <Select
        name={name}
        options={items}
        value={value}
        multi={multiple}
        onChange={selected => onChange(multiple ? selected.map(item => item.value) : selected.value)}
        closeOnSelect={!multiple}
        {...selectProps}
      />
    )
  }

  if (multiple) {
    return items.map((item, index) =>
      <label key={index} {...labelProps}>
        <input
          type='checkbox'
          name={name}
          checked={value.includes(item.value)}
          onChange={event =>
            event.target.checked ? onChange(value.concat(item.value)) : onChange(value.filter(x => x !== item.value))
          }
          {...inputProps}
        /> {item.label}
      </label>
    )
  }

  return items.map((item, index) =>
    <label key={index} {...labelProps}>
      <input
        type='radio'
        name={name}
        value={item.value}
        onChange={_ => onChange(item.value)}
        {...inputProps}
      /> {item.label}
    </label>
  )
}

DynamicSelect.defaultProps = {
  cutoff: 5,
  multiple: false
}

DynamicSelect.propTypes = {
  cutoff: PropTypes.number.isRequired,
  inputProps: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  labelProps: PropTypes.object,
  multiple: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  selectProps: PropTypes.object,
  value: props => {
    if (props.multiple && !Array.isArray(props.value)) {
      return new Error('Value must be an array in multiple select mode')
    }
  },
  onChange: PropTypes.func.isRequired
}

export default DynamicSelect
