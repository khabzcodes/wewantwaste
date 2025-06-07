import { IStep } from '@/types/steps';
import { StepItem } from '@/components/steps/step-item';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

type StepperProps = {
  steps: IStep[];
};

export const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const isMobile = useMobile();
  const [showMobileStepper, setShowMobileStepper] = useState(false);

  const toggleMobileStepper = () => {
    setShowMobileStepper((prev) => !prev);
  };

  return (
    <div className='mx-auto w-full max-w-6xl pr-4'>
      {isMobile && (
        <div className='mb-4 flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleMobileStepper}
            aria-label='Toggle progress steps'
          >
            <Menu size={18} />
          </Button>
          <h2 className='text-sm font-medium'>Your Progress</h2>
        </div>
      )}

      {(!isMobile || showMobileStepper) && (
        <div
          className={cn(
            'mb-8 flex flex-col items-start justify-between gap-2 transition-all duration-300',
            isMobile
              ? 'border-muted ml-2.5 border-l-2 pl-4'
              : 'md:flex-row md:items-center',
          )}
        >
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <StepItem step={step} />
              {idx < steps.length - 1 && (
                <div
                  className={cn(
                    'bg-muted-foreground flex-1',
                    isMobile ? 'ml-3 h-8 w-px' : 'h-px w-10 md:mx-4',
                    step.completed && 'bg-primary',
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
