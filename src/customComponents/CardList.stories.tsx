import { Meta, StoryObj } from "@storybook/react";
import CardList from "./CardList";

const meta = {
  title: "CardList",
  component: CardList,
  args: {
    data: [
      {
        propertyName: "Prop1",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop2",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop3",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop4",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop5",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop6",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop7",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
      {
        propertyName: "Prop8",
        handledRisks: 12,
        relevantRisks: 23,
        totalRisk: 444,
      },
    ],
  },
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    data: [],
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    data: [],
    isError: true,
  },
};
