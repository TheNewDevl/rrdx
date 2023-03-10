import { Header } from "./Header";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/Header",
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    profileLinkNode: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isLoggedIn: true,
  profileLinkNode: "Tony",
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isLoggedIn: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
