import React from 'react';
import { ISkip } from '@/types/skips';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { formatCurrency } from '@/lib/utils';

interface SkipListItemProps {
  skip: ISkip;
}

export const SkipListItem: React.FC<SkipListItemProps> = ({ skip }) => {
  return (
    <div className='flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center'>
      <div className='bg-muted flex shrink-0 items-center justify-center rounded-md md:h-24 md:w-32'>
        <span className='text-muted-foreground text-xs'>Image Placeholder</span>
      </div>

      <div className='flex-grow space-y-2'>
        <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
          <h3 className='font-bold'>{skip.size} yd³ Skip</h3>
          <Badge variant={!skip.forbidden ? 'default' : 'destructive'}>
            {!skip.forbidden ? 'Available' : 'Unavailable'}
          </Badge>
        </div>

        <p className='text-muted-foreground text-sm'>
          {skip.hire_period_days} days hire period
        </p>

        <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
          <div className='flex flex-wrap gap-1'>
            {!skip.allowed_on_road && (
              <Badge variant='secondary' className='text-xs text-yellow-600'>
                <Icons.alertCircle size={3} />
                Not allowed on road
              </Badge>
            )}
            {skip.allows_heavy_waste && (
              <Badge variant='outline' className='text-xs'>
                Heavy Waste
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className='gap-2 md:flex md:flex-col md:items-end md:text-right'>
        <div className='flex justify-between md:flex-col md:items-end'>
          <span className='text-muted-foreground text-sm'>Price</span>
          <span className='font-bold'>
            {formatCurrency(skip.price_before_vat)}
          </span>
        </div>
        <Button className='w-full md:w-auto' disabled={skip.forbidden}>
          Select Skip
        </Button>
      </div>
    </div>
  );
};
