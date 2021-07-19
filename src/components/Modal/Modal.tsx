import { useState } from 'react'
import * as S from './styled'

import { Icon } from '../Icon'
import { Button } from '../Button'

export type ModalProps = {
  width?: number
  content: JSX.Element
  button?: JSX.Element
  isActionsEnabled?: boolean
  onExit?: () => void
}

const Modal = ({
  width = 60,
  content,
  button,
  isActionsEnabled = true,
  onExit
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true)

  function setModalClose() {
    setIsOpen(false)
    !!onExit && onExit()
  }

  let actions: JSX.Element
  if (isActionsEnabled) {
    actions = (
      <S.ActionButtons>
        <div>
          <Button variant="gray" onClick={setModalClose} size="medium">
            <p>Cancelar</p>
          </Button>
          {button}
        </div>
      </S.ActionButtons>
    )
  } else {
    actions = <S.ActionButtons data-testid="no-actions"></S.ActionButtons>
  }

  return (
    <S.Background isOpen={isOpen}>
      <S.Wrapper width={width}>
        <S.Modal
          data-testid="modal"
          isOpen={isOpen}
          width={width}
          aria-label="modal"
          aria-hidden={!isOpen}
        >
          <S.Close
            data-testid="close-modal"
            aria-label="close-modal"
            onClick={setModalClose}
          >
            <Icon icon="modal-exit" height={16} width={16} />
          </S.Close>
          <S.Template>
            <S.Content width={width}>{content}</S.Content>
            <S.Actions className={'actions'}>
              <S.Line />
              {actions}
            </S.Actions>
          </S.Template>
        </S.Modal>
      </S.Wrapper>
    </S.Background>
  )
}

export default Modal
