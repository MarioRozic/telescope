import { Meta, StoryObj } from "@storybook/react";
import CardForm from "./CardForm";

const meta = {
  title: "Custom Components/Card Form",
  component: CardForm,
  args: {
    formData: {
      propertyName: "",
      address: "",
      zipCode: "",
      city: "",
      coordinates: "",
      estimatedValue: 0,
      totalRisk: 0,
      handledRisks: 0,
      relevantRisks: 0,
    },
    handleChange: () => {},
    handleSubmit: () => {},
  },
} satisfies Meta<typeof CardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
