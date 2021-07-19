import Autocomplete from '@material-ui/lab/Autocomplete'
import styled from 'styled-components'

export const InputSelect = styled(Autocomplete).attrs(() => {})`
  .MuiInputBase-root {
    padding: 0 ${({ theme }) => theme.spacings.xsmall} !important;

    .MuiAutocomplete-endAdornment {
      top: calc(50% - 15px);
      right: 0;
      position: absolute;
    }

    .MuiAutocomplete-popupIndicator {
      padding: 8px;
      margin-right: 0px;
    }
  }

  .MuiOutlinedInput-input {
    padding: 1.17rem 2.2rem 1.17rem 0 !important;
  }

  &:hover {
    .Mui-disabled fieldset {
      border-color: ${({ theme }) => theme.colors.lightGray} !important;
    }
  }
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
