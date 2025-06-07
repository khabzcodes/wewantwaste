import { Stepper } from '@/components/steps/stepper';
import { stepsConfig } from '@/config/menu';

export default function Home() {
  return (
    <div className='container mx-auto py-10'>
      <Stepper steps={stepsConfig} />
    </div>
  );
}
