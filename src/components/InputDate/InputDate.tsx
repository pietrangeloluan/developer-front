import { useState, useEffect } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import DateFnsUtils from '@date-io/date-fns'

import { Icon } from '../Icon'

import * as S from './styled'

export type InputDateProps = {
  error?: boolean
  fullWidth?: boolean
  helperText?: string
  id?: string
  label: string
  maxDate?: Date
  minDate?: Date
  name?: string
  value?: Date
  width?: number
  onInput?: (_value: string | Date) => void
}

export function InputDate({
  error = false,
  fullWidth = false,
  helperText = '',
  id = 'date',
  label,
  name = 'date',
  value = null,
  width = 200,
  onInput
}: InputDateProps) {
  const [selectedDate, setSelectedDate] = useState(value)

  useEffect(() => {
    if (value !== selectedDate) setSelectedDate(value)
  }, [value, selectedDate])

  const onChange = date => {
    setSelectedDate(date)

    !!onInput && onInput(date)
  }

  return (
    <S.Wrapper style={{ width: !fullWidth ? width : 'none' }}>
      <S.Provider locale={ptBR} utils={DateFnsUtils}>
        <S.InputDate
          data-testid="input"
          autoOk
          disableToolbar
          error={error}
          format="dd/MM/yyyy"
          fullWidth={fullWidth}
          helperText={helperText}
          inputVariant="outlined"
          id={id}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
          keyboardIcon={<Icon icon="input-calendar" width={16} height={16} />}
          label={label}
          name={name}
          style={{ width: !fullWidth ? width : '100%' }}
          variant="inline"
          value={selectedDate}
          onChange={onChange}
        />
      </S.Provider>
      {error && helperText && (
        <S.AlertIcon>
          <Icon icon="itens-interface-alert" height={10} width={10} />
        </S.AlertIcon>
      )}
    </S.Wrapper>
  )
}
