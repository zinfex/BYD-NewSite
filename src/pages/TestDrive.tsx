import Header from "../components/Header";
import "../index.css";

function TestDrive() {
  return (
    <>
      <Header />
      <div className="relative">
        <img src="./New_Test_Drive_Img_Desk.png" alt="" className="w-full h-auto" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#323436] text-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold mb-4 text-center">Selecione o modelo</h1>
            
            <select className="w-full p-3 bg-transparent">
              <option className="bg-[#60707D]" value="" disabled selected>
                Escolha um modelo
              </option>
              <option className="bg-[#60707D]" value="modelo1">Modelo 1</option>
              <option className="bg-[#60707D]" value="modelo2">Modelo 2</option>
              <option className="bg-[#60707D]" value="modelo3">Modelo 3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestDrive;
