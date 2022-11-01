import { Story } from "@storybook/react";
import { TweetArea } from "./TweetArea";


export default{
  title: 'component/TweetArea',
  component: TweetArea
}

const Template: Story = () => <TweetArea />

export const Search = Template.bind({})