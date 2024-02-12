'use client'
import { useContext } from "react";
import { GoldenBorderWrapper } from "..";
import { GlobalContext } from "@/context/globalContext";

const RadioButton = ({ children, value, onClick = () => { }, ...rest }: any) => {

  const { buttonState } = useContext(GlobalContext)
  var isActive = value === buttonState
  return (
    <div
      className={`inline-block  h-fit rounded-lg p-[1px]
      ${isActive ? ' golden-gradient-bg' : 'bg-[#A1A1A1]'}`}
    >
      <div className={`bg-[#111111] shadow-md overflow-hidden rounded-lg`} >
        <button
          {...rest}
          type="button"
          onClick={onClick}
          className={` py-3 px-[34px] text-center flex items-center gap-2 text-[#A1A1A1]
        ${isActive ? 'golden-gradient-text' : ''}
        `}
        >
          <div className={`border-[1px] flex justify-center items-center w-5 h-5 rounded-full 
          ${isActive ? 'border-[#f8d7a7]' : 'border-[#A1A1A1]'}
        `}>
            {isActive && <div className="golden-gradient-bg w-[13px] h-[13px] rounded-full" />}
          </div>
          {children}
        </button>
      </div>
    </div>

  );
};

export default RadioButton;
