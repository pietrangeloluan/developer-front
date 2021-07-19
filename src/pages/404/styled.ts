import styled from 'styled-components'

export const Error = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Code = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.8rem 0.8rem 0.8rem 0;
  margin: 0 0.8rem 0 0;
  border-right: 1px solid ${({ theme }) => theme.colors.primary.alpha(0.16)};
`

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`
