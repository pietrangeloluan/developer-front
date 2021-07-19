import { MouseEventHandler, ReactNode } from 'react'

import * as S from './styled'

export type ButtonProps = {
  children: ReactNode
  size?: 'large' | 'medium' | 'small' | 'xsmall'
  variant?: 'blue' | 'gray'
  onClick: MouseEventHandler
}

export function Button({
  children,
  size = 'medium',
  variant = 'blue',
  onClick
}: ButtonProps) {
  return (
    <S.Button className={`${variant} ${size}`} onClick={onClick}>
      {children}
    </S.Button>
  )
}
