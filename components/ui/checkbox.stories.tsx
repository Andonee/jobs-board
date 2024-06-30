import { Checkbox } from '@/components/ui/checkbox';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/ui/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Checkbox variants',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    onClick: fn(),
    id: 'id',
  },
};

export const WithLabel: Story = {
  args: {
    disabled: false,
    onClick: fn(),
    label: 'Label',
    id: 'id',
  },
};

export const WithText: Story = {
  args: {
    disabled: false,
    onClick: fn(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ultrices nulla.',
    id: 'id',
  },
};

export const WithTextAndLabel: Story = {
  args: {
    disabled: false,
    onClick: fn(),
    label: 'Label',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ultrices nulla.',
    id: 'id',
  },
};
