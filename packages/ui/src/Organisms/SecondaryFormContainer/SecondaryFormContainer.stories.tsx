import { SecondaryFormContainer } from "./SecondaryFormContainer";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../../Atoms/Input/Input";
import { Button } from "../../Atoms/Button/Button";

export default {
  title: "Organisms/SecondaryFormContainer",
  component: SecondaryFormContainer,
  argTypes: {},
} as ComponentMeta<typeof SecondaryFormContainer>;

const Template: ComponentStory<typeof SecondaryFormContainer> = (args) => <SecondaryFormContainer {...args} />;

export const Primary = Template.bind({});
const elements = [
  <Input placeholder={"Tony"} type={"text"} onChange={() => {}} label={""} />,
  <Input placeholder={"Stark"} type={"text"} onChange={() => {}} label={""} />,
  <Button children={"save"} onClick={() => {}} />,
  <Button children={"Cancel"} onClick={() => {}} />,
];

Primary.args = {
  children: elements,
};
