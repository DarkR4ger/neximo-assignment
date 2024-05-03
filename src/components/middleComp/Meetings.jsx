import moreIcon from "../../assets/icons/moreIcon.svg";
import interviewerOne from "../../assets/icons/interviewer1.png";
import interviewerTwo from "../../assets/icons/interviewer2.png";
import calendorIcon from "../../assets/icons/calendorIcon.svg";
import clockIcon from "../../assets/icons/clockIcon.svg";

export default function Meetings() {
  return (
    <div className=" rounded-xl overflow-hidden mt-10 shadow-box px-5 py-10 w-[1359px] mb-10">
      <div className="flex px-5 items-center justify-between">
        <h3 className="font-medium text-[22px]">
          Today Interviews Meetings Info
        </h3>
        <img src={moreIcon} alt="Icon" className="cursor-pointer" />
      </div>
      <hr className="border-[#D6D6D6] mb-10 mt-2" />
      <div className="flex gap-10 items-center px-5">
        <IntreviewerDetails avatarIcon={interviewerOne} />
        <IntreviewerDetails avatarIcon={interviewerTwo} borderWidth="1px" />
      </div>
      <div className="px-5">
        <div className="mt-10 rounded-full h-[15px] bg-[#D9D9D9] "></div>
        <div className="relative h-[15px] bottom-4 left-32 w-[66px] bg-darkBlue rounded-full"></div>
      </div>
    </div>
  );
}

const IntreviewerDetails = ({avatarIcon, borderWidth=''}) => {
  return (
    <div className=" border-2 flex ">
      <div className="h-full w-[300px] ">
        <div className="flex px-10 border-r-2  py-10 flex-col gap-2 justify-center items-center ">
          <img src={avatarIcon} alt="Avatar" className="rounded-full  border-darkBlue" 
            style={{
              borderWidth: borderWidth,
            }}
          />
          <p>John Smith</p>
          <p className="text-[14px]">Senior Python Developer</p>
        </div>
        <hr />
        <div className="w-full flex items-center">
          <div className="w-[50%] px-3 py-3 flex flex-col gap-2 items-center justify-center">
            <img src={calendorIcon} alt="Calendor Icon" className="" />
            <p className="text-sm text-darkBlue">19th Feb 2024</p>
          </div>
          <div className="w-[50%] flex  border-l-2 border-r-2 py-3 gap-2 flex-col items-center justify-center">
            <img src={clockIcon} alt="Calendor Icon" />
            <p className="text-sm text-darkBlue">10.30 A.M</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-[400px]">
        <div className="w-full h-[206px] grid border-b-2 grid-cols-2 text-sm ">
          <p className="h-full w-full flex items-center border-r-2 border-b-2 justify-center">
            1st Level: 7/10
          </p>
          <p className="h-full w-full flex items-center  border-b-2 justify-center">
            Interviewer: Stella
          </p>
          <p className="h-full w-full flex items-center border-r-2 border-b-2 justify-center">
            2nd Level: 6/10
          </p>
          <p className="h-full w-full flex items-center  border-b-2 justify-center">
            Interviewer: Smith
          </p>
          <p className="h-full w-full flex items-center border-r-2 border-b-2 justify-center">
            3rd Level: Waiting
          </p>
          <p className="h-full w-full flex items-center  border-b-2 justify-center">
            Interviewer:{"   "}
            <span className="text-darkBlue"> Stephan</span>
          </p>
          <p className="h-full w-full flex items-center border-r-2  justify-center">
            Meet via: G-Meet
          </p>
          <p className="h-full w-full flex items-center  justify-center">
            Attendees: Johnson
          </p>
        </div>
        <div className="flex flex-1 font-medium items-center justify-center gap-3">
          <button className="px-3 py-3 rounded-[3px] border-2 border-darkBlue text-darkBlue ">Reschedule Meeting</button>
          <button className="px-3 py-3 rounded-[3px] bg-darkBlue text-zinc-50">Reschedule Meeting</button>
        </div>
      </div>
    </div>
  );
};
