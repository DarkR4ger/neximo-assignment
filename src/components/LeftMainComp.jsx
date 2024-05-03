import sideBarIcon1 from '../assets/icons/sidebarIcons/sidebar-icon-1.svg';
import sideBarIcon2 from '../assets/icons/sidebarIcons/sidebar-icon-2.svg';
import sideBarIcon3 from '../assets/icons/sidebarIcons/sidebar-icon-3.svg';
import sideBarIcon4 from '../assets/icons/sidebarIcons/sidebar-icon-4.svg';
import sideBarIcon5 from '../assets/icons/sidebarIcons/sidebar-icon-5.svg';
import sideBarIcon6 from '../assets/icons/sidebarIcons/sidebar-icon-6.svg';
import sideBarIcon7 from '../assets/icons/sidebarIcons/sidebar-icon-7.svg';
import sideBarIcon8 from '../assets/icons/sidebarIcons/sidebar-icon-8.svg';
import sideBarIcon9 from '../assets/icons/sidebarIcons/sidebar-icon-9.svg';

const LeftMainComp = () => {
  return (
    <section className="flex rounded-tr-[80px] shadow-box pt-5 flex-col  w-[125px] items-center h-[2666px]">
      <ul className="flex flex-col justify-center gap-10 pt-7 ">
        <li>
          <img src={sideBarIcon1} alt="sideBarIcon1" className="cursor-pointer" />
        </li>
        <li>
          <img src={sideBarIcon2} alt="sideBarIcon2" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon3} alt="sideBarIcon3" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon4} alt="sideBarIcon4" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon5} alt="sideBarIcon5" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon6} alt="sideBarIcon6" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon7} alt="sideBarIcon7" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon8} alt="sideBarIcon8" className="cursor-pointer"/>
        </li>
        <li>
          <img src={sideBarIcon9} alt="sideBarIcon9" className="cursor-pointer"/>
        </li>
      </ul>
    </section>
  )
}

export default LeftMainComp;
