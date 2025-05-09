'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

interface IProp {
  activeCategory: string | null;
  handlesetActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const SwiperSection3Mob: React.FC<IProp> = ({
  handlesetActiveCategory,
  activeCategory,
}) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={10}
      modules={[Pagination]}
      className='mySwiper '
    >
      <SwiperSlide className=''>
        <motion.div
          animate={
            activeCategory?.startsWith('space')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group transition-color duration-500 border border-transparent border-t-white p-2 md:p-10 flex flex-col w-[250px] gap-2 md:gap-6 cursor-pointer mr-10`}
          onMouseEnter={() => handlesetActiveCategory('space')}
        >
          <h3
            className={`text-lg md:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Our Coaches
          </h3>
          <p
            className={`max-w-sm font-light text-xs md:text-base transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Armed with advanced education, equipment, and training, Equinox
            Coaches are the exponent in maximizing potential and pushing human
            performance forward. Certified by the Equinox Fitness Training
            Institute, every Coach is a fitness leader with extensive experience
            across the EXQ OS and MNR (Movement. Nutrition. Regeneration.)
            protocols to develop personalized, holistic approaches to full
            health optimization.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <motion.div
          animate={
            activeCategory?.startsWith('classes')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group transition-color duration-500 border border-transparent border-t-white p-2 md:p-10 flex flex-col w-[250px] gap-2 md:gap-6 cursor-pointer `}
          onMouseEnter={() => handlesetActiveCategory('classes')}
        >
          <h3
            className={`text-lg md:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Engineered Results{' '}
          </h3>
          <p
            className={`max-w-sm font-light text-xs md:text-base transition-all duration-200 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Trained, educated, and backed by our Health Advisory Board, Equinox
            Coaches are certified to develop programs for total body
            conditioning, specialized needs, and advanced health optimization.
          </p>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSection3Mob;
