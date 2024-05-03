export default function Upcomings() {
  return (
    <div className="flex flex-col justify-center w-[318px] gap-10">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[22px]">Upcomings</h3>
        <a href="#" className="underline text-darkBlue">
          View All
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <UpcomingInterviews
          position="Designer"
          name="Stella"
          bgColor="#0B74AD15"
          textColor="#0B74AD"
        />

        <UpcomingInterviews
          position="PMO"
          name="Stephan"
          bgColor="#C0C1C1"
          textColor="#091316"
        />

        <UpcomingInterviews
          position="Net.Admin"
          name="Stella"
          bgColor="#C0C1C1"
          textColor="#091316"
        />
      </div>
    </div>
  );
}

const UpcomingInterviews = ({ position, name, bgColor, textColor }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div
        className="w-[54px] h-[54px] flex flex-col gap-1 items-center justify-center rounded-[5px]"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <p className="font-medium text-sm">07</p>
        <p className="text-[12px]">Feb</p>
      </div>
      <div className="text-[12px] flex flex-col gap-2 ">
        <p>Interview with {position}</p>
        <p className="font-light">
          Created by <span className="text-darkBlue font-medium">{name}</span>
        </p>
        <p className="font-light text-[10px]">10 A.M to 11 A.M</p>
      </div>
      <button className="bg-darkBlue text-zinc-50 p-3 rounded-[5px] text-[12px]">
        Details
      </button>
    </div>
  );
};
