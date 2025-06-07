import { useSkips } from '@/context/skips-context';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { formatCurrency } from '@/lib/utils';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SkipSummaryDrawer = () => {
  const { selectedSkip, showDetails, setShowDetails } = useSkips();
  return (
    <Drawer open={showDetails} onOpenChange={setShowDetails}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Skip Summary</DrawerTitle>
          <DrawerDescription>
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </DrawerDescription>
        </DrawerHeader>
        <div className='flex flex-col gap-2 px-36 pb-10'>
          <div className='border-primary rounded-lg border p-4'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {selectedSkip?.size} Yard Skip
              </h3>
              <div className='text-primary text-xl font-bold'>
                {formatCurrency(selectedSkip?.price_before_vat || 0)}
              </div>
            </div>

            <div className='space-y-3 text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Location:</span>
                <span>{selectedSkip?.postcode}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Hire Period:</span>
                <span>{selectedSkip?.hire_period_days} days</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Road Legal:</span>
                <span>{selectedSkip?.allowed_on_road ? 'Yes' : 'No'}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Heavy Waste:</span>
                <span>
                  {selectedSkip?.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}
                </span>
              </div>
            </div>

            {!selectedSkip?.allowed_on_road && (
              <div className='mt-4 flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50 p-3'>
                <AlertTriangle className='mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600' />
                <p className='text-xs text-amber-800'>
                  This skip is not allowed on public roads. It must be placed on
                  private property.
                </p>
              </div>
            )}
          </div>
        </div>
        <DrawerFooter className='px-36'>
          <div className='flex w-full justify-end gap-2'>
            <Button
              variant='outline'
              type='button'
              onClick={() => setShowDetails(false)}
            >
              Change Selection
            </Button>
            <Button>Continue</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
