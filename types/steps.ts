import { Icons } from '@/components/icons';

export interface IStep {
  id: number;
  name: string;
  icon: keyof typeof Icons;
  completed?: boolean;
  active?: boolean;
}
