import React from "react";

const Header = () => {
  return (
    <div className="w-[1440px] h-[94px] px-5 bg-sky-950 justify-center items-center gap-[248px] inline-flex">
      <div className="h-[94px] justify-start items-end gap-4 flex">
        <div className="pr-[21px] py-[21px] justify-start items-start flex">
          <div className="w-[239px] h-[52px] relative">
            <div className="w-[238.26px] h-[52px] left-[1px] top-0 absolute">
              <div className="w-[52px] h-[52px] left-0 top-0 absolute"></div>
              <div className="w-[173.26px] h-[42.52px] left-[65px] top-[-0px] absolute"></div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-16 justify-end items-center flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[146px] px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-90 justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="justify-start items-center flex">
                    <div className="text-gray-50 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-tight">departamento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[94px] px-[9px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-90 justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="justify-start items-center flex">
                    <div className="text-gray-50 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-tight">secciones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[124px] px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-90 justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="justify-start items-center flex">
                    <div className="text-gray-50 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-tight">profesores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[142px] px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-90 justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="justify-start items-center flex">
                    <div className="text-center text-gray-50 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-tight">investigación </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-36 px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-90 justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="justify-start items-center flex">
                    <div className="text-gray-50 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-tight">publicaciones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-[65px] px-[9px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-90 justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="justify-start items-center flex">
                    <div className="text-gray-50 text-sm font-medium font-['Roboto'] uppercase leading-[17.50px] tracking-tight">más</div>
                    <div className="w-4 h-4 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-8 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[42px] px-[13.50px] py-[9px] border-gray-50 flex-col justify-start items-center gap-1 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative">
                  <img className="w-[17.49px] h-[17.49px] left-[3.26px] top-[3.26px] absolute" src="https://via.placeholder.com/17x17" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
