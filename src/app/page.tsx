
import HomeCustomers from "@/components/landingPage/HomeCustomers";
import HomeS2 from "@/components/landingPage/HomeS2";
import HomeS4 from "@/components/landingPage/HomeS4";
import SwiperSection from "@/components/landingPage/swiperSection";
import WelcomeS1 from "@/components/landingPage/WelcomeS1";

export default function Home() {
  return (
    <div>
      <WelcomeS1 />
      <HomeS2 />
      <SwiperSection />
      <HomeS4 />
      <HomeCustomers />
    </div>
  );
}
