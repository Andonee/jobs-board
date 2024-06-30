import { ThemeSwitch } from '@/components/ui/themeSwitch';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/ui/ThemeSwitch',
  component: ThemeSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    onClick: fn(),
  },
};
