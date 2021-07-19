import styled, { css } from 'styled-components'

type BackProps = {
  isOpen: boolean
}

type WrapperProps = {
  width: number
}

type ModalProps = {
  isOpen: boolean
  width: number
}
export const Background = styled.div<BackProps>`
  ${({ isOpen }) => css`
    z-index: 202 !important;
    width: 100%;
    height: 100%;
    background: #00000047;
    position: fixed;
    top: 0;
    left: 0;

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`
export const Wrapper = styled.div<WrapperProps>`
  ${({ width }) => css`
    max-width: ${width}rem;
    margin: 0 auto;
  `}
`

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ isOpen, width }) => css`
    align-items: center;
    vertical-align: center;
    background: white;
    border: none;
    border-radius: 2rem;
    box-shadow: 0px 30px 63px #00000052;
    display: flex;
    position: fixed;
    transition: opacity '0.3s ease-in-out';
    width: ${width}rem;
    z-index: 201;
    bottom: 50%;
    transform: translate(0, 50%);
    .title {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.8rem;
      font-weight: 600;
    }

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
    padding: 2.4rem;
    cursor: pointer;
    text-align: end;
  `}
`

export const Template = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div.attrs(() => {})`
  width: ${({ width }) => width}rem;
  max-height: 80rem;
  padding: 2.4rem;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1.6rem 0;
`

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  align-self: flex-end;
  button {
    margin-left: 1.6rem;
  }
`

export const Line = styled.div`
  margin: 0 0.8rem;
  width: auto;
  height: 0.2rem;
  background-color: #f2f3f7;
`
