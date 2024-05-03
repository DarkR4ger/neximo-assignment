import searchIcon from "../../assets/icons/navbarIcons/search-icon.png";
import filterIcon from "../../assets/icons/filterIcon.svg";
import pythonLogo from "../../assets/icons/pythonLogo.svg";
import angularLogo from "../../assets/icons/angularLogo.png";
import javaLogo from "../../assets/icons/javaLogo.svg";
import uIuXLogo from "../../assets/icons/ui-ux-logo.svg";
import moreIcon from "../../assets/icons/moreIcon.svg";
import upArrowIcon from "../../assets/icons/upArrow.svg";

const JobPostedComp = () => {
  return (
    <div
      className="px-5 rounded-xl mt-10 shadow-box py-10 w-[1359px] mb-14"
    >
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-12">
          <h2 className="font-semibold text-[28px]">Posted Jobs</h2>
          <a href="#" className="underline text-darkBlue font-medium text-xl">
            View All
          </a>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex shadow-box rounded-xl ">
            <input
              type="search"
              className="px-5 py-3 text-xl rounded-l-xl w-[300px] rounded-xl focus:outline-none "
              placeholder="Search"
            />
            <img
              src={searchIcon}
              alt="Search Icon"
              className="relative right-5 self-center cursor-pointer"
            />
          </div>
          <div className="flex gap-5 cursor-pointer shadow-box p-4 rounded-xl">
            <img src={filterIcon} alt="Filter Icon" className="" />
            <p className="text-xl">Filters</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex text-xl gap-40">
        <p>Active Jobs</p>
        <p>Pending Jobs</p>
      </div>
      <hr className="border-[1px] border-lightGrey mb-7 " />
      <div className="flex items-center gap-10">
        <JobBox
          logo={pythonLogo}
          boxBgColor="bg-veryLightBlue"
          boxTxColor="text-darkBlue"
        />
        <JobBox
          logo={angularLogo}
          boxBgColor="bg-fadingBlue"
          boxTxColor="text-zinc-50"
        />
        <JobBox
          logo={javaLogo}
          boxBgColor="bg-mediumBlue"
          boxTxColor="text-zinc-50"
        />
        <JobBox
          logo={uIuXLogo}
          boxBgColor="bg-darkBlue"
          boxTxColor="text-zinc-50"
        />
      </div>
    </div>
  );
};

const JobBox = ({ logo, boxBgColor, boxTxColor }) => {
  return (
    <div className="flex flex-col shadow-box rounded-xl justify-center w-[296px]">
      <div className="flex p-3 px-3 items-center justify-between">
        <div className="flex gap-2">
          <img src={logo} alt="Logo" />
          <p>Python Developers</p>
        </div>
        <img className="cursor-pointer" src={moreIcon} alt="More Icon" />
      </div>

      <hr className="mb-7" />

      <div className="text-[14px] text-lightGrey text-center flex flex-col gap-7 items-center justify-center mb-10">
        <p>Senior Developers</p>
        <div
          className={`w-[100px] h-[80px] ${boxBgColor} ${boxTxColor} flex items-center justify-center`}
        >
          <p className="font-semibold text-[28px]">258</p>
        </div>
        <p>Total Applications</p>
      </div>

      <hr />
      <div className="flex p-3 px-3 mb-2 items-center justify-between text-lightGrey">
        <div className="flex gap-2 items-center">
          <img src={upArrowIcon} alt="Up Arrrow" />
          <p className="text-[12px]">
            <span className="text-darkBlue">28%</span> vs last month
          </p>
        </div>
        <p className="text-[12px]">6 min ago</p>
      </div>
    </div>
  );
};

export default JobPostedComp;
