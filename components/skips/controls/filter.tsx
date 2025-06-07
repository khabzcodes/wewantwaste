import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import React from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { FilterType } from '@/types/skips';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { useSkips } from '@/context/skips-context';

export const FilterSkips: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const {
    filterCounts,
    sizeCounts,
    toggleFilter,
    toggleSize,
    hasActiveFilters,
    activeFilters,
    selectedSizes,
  } = useSkips();

  const filterOptions = React.useMemo(() => {
    const filterTypes = [
      { id: 'all', label: 'All Skips', count: filterCounts.all },
      { id: 'road-legal', label: 'Road Legal', count: filterCounts.roadLegal },
      {
        id: 'private-land',
        label: 'Private Land',
        count: filterCounts.privateLand,
      },
      {
        id: 'heavy-waste',
        label: 'Heavy Waste',
        count: filterCounts.heavyWaste,
      },
      {
        id: 'standard-waste',
        label: 'Standard Waste',
        count: filterCounts.standardWaste,
      },
    ];

    const availableSizes = Object.keys(sizeCounts)
      .map(Number)
      .sort((a, b) => a - b)
      .filter((size) => sizeCounts[size] > 0);

    return { filterTypes, availableSizes };
  }, [filterCounts, sizeCounts]);

  const handleFilterSelect = (filter: FilterType) => {
    toggleFilter(filter);
  };

  const handleSizeSelect = (size: number) => {
    toggleSize(size);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className={
            hasActiveFilters
              ? 'border-primary bg-primary/10 text-primary hover:bg-primary/20'
              : 'border-primary hover:bg-primary/10 hover:text-primary'
          }
        >
          <Icons.filter className='mr-2 size-3' />
          Filters
          {hasActiveFilters && (
            <Badge
              variant='secondary'
              className='bg-primary text-primary-foreground ml-2'
            >
              {activeFilters.size +
                selectedSizes.size -
                (activeFilters.has('all') ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80 p-0' align='end'>
        <Command>
          <CommandInput placeholder='Search your preferred Skip' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Filter Types'>
              {filterOptions.filterTypes.map((option) => (
                <CommandItem
                  key={option.id}
                  className='flex items-center justify-between'
                  onSelect={() => handleFilterSelect(option.id as FilterType)}
                >
                  <div className='flex items-center gap-2'>
                    <span>{option.label}</span>
                    {activeFilters.has(option.id as FilterType) && (
                      <Icons.check className='text-primary size-3' />
                    )}
                  </div>
                  <span className='text-muted-foreground text-xs'>
                    {option.count}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading='Skip Sizes'>
              <div className='grid grid-cols-4 gap-2 p-2'>
                {filterOptions.availableSizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSizes.has(size) ? 'default' : 'outline'}
                    size='sm'
                    onClick={() => handleSizeSelect(size)}
                    className='flex items-center justify-center'
                  >
                    {size} yd³
                  </Button>
                ))}
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
