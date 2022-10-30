import { Meta, Story } from '@storybook/react'
import {Button, ButtonProps } from './Button'

export default {
  title: 'component/Button',
  component: Button
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Normal = Template.bind({})
Normal.args = {
  children: 'Tweet'
}

export const Large = Template.bind({})
Large.args ={
  children: 'Tweet',
  size: 'large'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Tweet',
  disabled: true
}
