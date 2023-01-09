import { Footer } from "./Footer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
