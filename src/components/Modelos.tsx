import '../index.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import '../../node_modules/swiper/swiper.css'
import '../../node_modules/swiper/modules/navigation.css'
import { useEffect, useState } from 'react';

type Advantage = {
  icon: string;
  description: string;
}

const advantages: Advantage[] = [
  { icon: './icons/docs.svg', description: 'Documentação' },
  { icon: './icons/checklist.svg', description: 'Manutenção preventiva' },
  { icon: './icons/seguro.svg', description: 'Seguro para terceiros' },
  { icon: './icons/mao.svg', description: 'Auto Sage' },
  { icon: './icons/suporte-24-horas.svg', description: 'Assistência 24 horas' },
  { icon: './icons/documento.svg', description: 'Gestão de Multas' },
  { icon: './icons/shield.svg', description: 'Manutenção blindados' },
  { icon: './icons/protecao.svg', description: 'Blindagem' },
  { icon: './icons/pin.svg', description: 'Rastreador' },
  { icon: './icons/responsivo.svg', description: 'Plataforma digital' },
  { icon: './icons/pneu.svg', description: 'Gestão de pneus' },
  { icon: './icons/transporte.svg', description: 'Leva e Traz' },
]

type Model = {
  title: string;
  price: string;
  image: string;
}

const models: Model[] = [
  { title: 'BYD SHARK', price: 'R$ 9.320', image: './modelos/shark_byd_leasing.png' },
  { title: 'BYD SEAL', price: 'R$ 6.020', image: './modelos/seal-pc.png' },
  { title: 'BYD KING', price: 'R$ 3.773', image: './modelos/king-fnal-mob.png' },
  { title: 'BYD HAN', price: 'R$ 12.344', image: './modelos/han-pc.png' },
  { title: 'BYD DOLPHIN PLUS', price: 'R$ 3.788', image: './modelos/dolphin-plus-pc.png' },
  { title: 'BYD DOLPHIN', price: 'R$ 3.550', image: './modelos/dolphin-pc.png' },
  { title: 'BYD DOLPHIN MINI', price: 'R$ 2.648', image: './modelos/dolphin-mini-pc.png' },
  { title: 'BYD YUAN PRO', price: 'R$ 4.021', image: './modelos/yuan-pro-pc-2.png' },
  { title: 'BYD YUAN PLUS', price: 'R$ 4.730', image: './modelos/yuan-plus-pc.png' },
  { title: 'BYD YUAN PRO', price: 'R$ 4.021', image: './modelos/yuan-pro-pc-2.png' },
  { title: 'BYD TAN', price: 'R$ 11.380', image: './modelos/tan-pc-2.png' },
  { title: 'BYD SONG PRO', price: 'R$ 4.040', image: './modelos/song-pro-pc.png' },
  { title: 'BYD SONG PLUS', price: 'R$ 5.000', image: './modelos/song-plus-pc.png' },
]

const AdvantageBox: React.FC<Advantage> = ({ icon, description }) => (
  <div className="bg-white shadow-md rounded-xl text-center flex flex-col items-center p-5 gap-5 font-semibold">
    <img src={icon} alt={description} className="w-14" />
    {description}
  </div>
);

const ModelBox: React.FC<Model> = ({ title, price, image }) => (
  <div className="model-car bg-white p-5 m-5 w-full hover:scale-105 transition">
    <h2 className="text-3xl font-semibold text-start mt-5">{title}</h2>
    <p className="text-start text-gray-600">VALORES A PARTIR DE {price}</p>
    <img src={image} alt={title} className="w-[600px]" />
    <button className="learn-more-btn px-6 py-3 border-2 cursor-pointer font-semibold text-black hover:bg-black hover:text-white">ASSINAR AGORA</button>
  </div>
)

const Modelos: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#F7F7F7]">
      <h1 className="text-5xl font-bold p-20">MODELOS</h1>
      <div className="modelos">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={slidesPerView} 
          spaceBetween={30}
        >
          {models.map((model, index) => (
            <SwiperSlide>
              <ModelBox key={index} {...model} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-12">
        <h1 className="text-4xl text-center mt-10">Vantagens do carro por assinatura*</h1>
        <div className="grid grid-rows-12 p-0 mt-12 grid-flow-col gap-8 md:grid-rows-3 md:p-20">
          {advantages.map((advantage, index) => (
            <AdvantageBox key={index} {...advantage} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modelos;