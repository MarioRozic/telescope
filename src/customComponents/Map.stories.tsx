import { Meta, StoryObj } from "@storybook/react";
import Map from "./Map";

const meta = {
  title: "Custom Components/Map",
  component: Map,
  args: {
    pins: [],
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-[800px]">
        <div className="w-[700px] h-[800px] rounded-lg overflow-hidden">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Map>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithPins: Story = {
  args: {
    pins: [
      {
        lat: 51.5074,
        lng: -0.1278,
        title: "Greenfield Estate",
      },
      {
        title: "Blue Haven",
        lat: 51.5034,
        lng: -0.1276,
      },
    ],
  },
};

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
