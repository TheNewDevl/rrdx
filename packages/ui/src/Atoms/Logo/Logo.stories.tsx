import { Logo } from "./Logo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Logo",
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Primary = Template.bind({});
Primary.args = {};
