import { Button } from '@/components/ui/button';
import React from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useSkips } from '@/context/skips-context';

export const ViewMode: React.FC = () => {
  const { viewMode, setViewMode } = useSkips();
  return (
    <div className='boreder border-muted-foreground flex items-center rounded-md'>
      <Button
        variant='ghost'
        size='sm'
        className={cn(
          'rounded-r-none',
          viewMode === 'grid' && 'bg-primary text-primary-foreground',
        )}
        onClick={() => setViewMode('grid')}
      >
        <Icons.grid className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='sm'
        className={cn(
          'rounded-l-none',
          viewMode === 'list' && 'bg-primary text-primary-foreground',
        )}
        onClick={() => setViewMode('list')}
      >
        <Icons.list className='h-4 w-4' />
      </Button>
    </div>
  );
};
