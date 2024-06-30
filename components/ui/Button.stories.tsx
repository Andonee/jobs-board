import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variants',
      options: [
        'default',
        'destructive',
        'ghost',
        'link',
        'outline',
        'secondary',
      ],
    },
    size: {
      control: 'select',
      description: 'Select variants',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark Button',
    variant: 'dark',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export const Light: Story = {
  args: {
    children: 'Light Button',
    variant: 'light',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};
