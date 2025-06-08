import { skipsData } from '@/config/skips';
import { ISkip } from '@/types/skips';

const environment = process.env.NODE_ENV || 'development';
const uri =
  'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

export const getSkipsAction = async () => {
  if (environment === 'development') {
    return await fetchMockSkips();
  }

  return await fetchProdSkips();
};

const fetchProdSkips = async () => {
  const response = await fetch(uri);
  if (!response.ok) {
    throw new Error('Failed to fetch skips data');
  }

  const skips: ISkip[] = await response.json();

  return skips;
};

const fetchMockSkips = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return skipsData;
};
