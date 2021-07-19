import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

export const Icon = styled(ReactSVG)`
  align-items: center;
  display: flex;
  height: ${({ height }) => `${height}px`};
  justify-content: center;
  width: ${({ width }) => `${width}px`};
`
