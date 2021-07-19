import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Wrapper = styled.div`
  margin: 0.8rem;
`

export const InputWrapper = styled.div.attrs(() => {})`
  display: flex;
  align-items: center;
`

export const Input = styled(TextField).attrs(() => {})`
  .MuiInputBase-root {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.darkGray};
    padding: 0 ${({ theme }) => theme.spacings.xsmall};
    padding-left: ${({ icon, theme }) =>
      icon?.iconLeft ? theme.spacings.medium : theme.spacings.xsmall};
    padding-right: ${({ icon, theme }) =>
      icon?.iconRight ? theme.spacings.large : theme.spacings.xsmall};

    .MuiIconButton-root {
      position: absolute;
      right: 4px;
    }
  }

  .MuiInputLabel-root {
    font-size: 1.4rem;
    transform: translate(
        ${({ icon, theme }) =>
          icon?.iconLeft ? theme.spacings.medium : theme.spacings.xsmall},
        ${({ padding }) => (padding === 'large' ? '1.7rem' : '1.3rem')}
      )
      scale(1);
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.71428);
  }

  .MuiOutlinedInput-input {
    padding: ${({ padding }) => (padding === 'large' ? '1.57rem' : '1.17rem')} 0;

    &.MuiOutlinedInput-inputMultiline {
      padding: ${({ padding }) => (padding === 'large' ? '1.57rem' : '1.17rem')}
        0;
    }
  }

  label.Mui-focused {
    color: ${({ theme }) => theme.colors.focusForm};
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${({ border, theme }) =>
        border === 'dark' ? theme.colors.darkGray : theme.colors.Gray};
      opacity: 1;
      transition: border-color 400ms;
      will-change: border-color;
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.hoverForm};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.focusForm};
    }
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.error};
  }

  .MuiFormLabel-root.Mui-error {
    color: ${({ theme }) => theme.colors.error};
  }

  .MuiFormHelperText-root.Mui-error {
    color: ${({ theme }) => theme.colors.error};
    font-size: 1rem;
    font-weight: 600;
    padding-left: ${({ theme }) => theme.spacings.xxxsmall};
  }
`

export const IconLeft = styled.div.attrs(() => {})`
  position: relative;
  left: 1.6rem;
  bottom: ${({ helperText }) => (helperText ? '1rem' : 0)};

  display: flex;
  align-self: center;
  justify-content: center;

  width: 0;
`

export const IconRight = styled.div.attrs(() => {})`
  position: relative;
  right: 4.2rem;
  bottom: ${({ helperText }) => (helperText ? '1rem' : 0)};

  display: flex;
  align-self: center;

  width: 0;
`

export const AlertIcon = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.error};

  position: relative;
  bottom: 1.4rem;
  height: 0;
  img {
    height: 1rem;
  }
`
