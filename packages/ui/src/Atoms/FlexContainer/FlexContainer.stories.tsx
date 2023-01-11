import { FlexContainer } from "./FlexContainer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/FlexContainer",
  component: FlexContainer,
  argTypes: {},
} as ComponentMeta<typeof FlexContainer>;

const Template: ComponentStory<typeof FlexContainer> = (args) => <FlexContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  element: "div",
};
