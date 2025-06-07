import React from 'react';
import { ISkip } from '@/types/skips';
import { SkipCard } from './skip-card';
import { SkipListItem } from './skip-list-item';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SkipsListProps {
  skips: ISkip[];
  viewMode: 'grid' | 'list';
}

export const SkipsLayout: React.FC<SkipsListProps> = ({ skips, viewMode }) => {
  return (
    <ScrollArea className='mt-6 h-[calc(100vh-220px)]'>
      <div
        className={cn(
          'pr-4',
          viewMode === 'grid'
            ? 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
            : 'flex flex-col gap-4',
        )}
      >
        {skips.length === 0 ? (
          <div className='py-8 text-center'>
            <p className='text-muted-foreground'>
              No skips available for your selection.
            </p>
          </div>
        ) : (
          skips.map((skip) =>
            viewMode === 'grid' ? (
              <SkipCard key={skip.id} skip={skip} />
            ) : (
              <SkipListItem key={skip.id} skip={skip} />
            ),
          )
        )}
      </div>
    </ScrollArea>
  );
};
