import { toast } from 'react-toastify'

export const toasts = {
  created() {
    return toast.success('Dados cadastrados com sucesso.', {
      autoClose: 5 * 1000
    })
  },
  deleted() {
    return toast.success('Dados excluídos com sucesso.', {
      autoClose: 5 * 1000
    })
  },
  edited() {
    return toast.success('Dados editados com sucesso.', { autoClose: 5 * 1000 })
  },
  generalFail({ code = 'UNKNOWN_ERROR' } = {}) {
    return toast.error(
      'Ocorreu uma falha inesperada. Por favor, aguarde alguns minutos de tente novamente.',
      { autoClose: 5 * 1000, toastId: code }
    )
  }
}
