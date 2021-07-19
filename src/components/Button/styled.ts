import styled from 'styled-components'

export const Button = styled.button`
  outline: none;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  transform-origin: center;
  transition: background-color 400ms, color 400ms, transform 400ms;
  will-change: background-color, color, transform;
  margin: 0.8rem;
  width: max-content;

  &.blue {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.darken()};
    }
  }

  &.gray {
    background-color: ${({ theme }) => theme.colors.gray};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.darken()};
    }
  }

  &:active {
    transform: scale(0.88);
  }

  &.large {
    padding: 1.4rem 10rem;
    font-size: 1.6rem;
  }

  &.medium {
    padding: 1.1rem 3.2rem;
  }

  &.small {
    padding: 0.7rem 2.8rem;
  }

  &.xsmall {
    box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.background.darken()};
    font-weight: 400;
    padding: 0.1rem 1.1rem;
  }
`
