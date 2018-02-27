# React-Dynamic-Select
[React-Select](https://github.com/JedWatson/react-select/) with added functionality to display as radios/checkboxes depending on how many options are provided.

Useful when options are configurable and can be of varying size. It is generally recommended to show all options if there are 5 or fewer, and show a select otherwise.

## Installation
Install react-dynamic-select:

```
yarn add react-dynamic-select
```

Then:

```js
import DynamicSelect from 'react-dynamic-select'
```

## Basic Usage

```js
import React from 'react'
import DynamicSelect from 'react-dynamic-select'

export default ({ options, selectedValue, onChange }) =>
  <DynamicSelect options={options} value={selectedValue} onChange={onChange} />
```

## Props
| Prop        | Type                             | Usage                                                                                                                                                                                                                                |
|-------------|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cutoff      | number                           | The cutoff at which to display selects rather than radios/checkboxes. Defaults to 5.                                                                                                                                                 |
| inputProps  | Object                           | Props to pass to the inputs.                                                                                                                                                                                                         |
| items       | Array of Objects                 | Items that can be selected in the form of objects with `value` and `label` props.                                                                                                                                                    |
| labelProps  | Object                           | Props to pass to the labels.                                                                                                                                                                                                         |
| multiple    | bool                             | Whether or not this is a multi-select. Dictates whether radios or checkboxes are shown. Defaults to false.                                                                                                                           |
| name        | string                           | The name of the input. Needed to group radio buttons.                                                                                                                                                                                |
| selectProps | Object                           | Props to pass to the react-select Select, as seen [here](https://github.com/JedWatson/react-select/#select-props). Note that name, options, value, multi and onChange are passed automatically so do not need to be specified again. |
| value       | Array if multiple, otherwise any | The selected value (or values if in multiple select mode)                                                                                                                                                                            |
| onChange    | func                             | Function to call when value is updated. In multiple select mode, the entire array of values will be passed to onChange.                                                                                                              |

## Styling
No styling is provided by default. You can either add your own or refer to React-Select's style installation guide [here](https://github.com/JedWatson/react-select/), but this will only style the selects themselves, not the radios/checkboxes.









