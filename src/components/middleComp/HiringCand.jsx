import avatarOne from '../../assets/icons/rigthCompIcons/avatar1.png'
import avatarTwo from '../../assets/icons/rigthCompIcons/avatar2.png'
import avatarThree from '../../assets/icons/rigthCompIcons/avatar3.png'
import avatarFour from '../../assets/icons/rigthCompIcons/avatar4.png'
import avatarFive from '../../assets/icons/rigthCompIcons/avatar5.png'
 
export default function HiringCand() {
  return (
    <div className="flex flex-col justify-center w-[318px] gap-10">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[22px]">Hiring Candidates</h3>
        <a href="#" className="underline text-darkBlue">
          View All
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <HiringCandidats avatar={avatarOne} />
        <HiringCandidats avatar={avatarTwo} />
        <HiringCandidats avatar={avatarThree} />
        <HiringCandidats avatar={avatarFour} />
        <HiringCandidats avatar={avatarFive} />
      </div>
    </div>
  );
}

const HiringCandidats = ({ avatar }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="">
        <img className="rounded-full" src={avatar} alt="user avatar" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="font-medium text-[12px]">John Doe</p>
        <p className="text-[11px]">Senior Python Developer</p>
        <p className="text-[9px]">Hired by: Stella</p>
      </div>
      <button className="text-darkBlue p-3 rounded-[5px] text-[12px] border-2  border-darkBlue">
        Details
      </button>
    </div>
  );
};
