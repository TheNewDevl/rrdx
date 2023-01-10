import { Loader } from "./Loader";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
