import { Button } from 'components/Button'
import { Modal } from 'components/Modal'

import * as S from './styled'

export type ModalDeleteDeveloperProps = {
  name: string
  onExit?: () => void
  onRemove?: () => void
}

export function ModalDeleteDeveloper({
  name,
  onExit,
  onRemove
}: ModalDeleteDeveloperProps) {
  const button = (
    <Button onClick={onRemove} size="medium">
      <p>Sim</p>
    </Button>
  )

  const content = (
    <S.Wrapper>
      <S.Title>Excluir desenvolvedor</S.Title>
      <S.Description>
        Tem certeza que deseja excluir o desenvolvedor <span>{name}</span> ?
      </S.Description>
    </S.Wrapper>
  )

  return (
    <Modal
      button={button}
      content={content}
      isActionsEnabled={true}
      width={60}
      onExit={onExit}
    />
  )
}
