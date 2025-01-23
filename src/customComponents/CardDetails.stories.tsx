import { Meta, StoryObj } from "@storybook/react";
import CardDetails from "./CardDetails";

const meta = {
  title: "Custom Components/Card Details",
  component: CardDetails,
  args: {
    id: 1,
    propertyName: "Name",
    address: "Address",
    zipCode: "Zip Code",
    city: "City",
    coordinates: "59.9139° N, 10.7522° E",
    estimatedValue: 4000,
    totalRisk: 10000,
    handledRisks: 2,
    relevantRisks: 3,
  },
} satisfies Meta<typeof CardDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },
};
