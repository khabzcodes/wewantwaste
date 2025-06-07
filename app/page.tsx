'use client';
import { Stepper } from '@/components/steps/stepper';
import { stepsConfig } from '@/config/menu';
import React from 'react';
import { ViewMode } from '@/components/skips/controls/view-mode';
import { FilterSkips } from '@/components/skips/controls/filter';
import { SkipsList } from '@/components/skips/skips-list';
import { SkipsProvider, useSkips } from '@/context/skips-context';

const SkipsContent = () => {
  const { filteredSkips } = useSkips();
  return (
    <div className='mx-auto w-full max-w-6xl py-10'>
      <Stepper steps={stepsConfig} />
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold'>Choose Your Skip Size</h1>
          <p className='text-muted-foreground text-sm'>
            Select the skip size that best suits your needs
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <ViewMode />
          <FilterSkips />
        </div>
      </div>
      <SkipsList skips={filteredSkips} />
    </div>
  );
};

export default function Home() {
  return (
    <SkipsProvider>
      <SkipsContent />
    </SkipsProvider>
  );
}
