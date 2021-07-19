import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  white-space: normal;
`

export const GridHeader = styled(Grid)`
  display: inline-flexbox;
  margin-bottom: 3rem;
`

export const GridTitle = styled(Grid)`
  display: flex;
  align-self: center;
  align-items: center;
`

export const BoxTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1.6rem;
`

export const Line = styled.div`
  width: auto;
  height: 0.2rem;
  background-color: #f2f3f7;
`

export const GridFields = styled(Grid)`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`

export const GridInput = styled(Grid)`
  text-align: center;
`

export const GridDescription = styled.div`
  margin: 3.8rem 0 1.4rem 0;
  font-size: 1.6rem;
`
