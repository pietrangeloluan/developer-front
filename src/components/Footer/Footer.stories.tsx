import { Story, Meta } from '@storybook/react/types-6-0'
import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <Footer />
