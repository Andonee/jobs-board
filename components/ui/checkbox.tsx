'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  id: string;
  label?: string;
  text?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, text, ...props }, ref) => (
  // <div className="items-top flex space-x-2">
  <div className="flex space-x-2 align-middle">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'dark: peer h-[14px] w-[14px] shrink-0 rounded-sm border border-lightGrey shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet data-[state=unchecked]:bg-lightGrey data-[state=checked]:text-primary-foreground data-[state=checked]:text-white data-[state=unchecked]:hover:bg-grey',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon className="h-[12px] w-[12px]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <div className="grid gap-1.5 leading-none">
      {label && (
        <label
          htmlFor={props.id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
