import { useState } from 'react';
import rightArrow from '../../assets/icons/rigthCompIcons/rightArrow.svg'

export default function CalenderComp () {
  const days = ["Mon","Tue", "Wed","Thu","Fri","Sat","Sun"];
  return (
    <div className="flex shadow-box rounded-xl mt-10 w-[318px] p-2 flex-col justify-center mb-20">
      <div className="flex items-center px-4 justify-between">
        <img src={rightArrow} alt="Right arrow" className="rotate-180" />
        <p className="text-[12px]">March 2024</p>
        <img src={rightArrow} alt="Right arrow" className="" />
      </div>
      <hr />
      <div className="">
        <div className="grid mt-4 grid-cols-7 gap-5 px-4 ">
          {days.map((day,index) => {
            return (
              <p key={index} className="text-[10px] text-darkBlue">{day}</p>
            )
          })}
        </div>
        <div className="grid grid-rows-5 grid-cols-7 gap-5 px-4 mt-4">
          {Array.from(Array(30),(e,i) => {
            return (
              <DateBox key={i} num={i+1} />
            )
          })}
          <div className="h-[25px] relative bg-[#0B74AD14] rounded-xl w-[240px] right-[40px] bottom-[135px]"></div>
          <div className="h-[25px] relative bg-[#0B74AD14] rounded-xl w-[195px] right-[125px] bottom-[90px]"></div>
        </div>

      </div>
    </div>

  )
}

const DateBox = ({num}) => {
  const [click , setClick] = useState(false)

  return (
    <div onClick={() => setClick(!click)} className={`w-[25px] flex items-center justify-center cursor-pointer h-[25px] rounded-full ${click || num === 9 || num == 19  ? 'bg-darkBlue text-zinc-50 transition-colors duration-300 ' : ''}`}>
      <p className="text-[10px]">{num}</p>
    </div>
  )
}
