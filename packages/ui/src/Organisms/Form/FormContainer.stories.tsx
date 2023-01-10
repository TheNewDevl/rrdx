import { FormContainer } from "./FormContainer";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../../Atoms/Input/Input";
import { Button } from "../../Atoms/Button/Button";

export default {
  title: "Organisms/FormContainer",
  component: FormContainer,
  argTypes: {},
} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = (args) => <FormContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Sign in",
  children: (
    <>
      <Input type={"text"} handleChange={() => {}} label={"Username"} />
      <Button text={"Submit"} handleClick={() => {}} />
    </>
  ),
};
