import { Meta, Story } from '@storybook/react'
import { Title, TitleProps } from "./Title";


export default {
  title: 'component/Title',
  component: Title
} as Meta<TitleProps>

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Small = Template.bind({})
Small.args = {
  children: 'Home',
  size: 'sm'
}

export const Normal = Template.bind({})
Normal.args = {
  children: 'Home',
  size: 'normal'
}

export const Black = Template.bind({})
Black.args = {
  children: 'Home',
  color: 'txt-primary',
}

export const White = Template.bind({})
White.args = {
  children: 'Home',
  color: 'txt-option',
}