import TrainersHeroS1 from '@/components/Trainers/HeroS1';
import PersonalSection from '@/components/Trainers/PersonalSection';
import Section3Trainer from '@/components/Trainers/TrainerSection3';

const page = () => {
  return (
    <main className='bg-black'>
      <TrainersHeroS1 />
      <PersonalSection />
      <Section3Trainer />
    </main>
  );
};

export default page;
