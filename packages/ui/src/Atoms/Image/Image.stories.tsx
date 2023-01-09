import { Image } from "./Image";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import icon from "../../assets/icon-chat.png";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: icon,
  alt: "icon chat",
};
