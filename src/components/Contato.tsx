export default function Contato() {
    return (
      <div className="flex m-32 justify-center items-stretch">
        <div className="p-12 bg-[#F7F7F7] flex flex-col gap-8 flex-1">
          <h1 className="text-5xl font-semibold">Contate a BYD</h1>
          <input type="text" placeholder="Nome*" className="p-2 text-lg" />
          <input type="text" placeholder="Sobrenome*" className="p-2 text-lg" />
          <input type="email" placeholder="Email*" className="p-2 text-lg" />
          <input type="number" placeholder="Telefone" className="p-2 text-lg" />
          <input type="text" placeholder="Como podemos ajudar" className="p-2 text-lg" />
          <label className="flex items-center gap-2 text-[#888888]">
            <input type="checkbox" />
            <span>
              Concordo com a forma como a BYD processa meus dados pessoais. Você encontrará informações adicionais
              sobre como a BYD processa seus dados pessoais no Política da Privacidade.
            </span>
          </label>
          <button className="flex justify-center text-center px-28 py-3 border cursor-pointer text-lg text-white bg-black border-2 hover:bg-white hover:text-black w-5">
            ENVIAR
          </button>
        </div>
  
        <div className="flex items-center flex-[0.7]">
          <img src="./Contact-us.jpg" alt="Contact Us" className="contact-us object-cover h-full w-full md:h-[735px]" />
        </div>
      </div>
    );
  }
  