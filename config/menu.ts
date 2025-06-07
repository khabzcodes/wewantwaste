import { IStep } from '@/types/steps';

export const stepsConfig: IStep[] = [
  {
    id: 1,
    name: 'Postcode',
    icon: 'location',
    completed: true,
  },
  {
    id: 2,
    name: 'Waste Type',
    icon: 'trash',
    completed: true,
  },
  {
    id: 3,
    name: 'Select Skip',
    icon: 'shippingTruck',
    active: true,
  },
  {
    id: 4,
    name: 'Permit Check',
    icon: 'shield',
  },
  {
    id: 5,
    name: 'Choose Date',
    icon: 'calendar',
  },
  {
    id: 6,
    name: 'Payment',
    icon: 'creditCard',
  },
];
