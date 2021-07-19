import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Wrapper = styled(Grid)`
  padding: 5rem;
  height: 94vh;
`

export const ButtonAdd = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;
`

export const GridHeader = styled(Grid)`
  display: inline-flexbox;
  padding: 0.5rem 0 0.7rem 0;
`

export const GridTitle = styled(Grid)`
  display: block;
  padding: 0.5rem 0 1rem 0;
`

export const BoxTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 1rem;
`

export const BoxLine = styled.p`
  width: 7.7rem;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
`

export const GridFilter = styled(Grid)`
  display: flex;
  margin: 0 -0.8rem;
  width: calc(100% + 16px);
  flex-direction: row;
`

export const FullGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 25px #0000000d;
  border-radius: 1.2rem;
  padding: 2.4rem;
`

export const GridInputs = styled(Grid)`
  display: flex;
`

export const GridButtons = styled(Grid)`
  align-self: center;
  text-align: end;
  button {
    margin-left: 0;
  }
  button + button {
    margin-left: 0.8rem;
  }
`

export const GridInput = styled(Grid)``

export const GridTable = styled.div`
  margin-top: 1.6rem;
`
