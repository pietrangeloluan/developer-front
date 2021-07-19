import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Hint = styled.p`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray.alpha(0.16)};
  color: ${({ theme }) => theme.colors.darkGray.hex()};
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.primary.hex()};
  font-weight: 600;
  margin: 0 0 0 0.4rem;
  text-decoration: none;
  transition: color 400ms;
  will-change: color;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.darken()};
  }
`
