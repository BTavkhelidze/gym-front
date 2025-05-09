import HomeS2 from '@/components/landingPage/HomeS2';

import Section3 from '@/components/landingPage/Section3';

import TestimonialSection from '@/components/landingPage/ReviewsSection';
import WelcomeS1 from '@/components/landingPage/WelcomeS1';
import LiveGymActivitySection from '@/components/landingPage/realTimeActivity';

export default function Home() {
  return (
    <div>
      <WelcomeS1 />
      <HomeS2 />
      <Section3 />
      {/* <SwiperSection /> */}
      {/* <TestimonialSection /> */}
      <LiveGymActivitySection />
    </div>
  );
}
