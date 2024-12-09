import '../index.css'

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

const AdvantageBox: React.FC<Advantage> = ({ icon, description }) => (
  <div className="bg-white shadow-md rounded-xl text-center flex flex-col items-center p-5 gap-5 font-semibold">
    <img src={icon} alt={description} className="w-14" />
    {description}
  </div>
);

const Modelos: React.FC = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <h1 className="text-5xl font-bold p-20">MODELOS</h1>
      <div className="modelos"></div>
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