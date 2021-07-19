import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
  white-space: normal;
  text-align: center;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.8rem;
  font-weight: 600;
  height: 2.3rem;
  margin-bottom: 1.6rem;
`

export const Description = styled.p`
  color: #545557;
  font-size: 1.6rem;
  height: 2rem;
  padding: 0 7rem;

  span {
    font-weight: 600;
  }
`
