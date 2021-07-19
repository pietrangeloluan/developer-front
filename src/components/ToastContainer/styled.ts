import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export const Container = styled(ToastContainer).attrs({
  closeOnClick: true,
  draggable: true,
  hideProgressBar: true,
  pauseOnHover: true,
  newestOnTop: true,
  position: 'top-right'
})`
  font-size: 1.4rem;

  .Toastify__toast {
    background-color: white;
    border-left: 0.8rem solid transparent;
    border-radius: 0.8rem;
    min-height: 4.8rem;
    color: ${({ theme }) => theme.colors.darkGray.hex()};
    padding: 0.8rem 1.6rem;
  }

  .Toastify__close-button {
    color: ${({ theme }) => theme.colors.darkGray.alpha(0.4)};
  }

  .Toastify__toast--error {
    border-left-color: ${({ theme }) => theme.colors.error};
  }

  .Toastify__toast--warning {
    border-left-color: ${({ theme }) => theme.colors.warn};
  }

  .Toastify__toast--success {
    border-left-color: ${({ theme }) => theme.colors.success};
  }
`
