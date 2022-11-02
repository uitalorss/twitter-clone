import {Meta, Story} from '@storybook/react'

import { Avatar, AvatarProps } from "./Avatar";


export default {
  title: 'component/Avatar',
  component: Avatar
} as Meta<AvatarProps>

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({})

export const Small = Template.bind({})

Small.args = {
  size: 'small'
}