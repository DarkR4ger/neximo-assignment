import dropDownIcon from "../../assets/icons/dropDownIcon.svg";
import zigzagIcon from "../../assets/icons/zigzag.svg";
import assesmentIcon from "../../assets/icons/assessmentIcon.svg";
import girlImage from "../../assets/icons/girl.png";

const ApplicationInfo = () => {
  const barHeights = [
    "114px",
    "146px",
    "169px",
    "140px",
    "190px",
    "86px",
    "169px",
    "129px",
    "223px",
    "36px",
    "154px",
    "200px",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="flex px-5 pl-10 gap-8 mt-20">
      <div className="w-[968px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl  p-5 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            <h2 className="font-medium text-[22px]">Application&#39;s Info</h2>
            <div className="flex items-center gap-4 text-[14px]">
              <div className="w-5 h-5 bg-[#277ACC] rounded-[3px]"></div>
              <p>Recieved</p>
              <div className="w-5 h-5 bg-[#002B55] rounded-[3px]"></div>
              <p>Processed</p>
            </div>
          </div>
          <button className="flex gap-2 border-2 p-2 rounded-[3px] border-[#0A66C2]">
            Month
            <img src={dropDownIcon} alt="Drop down svg" />
          </button>
        </div>
        <hr className="mt-2 mb-8" />
        <div className="flex gap-1">
          <div className="flex flex-col gap-7 pt-8 text-right text-[14px]">
            <p>4000</p>
            <p>3000</p>
            <p>2000</p>
            <p>1000</p>
            <p>0</p>
          </div>
          <div className="w-[842px] flex gap-10 h-[243px] border-l-2 border-b-2 border-[#3e3e3e] px-5">
              <img
                src={zigzagIcon}
                alt="Zig Zag "
                className="absolute top-[490px] left-[236px]"
              />
            {barHeights.map((height, index) => {
              const bgColor =
                "linear-gradient(to bottom, #0A66C2 , #3E8EDC 55%)";
              return (
                <Bar
                  key={index}
                  height={height}
                  bgColor={index === 0 ? bgColor : "#277ACC"}
                />
              );
            })}
          </div>
        </div>
        <div className="flex pl-[70px] gap-9 text-[14px]">
          {months.map((month, index) => {
            return (
              <p className="w-[34px]" key={index}>
                {month}
              </p>
            );
          })}
        </div>
      </div>

      <div className="h-[392px] shadow-box w-[711px] flex-1 flex items-center justify-between p-14 bg-gradient-to-r from-[#0A66C2] to-[#5994CE] rounded-[10px]">
        <div>
          <div className="w-[125px] flex items-center justify-center h-[125px] bg-zinc-50">
            <img src={assesmentIcon} alt="assesmentIcon" />
          </div>
          <p className="font-semibold text-[56px] text-zinc-50 mt-10">0333</p>
          <p className="mt-5 font-medium text-[22px] text-zinc-50">
            New Assessment&#39;s
          </p>
        </div>
        <div className="relative">
          <img
            className="relative top-10 left-10"
            src={girlImage}
            alt="Office Girl"
          />
          <img
            className="relative w-[132px] h-[165px] bottom-52 right-10"
            src={girlImage}
            alt="Office Girl"
          />
          <button className="relative bottom-28 left-28 bg-zinc-50 p-3 px-5 rounded-[3px]">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

const Bar = ({ height, bgColor }) => {
  return (
    <div
      className="w-[34px] self-end rounded-t-lg "
      style={{
        height: height,
        backgroundColor: bgColor,
        backgroundImage: bgColor,
      }}
    ></div>
  );
};

export default ApplicationInfo;
