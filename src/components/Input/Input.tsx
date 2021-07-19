import { ChangeEvent, ReactNode, useState } from 'react'
import { TextFieldProps } from '@material-ui/core'

import { Icon } from '../Icon'

import * as S from './styled'

export type InputProps = {
  autoFocus?: boolean
  border?: 'dark' | 'light'
  defaultValue?: string
  label: string
  padding?: 'large' | 'medium'
  iconLeft?: ReactNode
  iconRight?: ReactNode
  onInput?: (_value: string) => void
} & TextFieldProps

export function Input({
  autoFocus = false,
  border = 'light',
  defaultValue = '',
  iconLeft,
  iconRight,
  label,
  padding = 'medium',
  onInput,
  ...props
}: InputProps) {
  const [value, setValue] = useState(defaultValue)

  const { error, helperText } = props

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      <S.InputWrapper border={border}>
        {!!iconLeft && (
          <S.IconLeft helperText={helperText}>{iconLeft}</S.IconLeft>
        )}
        <S.Input
          autoFocus={autoFocus}
          border={border}
          icon={{ iconLeft, iconRight }}
          label={label}
          padding={padding}
          onChange={onChange}
          value={value}
          {...props}
          variant="outlined"
        />
        {!!iconRight && (
          <S.IconRight helperText={helperText}>{iconRight}</S.IconRight>
        )}
      </S.InputWrapper>
      {error && helperText && (
        <S.AlertIcon>
          <Icon icon="itens-interface-alert" height={10} width={10} />
        </S.AlertIcon>
      )}
    </S.Wrapper>
  )
}
