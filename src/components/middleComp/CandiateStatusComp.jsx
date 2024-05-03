import searchIcon from "../../assets/icons/navbarIcons/search-icon.png";
import filterIcon from "../../assets/icons/filterIcon.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import moreIcon from "../../assets/icons/more.svg";
import xmarkIcon from "../../assets/icons/xmark.svg";

const CandiateStatusComp = () => {
  const candiateStatus = [
    {
      id: "#001",
      name: "John Doe",
      position: "Designer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: "",
      totalMarks: "",
      status: "Active",
    },
    {
      id: "#002",
      name: "John Smith",
      position: "Angular Developer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: "",
      totalMarks: "24/20",
      status: "Hired",
    },
    {
      id: "#003",
      name: "Johnson Smith",
      position: "Python Developer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: "",
      totalMarks: "",
      status: "Active",
    },
    {
      id: "#004",
      name: "Stella",
      position: "Android Developer",
      level1: "6/10",
      level2: "2/10",
      level3: "",
      level4: "x",
      totalMarks: "8/40",
      status: "Reject",
    },
    {
      id: "#005",
      name: "Randy",
      position: "IOS Developer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: "",
      totalMarks: "",
      status: "Active",
    },
    {
      id: "#006",
      name: "John Doe",
      position: "Junior Designer",
      level1: "6/10",
      level2: "7/10",
      level3: "3/10",
      level4: "",
      totalMarks: "",
      status: "Active",
    },
  ];

  return (
    <div className="px-5 py-10 w-[1359px] mb-14 flex flex-col ">
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-12">
          <h2 className="font-medium text-[28px]">Candidate Status</h2>
          <a href="#" className="underline text-darkBlue font-medium text-xl">
            View All
          </a>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex shadow-xl rounded-xl ">
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
          <div className="flex gap-5 cursor-pointer">
            <img src={filterIcon} alt="Filter Icon" className="" />
            <p className="text-xl">Filters</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 flex justify-center items-center ">
        <table className="table-auto w-full border-b-2 border-lightGrey">
          <thead className="">
            <tr className="font-medium text-left text-sm border-b-2 border-lightGrey">
              <th className="">Job Id</th>
              <th>Name</th>
              <th>Position</th>
              <th>1st level</th>
              <th>2nd level</th>
              <th>3rd level</th>
              <th>4th level</th>
              <th>Total Marks</th>
              <th className="pl-4 py-7">Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-left font-normal">
            {candiateStatus.map((candidate, index) => {
              return (
                <tr key={index} className="border-b-2 text-[14px]">
                  <td>{candidate.id}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.position}</td>
                  <td>
                    <p className="pl-4">{candidate.level1}</p>
                  </td>
                  <td>
                    <p className="pl-4">{candidate.level2}</p>
                  </td>
                  <td>
                    {candidate.level3.length === 0 ? (
                      <img src={xmarkIcon} alt="xmarkIcon" className="pl-7" />
                    ) : (
                      <p className="pl-4">{candidate.level3}</p>
                    )}
                  </td>
                  <td>
                    {candidate.level4.length === 0 ? (
                      <img src={moreIcon} alt="moreIcon" className="pl-5" />
                    ) : candidate.level4 === "x" ? (
                      <img src={xmarkIcon} alt="xmarkIcon" className="pl-7" />
                    ) : (
                      <p className="pl-4">{candidate.level4}</p>
                    )}
                  </td>
                  <td>
                    {candidate.totalMarks.length === 0 ? (
                      <img src={moreIcon} alt="moreIcon" className="pl-5" />
                    ) : (
                      <p className="pl-5">{candidate.totalMarks}</p>
                    )}
                  </td>
                  <td>
                    <div className="p-5">
                      <p
                        className={` inline-block px-2 py-2 rounded-lg ${candidate.status === "Reject" ? "text-red-500" : candidate.status === "Hired" ? "text-green-500 bg-[#0EAD0B15] " : "text-yellow-400"} }`}
                      >
                        {candidate.status}
                      </p>
                    </div>
                  </td>
                  <td>
                    <img src={eyeIcon} alt="eyeIcon" className="pl-4" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandiateStatusComp;
