import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: serif;
  font-size: 3rem;
  height: 4rem;
  transform-origin: center;
  outline: none;
  width: 4rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary.darken()};
  }
`
