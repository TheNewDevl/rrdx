import { AccountsCard } from "./AccountsCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/AccountsCard",
  component: AccountsCard,
  argTypes: {},
} as ComponentMeta<typeof AccountsCard>;

const Template: ComponentStory<typeof AccountsCard> = (args) => <AccountsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  account: {
    title: "Current Account",
    amount: 1000,
    desc: "Your current account balance",
  },

  CTA: {
    CTAText: "View account",
    CTAAction: () => {},
  },
};
