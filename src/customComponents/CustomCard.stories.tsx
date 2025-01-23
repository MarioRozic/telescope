import { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";

const meta: Meta<typeof CustomCard> = {
  title: "Custom Components/Custom Card",
  component: CustomCard,
  args: {
    id: 1,
    propertyName: "Building",
    handledRisks: 123,
    relevantRisks: 23,
    totalRisk: 2333,
  },
};

export default meta;

type Story = StoryObj<typeof CustomCard>;

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
