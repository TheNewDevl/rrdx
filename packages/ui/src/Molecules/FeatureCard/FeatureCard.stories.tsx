import { FeatureCard } from "./FeatureCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import iconChat from "../../assets/icon-chat.png";

export default {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
  argTypes: {},
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => <FeatureCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: iconChat,
  imgAlt: "Chat icon",
  titleText: "You are our #1 priority",
  desc: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
};
