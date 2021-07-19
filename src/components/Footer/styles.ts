import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 6vh;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  z-index: 101;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1.5rem;
`
