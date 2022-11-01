import { Story } from "@storybook/react";
import { InfoArea } from "./InfoArea";


export default{
  title: 'component/InfoArea',
  component: InfoArea
}

const Template: Story = () => <InfoArea />

export const InfoAreaStory = Template.bind({})
