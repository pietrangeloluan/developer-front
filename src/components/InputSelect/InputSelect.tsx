import { useCallback, useEffect, useState } from 'react'
import { Input } from '../Input'
import { Icon } from '../Icon'

import * as S from './styled'

export type InputSelectProps = {
  defaultValue?: unknown
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  helperText?: string
  label: string
  options: unknown[]
  optionLabel: string
  optionValue: string
  value?: unknown
  width?: number
  onSelected?: (_value: unknown) => void
}

export function InputSelect({
  error = false,
  disabled = false,
  fullWidth = false,
  helperText = '',
  label,
  options,
  optionLabel,
  optionValue,
  width = 200,
  value = null,
  onSelected
}: InputSelectProps) {
  const handleSelected = useCallback(
    val => {
      const opt = options.find(option => option[optionValue] === val)
      if (opt) return opt
      return null
    },
    [options, optionValue]
  )

  const [_value, setValue] = useState<unknown>(handleSelected(value))
  const [inputValue, setInputValue] = useState('')

  function handleChange(newValue) {
    setValue(newValue)
    !!onSelected && onSelected(newValue)
  }

  function handleInputChange(newInputValue) {
    setInputValue(newInputValue)
  }

  useEffect(() => {
    if (value !== null) {
      const val = handleSelected(value)
      setValue(val)
    }
  }, [value, handleSelected])

  return (
    <S.InputSelect
      clearOnEscape={true}
      autoComplete="off"
      disableClearable
      disabled={disabled}
      fullWidth={fullWidth}
      getOptionLabel={option => option[optionLabel]}
      getOptionSelected={(option, val) => option.value === val.value}
      options={options}
      style={{ width: !fullWidth ? width : 'none' }}
      value={_value}
      onChange={(event: any, newValue: unknown) => handleChange(newValue)}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => handleInputChange(newInputValue)}
      popupIcon={<Icon icon="input-chevron-down" width={14} height={14} />}
      renderInput={params => (
        <Input
          {...params}
          label={label}
          error={error}
          helperText={helperText}
        />
      )}
    />
  )
}
