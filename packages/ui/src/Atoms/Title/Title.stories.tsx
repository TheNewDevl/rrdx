import { Title } from "./Title";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: ["1", "2", "3", "4", "5", "6"],
      },
    },
    children: {
      defaultValue: "Default Title",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
