import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../index.css';
import '../../node_modules/swiper/swiper.css'
import '../../node_modules/swiper/modules/navigation.css'


import { Navigation } from 'swiper/modules';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='hero'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1} 
      >
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={isMobile ? '/seal-blue-mob.jpg' : '/seal-blue-resized-pc.jpg'}
              alt="Seal"
              className="slide-image brightness-75"
            />
            <div className="overlay absolute top-0 left-0 flex flex-col gap-11 items-center place-content-around w-full h-full transition">
              <h2 className='text-5xl text-white font-bold m-5 text-center'>BYD SEAL</h2>
              <div className="flex justify-center flex-col gap-5 md:gap-12 md:flex-row">
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">SAIBA MAIS</button>
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">TESTE DRIVE</button>
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">MONTE O SEU</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={isMobile ? '/big-MOB05.jpg' : '/PC-05big.jpg'}
              alt="Dolphin"
              className="slide-image brightness-75"
            />
            <div className="overlay absolute top-0 left-0 flex flex-col gap-11 items-center place-content-around w-full h-full transition">
              <h2 className='text-5xl text-white font-bold m-5 text-center'>BYD YUAN PR</h2>
              <div className="flex justify-center flex-col gap-5 md:gap-12 md:flex-row">
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">SAIBA MAIS</button>
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">TESTE DRIVE</button>
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">MONTE O SEU</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={isMobile ? '/kv-MOB.jpg' : '/kv-boat-PC.jpg'}
              alt="Boat"
              className="slide-image brightness-75"
            />
            <div className="overlay absolute top-0 left-0 flex flex-col gap-11 items-center place-content-around w-full h-full transition">
              <h2 className='text-5xl text-white font-bold m-5 text-center'>BYD KING</h2>
              <div className="flex justify-center flex-col gap-5 md:gap-12 md:flex-row">
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">SAIBA MAIS</button>
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">TESTE DRIVE</button>
                <button className="learn-more-btn px-6 py-3 border cursor-pointer font-semibold text-white hover:bg-white hover:text-black">MONTE O SEU</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
