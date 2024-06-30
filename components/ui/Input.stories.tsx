import { Input } from '@/components/ui/input';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Image from 'next/image';

const meta = {
  title: 'Components/ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Input variants',
      options: [
        'text',
        'email',
        'file',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
  },
  args: { type: 'text', placeholder: 'Placeholder', onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    onClick: fn(),
  },
};

export const WithLabel: Story = {
  args: {
    disabled: false,
    onClick: fn(),
  },
  render: () => (
    <Input type="text" id="input" placeholder="Placeholder" label="Label" />
  ),
};

export const WithIcon: Story = {
  args: {
    disabled: false,
    onClick: fn(),
  },
  render: () => (
    <Input
      type="text"
      id="input"
      placeholder="Placeholder"
      icon={
        <Image
          src={'./assets/icons/searchIcon.svg'}
          alt="search icon"
          width={24}
          height={24}
        />
      }
    />
  ),
};

export const WithIconAndLabel: Story = {
  args: {
    disabled: false,
    onClick: fn(),
  },
  render: () => (
    <Input
      type="text"
      id="input"
      placeholder="Placeholder"
      label="Label"
      icon={
        <Image
          src={'./assets/icons/searchIcon.svg'}
          alt="search icon"
          width={24}
          height={24}
        />
      }
    />
  ),
};
