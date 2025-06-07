import React from 'react';
import { ISkip } from '@/types/skips';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSkips } from '@/context/skips-context';

type SelectionProps = React.ComponentPropsWithoutRef<'div'> & {
  skip: ISkip;
};

export const SelectionButton: React.FC<SelectionProps> = ({
  skip,
  className,
}) => {
  const { selectedSkip, toggleSkipSelection } = useSkips();
  return (
    <Button
      variant={selectedSkip?.id !== skip.id ? 'default' : 'outline'}
      className={cn(
        'w-full',
        className,
        skip.forbidden && 'cursor-not-allowed',
        selectedSkip?.id === skip.id && 'border-primary text-primary',
      )}
      disabled={skip.forbidden}
      onClick={() => {
        if (selectedSkip?.id === skip.id) {
          toggleSkipSelection(null);
        } else {
          toggleSkipSelection(skip);
        }
      }}
    >
      {selectedSkip?.id === skip.id ? 'Selected' : 'Select Skip'}
    </Button>
  );
};
