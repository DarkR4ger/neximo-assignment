import ApplicationInfo from "./middleComp/ApplicationInfo";

const MiddleMainComp = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-5">
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
    </div>
  );
};

export default MiddleMainComp;
