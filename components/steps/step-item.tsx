import { IStep } from '@/types/steps';
import { cn } from '@/lib/utils';
import React from 'react';
import { Icons } from '@/components/icons';

type StepItemProps = {
  step: IStep;
};

export const StepItem: React.FC<StepItemProps> = ({ step }) => {
  const Icon = Icons[step.icon];
  return (
    <div className='flex items-center'>
      <div className='relative flex items-center justify-center'>
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full border-2',
            step.completed
              ? 'border-primary bg-primary text-primary-foreground'
              : step.active
                ? 'border-primary'
                : 'border-muted',
          )}
        >
          <Icon
            className={cn(
              'h-5 w-5',
              !step.active && !step.completed ? 'text-muted-foreground' : '',
            )}
          />
        </div>
        <div className='ml-4'>
          <span
            className={cn(
              'text-sm',
              step.active || step.completed
                ? 'text-foreground'
                : 'text-muted-foreground',
            )}
          >
            {step.name}
          </span>
        </div>
      </div>
    </div>
  );
};
