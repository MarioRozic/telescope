import { Meta, StoryObj } from "@storybook/react";
import CardForm from "./CardForm";

const meta = {
  title: "Custom Components/Card Form",
  component: CardForm,
  args: {},
} satisfies Meta<typeof CardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
