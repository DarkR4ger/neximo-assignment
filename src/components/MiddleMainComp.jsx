import Activity from "./middleComp/Activity";
import ApplicationInfo from "./middleComp/ApplicationInfo";
import CalenderComp from "./middleComp/CalenderComp";
import CandiateStatusComp from "./middleComp/CandiateStatusComp";
import HiringCand from "./middleComp/HiringCand";
import JobPostedComp from "./middleComp/JobPostedComp";
import Meetings from "./middleComp/Meetings";
import Upcomings from "./middleComp/Upcomings";

const MiddleMainComp = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex px-10 items-center justify-between ">
        <div className="flex  flex-col gap-5">
          <h1 className="font-medium text-4xl">HR Employee</h1>
          <p className="text-xl">
            Enjoy your selecting potential candidates Tracking and Management
            System
          </p>
        </div>
        <button className="font-medium p-5 px-10 bg-[#0A66C2] text-zinc-50">
          Task details
        </button>
      </div>
      <section>
        <ApplicationInfo />
      </section>
      <section className="flex gap-2">
        <div className="pl-10 flex flex-col items-center">
          <Meetings />
          <JobPostedComp />
          <CandiateStatusComp />
        </div>
        <div className="flex w-full flex-col items-center">
          <CalenderComp />
          <Upcomings />
          <Activity />
          <HiringCand />
          
        </div>
      </section>
    </div>
  );
};

export default MiddleMainComp;
