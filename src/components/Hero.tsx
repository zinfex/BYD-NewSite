import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';

import { Navigation } from 'swiper/modules';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Função para verificar o tamanho da tela
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={1} // Quantos slides aparecem por vez
    >
      <SwiperSlide>
        <div className="slide-content">
          <img
            src={isMobile ? '/seal-blue-mob.jpg' : '/seal-blue-resized-pc.jpg'}
            alt="Seal"
            className="slide-image brightness-75"
          />
          <div className="overlay">
            <h2 className='text-5xl text-white font-bold'>BYD SEAL</h2>
            <div className="buttons ">
              <button className="learn-more-btn">SAIBA MAIS</button>
              <button className="learn-more-btn">TESTE DRIVE</button>
              <button className="learn-more-btn">MONTE O SEU</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img
            src={isMobile ? '/dolphin2_mob.jpg' : '/dolphin_pc.jpg'}
            alt="Dolphin"
            className="slide-image brightness-75"
          />
          <div className="overlay">
            <h2 className='text-5xl text-white font-bold'>BYD DOLPHIN PLUS</h2>
            <div className="buttons ">
              <button className="learn-more-btn">SAIBA MAIS</button>
              <button className="learn-more-btn">TESTE DRIVE</button>
              <button className="learn-more-btn">MONTE O SEU</button>
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
          <div className="overlay">
            <h2 className='text-5xl text-white font-bold'>BYD KING</h2>
            <div className="buttons ">
              <button className="learn-more-btn">SAIBA MAIS</button>
              <button className="learn-more-btn">TESTE DRIVE</button>
              <button className="learn-more-btn">MONTE O SEU</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
