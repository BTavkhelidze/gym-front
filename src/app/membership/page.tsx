import Benefits from '@/components/membershipPage/Benefits';
import LeaarnMoreS2 from '@/components/membershipPage/LeaarnMoreS2';
import LearnMoreS1 from '@/components/membershipPage/LearnMoreS1';
import LearnMoreS3 from '@/components/membershipPage/LearnMoreS3';
import MembershipBaner from '@/components/membershipPage/MembershipBaner';
import MemberShipSwiper from '@/components/membershipPage/MemberShipSwiper';

export default function page() {
  return (
    <div className='w-full flex flex-col justify-center'>
      <>
        <MembershipBaner />
      </>
      <div className='w-full flex flex-col justify-center items-center   bg-black'>
        <div className='max-w-[1160px] w-full'>
          <Benefits />
        </div>
        <div className='max-w-[1160px] w-full'>
          <LearnMoreS1 />
        </div>
        <div className='max-w-[1160px] w-full'>
          <LeaarnMoreS2 />
        </div>
        <div className='max-w-[1160px] w-full'>
          <LearnMoreS3 />
        </div>
      </div>
      <>
        <MemberShipSwiper />
      </>
    </div>
  );
}
