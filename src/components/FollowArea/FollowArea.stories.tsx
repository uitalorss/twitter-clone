import {Meta, Story} from '@storybook/react';

import { FollowArea } from "./FollowArea";


export default {
  title: 'component/FollowArea',
  component: FollowArea
}

const Template: Story = () => <FollowArea />

export const Follow = Template.bind({})