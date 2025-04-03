import HomeS2 from '@/components/landingPage/HomeS2';
import MembershipSection from '@/components/landingPage/HomeS4';

import Section3 from '@/components/landingPage/Section3';

import TestimonialSection from '@/components/landingPage/TestimonialSection';
import WelcomeS1 from '@/components/landingPage/WelcomeS1';

export default function Home() {
  return (
    <div>
      <WelcomeS1 />
      <HomeS2 />
      <Section3 />
      {/* <SwiperSection /> */}
      <TestimonialSection />
    </div>
  );
}
