import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 18rem;
`

export const Link = styled.li`
  align-items: center;
  cursor: pointer;
  background: white;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;

  :first-child {
    margin-top: 0.8rem;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  :last-child {
    margin-bottom: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 0;
  }

  > div {
    margin: 0.8rem -0.4rem 0.8rem 1.6rem !important;
  }

  > span {
    font-size: 1.6rem;
    margin: 0.8rem 1.6rem !important;
  }
`
