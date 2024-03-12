import React from "react";

const Hero = () => {
  return (
  <div className="w-[1440px] h-[506px] py-[120px] bg-slate-900 bg-opacity-50 flex-col justify-center items-center gap-12 inline-flex">
    <div className="h-[266px] flex-col justify-center items-center gap-[27px] flex">
      <div className="h-[266px] flex-col justify-center items-center flex">
        <div className="self-stretch h-[127px] pb-[27px] flex-col justify-start items-start flex">
          <div className="self-stretch text-center text-white text-[40px] font-bold font-['Montserrat'] leading-[50px]">Departamento Académico <br/>de Arte y Diseño</div>
        </div>
        <div className="self-stretch h-20 pb-5 flex-col justify-start items-start flex">
          <div className="w-[900px] text-center text-white text-xl font-medium font-['Roboto'] leading-[30px]">Agrupamos a los profesores que, a través de la investigación y la formación de profesionales del arte y diseño, buscan contribuir con el desarrollo cultural, social y responsable del país.</div>
        </div>
        <div className="pt-2 justify-start items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-center inline-flex">
            <div className="px-[18px] py-[13.50px] bg-indigo-500 justify-start items-center gap-[9px] inline-flex">
              <div className="justify-start items-start gap-[9px] flex">
                <div className="text-center text-white text-base font-medium font-['Roboto'] uppercase leading-normal">conoce el departamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
