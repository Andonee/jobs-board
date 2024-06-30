'use client';

import { useState, useMemo, forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import { SunIcon, MoonIcon } from '@/public/assets/icons/Icons';

const ThemeSwitch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [theme, setTheme] = useState('light');

  const onToggleState = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const icon = useMemo(() => {
    return theme === 'light' ? (
      <span className="absolute left-[100%]">
        {SunIcon({ width: 16, height: 16 })}
      </span>
    ) : (
      <span className="absolute left-[-100%]">
        {MoonIcon({ width: 16, height: 16, color: 'white' })}
      </span>
    );
  }, [theme]);

  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center overflow-hidden rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}
      ref={ref}
      onClick={onToggleState}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      >
        {icon}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
ThemeSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ThemeSwitch };
