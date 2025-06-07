import { FilterType, ISkip } from '@/types/skips';
import React from 'react';
import { skipsData } from '@/config/skips';

type ViewModeType = 'list' | 'grid';

type FilterCounts = {
  all: number;
  roadLegal: number;
  privateLand: number;
  heavyWaste: number;
  standardWaste: number;
};

type SkipsContextType = {
  viewMode: ViewModeType;
  setViewMode: (mode: ViewModeType) => void;
  activeFilters: Set<FilterType>;
  selectedSizes: Set<number>;
  toggleFilter: (filter: FilterType) => void;
  toggleSize: (size: number) => void;
  filteredSkips: ISkip[];
  filterCounts: FilterCounts;
  sizeCounts: Record<number, number>;
  hasActiveFilters: boolean;
  selectedSkip: ISkip | null;
  toggleSkipSelection: (skip: ISkip | null) => void;
};

const SkipsContext = React.createContext<SkipsContextType | undefined>(
  undefined,
);

export const SkipsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [viewMode, setViewMode] = React.useState<ViewModeType>('grid');
  const [activeFilters, setActiveFilters] = React.useState<Set<FilterType>>(
    new Set(['all']),
  );
  const [selectedSizes, setSelectedSizes] = React.useState<Set<number>>(
    new Set(),
  );
  const [selectedSkip, setSelectedSkip] = React.useState<ISkip | null>(null);

  const toggleSkipSelection = (skip: ISkip | null) => {
    setSelectedSkip(skip);
  };

  const filterCounts: FilterCounts = React.useMemo(() => {
    return {
      all: skipsData.length,
      roadLegal: skipsData.filter((skip) => skip.allowed_on_road).length,
      privateLand: skipsData.filter((skip) => !skip.allowed_on_road).length,
      heavyWaste: skipsData.filter((skip) => skip.allows_heavy_waste).length,
      standardWaste: skipsData.filter((skip) => !skip.allows_heavy_waste)
        .length,
    };
  }, []);

  const sizeCounts: Record<number, number> = React.useMemo(() => {
    const counts: Record<number, number> = {};
    skipsData.forEach((skip) => {
      counts[skip.size] = (counts[skip.size] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredSkips: ISkip[] = React.useMemo(() => {
    return skipsData.filter((skip) => {
      const matchesSize =
        selectedSizes.size === 0 || selectedSizes.has(skip.size);

      if (!matchesSize) return false;

      const matchesFilter =
        (activeFilters.has('road-legal') && skip.allowed_on_road) ||
        (activeFilters.has('private-land') && !skip.allowed_on_road) ||
        (activeFilters.has('heavy-waste') && skip.allows_heavy_waste) ||
        (activeFilters.has('standard-waste') && !skip.allows_heavy_waste);

      return activeFilters.has('all') || matchesFilter;
    });
  }, [activeFilters, selectedSizes]);

  const hasActiveFilters = !activeFilters.has('all') || selectedSizes.size > 0;

  const toggleFilter = (filter: FilterType) => {
    const newFilters = new Set(activeFilters);
    if (filter === 'all') {
      setActiveFilters(new Set(['all']));
    } else {
      newFilters.delete('all');
      if (newFilters.has(filter)) {
        newFilters.delete(filter);
      } else {
        newFilters.add(filter);
      }
      if (newFilters.size === 0) {
        newFilters.add('all');
      }
      setActiveFilters(newFilters);
    }
  };

  const toggleSize = (size: number) => {
    const newSizes = new Set(selectedSizes);
    if (newSizes.has(size)) {
      newSizes.delete(size);
    } else {
      newSizes.add(size);
    }
    setSelectedSizes(newSizes);
  };

  return (
    <SkipsContext.Provider
      value={{
        viewMode,
        setViewMode,
        activeFilters,
        selectedSizes,
        toggleFilter,
        toggleSize,
        filteredSkips,
        filterCounts,
        sizeCounts,
        hasActiveFilters,
        selectedSkip,
        toggleSkipSelection,
      }}
    >
      {children}
    </SkipsContext.Provider>
  );
};

export const useSkips = () => {
  const context = React.useContext(SkipsContext);
  if (!context) {
    throw new Error('useSkips must be used within a SkipsProvider');
  }
  return context;
};
