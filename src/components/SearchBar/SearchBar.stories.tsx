import { Story } from "@storybook/react";
import { SearchBar } from "./SearchBar";


export default{
  title: 'component/SearchBar',
  component: SearchBar
}

const Template: Story = () => <SearchBar />

export const Search = Template.bind({})