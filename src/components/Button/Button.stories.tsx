import { Meta, Story } from '@storybook/react'

import { Button } from '.'
import { ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  args: { children: 'Lorem' },
  argTypes: { onClick: { type: 'action' } }
} as Meta

export const Blue: Story<ButtonProps> = ({ ...args }) => <Button {...args} />
Blue.args = { variant: 'blue' }

export const Gray: Story<ButtonProps> = ({ ...args }) => <Button {...args} />
Gray.args = { variant: 'gray' }
