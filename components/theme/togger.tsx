'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ThemeTogglerProps = {
  className?: string;
};

export default function ThemeToggler({ className }: ThemeTogglerProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleTheme = () => {
    //@ts-ignore
    if (!document.startViewTransition) switchTheme();

    //@ts-ignore
    document.startViewTransition(switchTheme);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant='ghost'
      className={cn('aspect-square size-8 p-0', className)}
    >
      <SunIcon className='size-4 scale-100 rotate-0 transition-all md:size-5 dark:scale-0 dark:-rotate-90' />
      <MoonIcon className='absolute size-4 scale-0 rotate-90 transition-all md:size-5 dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
