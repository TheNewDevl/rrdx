import { Error } from "./Error";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Error",
  component: Error,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Error message",
};
