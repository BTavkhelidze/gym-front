import TrainersHeroS1 from '@/components/Trainers/HeroS1';
import PersonalSection from '@/components/Trainers/PersonalSection';
import { TrainersSection } from '@/components/Trainers/Trainers';

const page = () => {
  return (
    <main className='bg-black'>
      <TrainersHeroS1 />
      <PersonalSection />
      <TrainersSection />
    </main>
  );
};

export default page;
