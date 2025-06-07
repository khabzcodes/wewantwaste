import React from 'react';
import { ISkip } from '@/types/skips';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { cn, formatCurrency } from '@/lib/utils';
import { useSkips } from '@/context/skips-context';
import { SelectionButton } from '@/components/skips/selection-button';

interface SkipCardProps {
  skip: ISkip;
}

export const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const { selectedSkip, toggleSkipSelection } = useSkips();
  return (
    <Card
      onClick={() => {
        if (skip.forbidden) return;
        if (selectedSkip?.id === skip.id) {
          toggleSkipSelection(null);
        } else {
          toggleSkipSelection(skip);
        }
      }}
      className={cn(
        'flex h-full cursor-pointer flex-col transition-shadow hover:shadow-lg',
        selectedSkip === skip && 'border-primary border-1',
      )}
    >
      <CardHeader className='pb-2'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-bold'>{skip.size} Yard Skip</h3>
          <Badge variant={!skip.forbidden ? 'default' : 'destructive'}>
            {!skip.forbidden ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
        <p className='text-muted-foreground text-sm'>
          {skip.hire_period_days} days hire period
        </p>
      </CardHeader>
      <CardContent className='flex-grow'>
        <div className='bg-muted mb-4 flex aspect-[16/9] items-center justify-center rounded-md'>
          <span className='text-muted-foreground'>Image Placeholder</span>
        </div>
        <div className='space-y-2'>
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
      </CardContent>
      <CardFooter className='flex flex-col gap-2'>
        <div className='flex w-full justify-between'>
          <span className='text-muted-foreground text-sm'>
            Price (Exc. VAT)
          </span>
          <span className='font-bold'>
            {formatCurrency(skip.price_before_vat)}
          </span>
        </div>
        <SelectionButton skip={skip} />
      </CardFooter>
    </Card>
  );
};
