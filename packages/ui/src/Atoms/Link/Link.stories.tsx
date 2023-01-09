import { Link } from "./Link";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {
    path: {
      description: "The path to navigate to",
    },
    icon: {
      description: "The DA icon to display e.g. user-circle",
    },
    linkText: {
      description: "The text to display",
    },
    onClick: {
      description: "The function to call when the link is clicked",
    },
  },

  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: "user-circle",
  linkText: "Sign In",
};
