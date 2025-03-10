"use client";

import {
  Guides,
  QuickLinks,
  ReachUs,
  SocialLinks,
} from "@/commons/services/FooterLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-[16px] sm:px-[36px] bg-[#000000] pt-[43px] md:pt-[96px]  flex flex-col justify-center items-center">
      <div className="max-w-[1160px] w-full flex-col md:flex-row flex justify-between items-start ">
        <div className="flex flex-col mr-[50px] max-w-[255px] w-full gap-[24px]">
          <div>
            <Image
              src="/svg/MobileLogo.svg"
              width={102}
              height={28}
              alt="Logo"
            />
          </div>
          <p className="font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          </p>
          <nav>
            <ul className="flex w-full gap-[16px]">
              {SocialLinks.map((item) => (
                <li
                  key={item.link}
                  className="w-[24px] flex justify-center items-center h-[24px] rounded-[50%]  bg-[#333333] "
                >
                  <Image
                    src={item.img}
                    width={14}
                    height={14}
                    alt="Social Icons"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col max-w-[255px] w-full gap-[24px]">
          <h6 className="font-[manrope] font-medium text-[20px] leading-[30px] text-white">
            Quick Links
          </h6>
          <nav>
            <ul>
              {QuickLinks.map((item) => (
                <li key={item.link} className="mb-[12px]">
                  <span className="font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
                    {item.link}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col max-w-[255px] w-full gap-[24px]">
          <h6 className="font-[manrope] font-medium text-[20px] leading-[30px] text-white">
            Guides{" "}
          </h6>
          <nav>
            <ul>
              {Guides.map((item) => (
                <li key={item.link} className="mb-[12px]">
                  <span className="font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
                    {item.link}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-[24px] w-[255px]">
          <h6 className="font-[manrope] font-medium text-[20px] leading-[30px] text-white">
            Reach us
          </h6>
          <nav>
            <ul>
              {ReachUs.map((item) => (
                <li key={item.title} className="flex mb-[29px] w-[255px] ">
                  <Image
                    src={item.img}
                    width={24}
                    height={24}
                    alt="contact"
                    className="mr-[8px]"
                  />
                  <span className="font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-[1160px] w-full mt-[105px] mb-[35px] flex flex-col sm:flex-row justify-between ">
        <span className="font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
          © 2020 GoodLyfe. All rights reserved
        </span>
        <div>
          <span className="px-[8px] border-r-[1px] h-[24px] border-[#D9DBE1] font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
            Terms & Conditions
          </span>
          <span className="px-[8px] border-r-[1px] h-[24px] border-[#D9DBE1] font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
            Privacy Policy
          </span>
          <span className="px-[8px] border-r-[1px] h-[24px] border-[#D9DBE1] font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
            Sitemap
          </span>
          <span className="pl-[8px]  font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]">
            Disclaimer
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
