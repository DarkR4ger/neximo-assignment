import userOne from '../../assets/icons/rigthCompIcons/user1.png'
import userTwo from '../../assets/icons/rigthCompIcons/user2.png'
import userThree from '../../assets/icons/rigthCompIcons/user3.svg'

export default function Activity() {
  return (
    <div className="flex flex-col justify-center w-[318px] gap-10 mb-20">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[22px]">Activity</h3>
        <a href="#" className="underline text-darkBlue">
          View All
        </a>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <Activities userAvatar={userOne} />
        <Activities userAvatar={userTwo} />
        <Activities userAvatar={userThree} />
      </div>
    </div>
  );
}

const Activities = ({userAvatar}) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={userAvatar} alt="Users Avatars" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="font-medium">John Doe <span className="text-[10px] text-darkBlue">[Python Developer]</span></p>
        <p className="text-[11px]">Interview with Stella</p>
        <p className="text-[9px]">15 mins ago</p>
      </div>
    </div>
  )
}
