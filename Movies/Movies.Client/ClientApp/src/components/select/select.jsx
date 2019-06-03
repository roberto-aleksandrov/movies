import React from 'react'
import Select from 'react-select'

export default ({
  options,
  field,
  form,
}) => (
  <Select
    isMulti={true}
    options={options}
    name={field.name}
    value={options ? options.filter(option => field.value.indexOf(option.value) >= 0) : ''}
    onChange={option => option && form.setFieldValue(field.name, option.map(item => item.value))}
    onBlur={field.onBlur}
  />
)