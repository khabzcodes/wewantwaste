import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Loading() {
  return (
    <div className='mx-auto w-full max-w-6xl px-3 py-10'>
      {/* Stepper skeleton */}
      <div className='mb-8'>
        <Skeleton className='h-12 w-full' />
      </div>

      {/* Header skeleton */}
      <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-8 w-64' />
          <Skeleton className='h-5 w-80' />
        </div>
        <div className='flex items-center gap-2 pr-4'>
          <Skeleton className='h-10 w-20' />
          <Skeleton className='h-10 w-32' />
        </div>
      </div>

      {/* Skips grid/list skeleton */}
      <ScrollArea className='mt-6 h-[calc(100vh-220px)]'>
        <div className='grid grid-cols-1 gap-4 pr-4 md:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, index) => (
            <SkipCardSkeleton key={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function SkipCardSkeleton() {
  return (
    <div className='rounded-lg border p-4 shadow-sm'>
      <div className='flex flex-col gap-3'>
        <Skeleton className='h-6 w-3/4' />
        <Skeleton className='h-32 w-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-3/4' />
        </div>
        <div className='mt-2 flex justify-between'>
          <Skeleton className='h-8 w-24' />
          <Skeleton className='h-8 w-10' />
        </div>
      </div>
    </div>
  );
}
