import React from "react";
import Image from "next/image";

const Noticias = () => {
  return (
    <div className="w-[1440px] h-[785px] py-[72px] bg-white flex-col justify-center items-center gap-[54px] inline-flex">
      <div className="h-[641px] flex-col justify-start items-center gap-[54px] flex">
        <div className="origin-top-left -rotate-180 w-[153px] h-[229.72px] left-[76px] top-[243.72px] absolute">
          <div className="w-[153px] h-[153px] left-[-153px] top-[-76.72px] absolute origin-top-left -rotate-90 rounded-full border-2 border-blue-100" />
          <div className="w-[76.28px] h-[152.56px] left-0 top-[-76.28px] absolute origin-top-left rotate-90 rounded-tr-[1077.32px] rounded-br-[1077.32px] border-2 border-blue-100" />
        </div>
        <div className="h-[50px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[50px] flex-col justify-start items-start flex">
            <div className="self-stretch text-center text-sky-950 text-[40px] font-bold font-['Montserrat'] leading-[50px]">Noticias</div>
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-[27px] inline-flex">
          <div className="grow shrink basis-0 self-stretch shadow flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
              <div className="w-[362px] h-[236px] relative">
                <Image className="w-[362px] h-[236px] left-0 top-0 absolute" src="https://via.placeholder.com/362x236" />
              </div>
              <div className="self-stretch grow shrink basis-0 p-[18px] bg-white flex-col justify-start items-start flex">
                <div className="self-stretch h-[27px] pb-[9px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-slate-500 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-wider">12/04/21</div>
                </div>
                <div className="self-stretch grow shrink basis-0 pb-[9px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-sky-950 text-xl font-bold font-['Roboto'] leading-[25px]">
                    Ganadoras del Concurso Anual de Proyectos de Creación (CAP) 2023 de nuestro Departamento
                  </div>
                </div>
                <div className="justify-start items-start inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-blue-700 text-base font-bold font-['Roboto'] leading-normal">Leer más</div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 shadow flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[432px] flex-col justify-start items-start flex">
              <div className="w-[362px] h-[236px] relative">
                <img className="w-[362px] h-[236px] left-0 top-0 absolute" src="https://via.placeholder.com/362x236" />
              </div>
              <div className="self-stretch h-[196px] p-[18px] bg-white flex-col justify-start items-start flex">
                <div className="self-stretch h-[27px] pb-[9px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-slate-500 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-wider">11/04/22</div>
                </div>
                <div className="self-stretch h-[109px] pb-[9px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-sky-950 text-xl font-bold font-['Roboto'] leading-[25px]">
                    Participación de docentes del Departamento en el “Encuentro anual de investigación, innovación y creación 2023”
                  </div>
                </div>
                <div className="justify-start items-start inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-blue-700 text-base font-bold font-['Roboto'] leading-normal">Leer más</div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch shadow flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
              <div className="w-[362px] h-[236px] relative">
                <img className="w-[362px] h-[236px] left-0 top-0 absolute" src="https://via.placeholder.com/362x236" />
              </div>
              <div className="self-stretch grow shrink basis-0 p-[18px] bg-white flex-col justify-start items-start flex">
                <div className="self-stretch h-[27px] pb-[9px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-slate-500 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-wider">10/04/22</div>
                </div>
                <div className="self-stretch grow shrink basis-0 pb-[9px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-sky-950 text-xl font-bold font-['Roboto'] leading-[25px]">
                    Convocatoria | Plazas de docentes a Tiempo Completo en Arte y Diseño
                  </div>
                </div>
                <div className="justify-start items-start inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-blue-700 text-base font-bold font-['Roboto'] leading-normal">Leer más</div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-9 inline-flex">
          <div className="flex-col justify-start items-center inline-flex">
            <div className="px-[18px] py-[13.50px] bg-white bg-opacity-0 border-2 border-blue-700 justify-start items-center gap-[9px] inline-flex">
              <div className="justify-start items-start gap-[9px] flex">
                <div className="text-blue-700 text-base font-medium font-['Roboto'] uppercase leading-normal">ver más noticias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
