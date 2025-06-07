import { IStep } from '@/types/steps';
import { StepItem } from '@/components/steps/step-item';
import React from 'react';
import { cn } from '@/lib/utils';

type StepperProps = {
  steps: IStep[];
};

export const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className='mx-auto w-full max-w-6xl'>
      <div className='mb-8 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center'>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <StepItem step={step} />
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  'bg-muted-foreground h-px w-10 flex-1 md:mx-4',
                  step.completed && 'bg-primary',
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
