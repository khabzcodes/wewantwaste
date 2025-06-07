import { IStep } from '@/types/steps';
import { StepItem } from '@/components/steps/step-item';
import React from 'react';

type StepperProps = {
  steps: IStep[];
};

export const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className='mx-auto w-full max-w-4xl'>
      <div className='mb-8 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center'>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <StepItem step={step} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
