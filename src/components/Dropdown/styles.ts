import styled, { css } from 'styled-components'

export const Title = styled.div`
  cursor: pointer;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 4;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  margin-top: 0.6rem;
  position: absolute;
  right: 0;
  z-index: 5;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.5);
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    width: max-content;

    ${Content},
    ${Overlay} {
      border-radius: 0.8rem;
      position: absolute;
      right: 4.8rem;
      transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;
      z-index: 200;

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
