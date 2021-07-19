import { Meta, Story } from '@storybook/react'

import { Modal } from '.'
import { ModalProps } from './Modal'
import { Button } from '../Button'

const button = (
  <Button onClick={() => {}} size="medium">
    <p>Sim, salvar</p>
  </Button>
)
const content = <p className="title">Exemplo de modal</p>
const width = 60

export default {
  title: 'Modal',
  component: Modal,
  defaultArgs: {
    content,
    button,
    isActionsEnabled: true,
    width
  },
  args: {
    content,
    button,
    isActionsEnabled: false,
    width
  }
} as Meta

export const Default: Story<ModalProps> = ({ ...defaultArgs }) => {
  return (
    <Modal
      content={defaultArgs.content}
      button={defaultArgs.button}
      isActionsEnabled={defaultArgs.isActionsEnabled}
      width={defaultArgs.width}
    />
  )
}

export const noActions: Story<ModalProps> = ({ ...args }) => {
  return (
    <Modal
      content={args.content}
      button={args.button}
      isActionsEnabled={args.isActionsEnabled}
      width={args.width}
    />
  )
}
