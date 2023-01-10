import { Subtitle } from "./Subtitle";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Subtitle",
  component: Subtitle,
  argTypes: {},
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Subtitle",
};
