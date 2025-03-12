import Image from 'next/image';

const LearnMoreS1 = () => {
  return (
    <div className=' w-full py-[100px] flex justify-between'>
      <div>
        <div>
          <h3 className='w-[400px] mb-[20px] font-[popins] font-normal text-[40px] leading-[40px] text-white '>
            UNLIMITED SIGNATURE CLASSES
          </h3>
          <p className='w-[400px]  font-[popins] font-normal text-[19px] leading-[22px] text-white '>
            Science-backed classes developed by the industry,s best minds maxime
            transform
          </p>
        </div>
        <button className='w-[220px] h-[63px] mt-[60px] border-[2px] border-white'>
          <span className='w-[400px]  font-[popins] font-normal text-[19px] leading-[22px] text-white '>
            Learn More
          </span>
        </button>
      </div>
      <div>
        <Image
          src='/image/LANDING_Class.webp'
          width={620}
          height={800}
          alt='img'
        />
      </div>
    </div>
  );
};

export default LearnMoreS1;
