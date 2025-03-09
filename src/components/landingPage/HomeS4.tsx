import Image from "next/image";
import React from "react";

export default function HomeS3() {
  return (
    <div className="max-w-[1200px] w-full flex justify-between items-center m-auto mt-[90px]">
      <div className="max-w-[540px] w-full">
        <h2 className="text-[40px] font-bold text-[#E43071] ">
          Premium Facilities
        </h2>
        <p className="mt-2.5 text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec
          felis. Sed id egestasegestas risus, ut imperdiet augue.
        </p>
        <button className="max-w-[237px] w-full h-[68px] bg-none border-[1px] border-[#E43071] rounded-[38px] mt-[20px] text-[#E43071]">
          Learn More
        </button>
      </div>
      <div className="">
        <Image
          src="/image/gym.png"
          width={444}
          height={296}
          alt="weight"
          className="z-10 relative"
        />
        <Image
          src="/image/deadlift.png"
          width={422}
          height={281}
          alt="situp"
          className="relative mt-[-170px] ml-[199px] "
        />
      </div>
    </div>
  );
}
