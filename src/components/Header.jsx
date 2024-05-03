import companyLogo from "../assets/icons/navbarIcons/logo-1 1.svg";
import searchIcon from '../assets/icons/navbarIcons/search-icon.png';
import dayModeIcon from '../assets/icons/navbarIcons/day-mode 1.svg';
import chatIcon from '../assets/icons/navbarIcons/chat 2.png';
import notificationIcon from '../assets/icons/navbarIcons/notification 1.svg';
import settingsIcon from '../assets/icons/navbarIcons/settings-gear-icon 1.png';
import userLogo from '../assets/icons/navbarIcons/user-1 5.png'

const Header = () => {
  return (
    <main className="p-5 shadow-box flex justify-between items-center">
      <section className="flex gap-20">
        <img src={companyLogo} alt="company Logo" className="self-center" />
        <div className="flex shadow-box rounded-xl ">
          <input type="search" className="px-5 text-xl rounded-l-xl w-[450px] rounded-xl focus:outline-none " placeholder="Search" />
          <img src={searchIcon} alt="Search Icon" className="relative right-5 self-center cursor-pointer" />
        </div>
      </section>
      <section>
        <ul className="flex items-center gap-12">
          <li>
            <img src={dayModeIcon} alt="Sun Icon" className="cursor-pointer" />
          </li>
          <li>
            <img src={chatIcon} alt="chat Icon" className="cursor-pointer"/>
          </li>
          <li>
            <img src={notificationIcon} alt="notification Icon" className="cursor-pointer"/>
          </li>
          <li>
            <img src={settingsIcon} alt="gear Icon" className="cursor-pointer"/>
          </li>
          <li>
            <img src={userLogo} alt="LoggedIn User Logo" className="cursor-pointer"/>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Header;
