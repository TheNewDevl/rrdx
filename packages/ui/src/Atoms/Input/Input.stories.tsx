import { Input } from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  label: "Username",
};
