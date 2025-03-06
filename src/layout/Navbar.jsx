import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/icon/light-logo.svg";
import Hamburger from "../assets/icon/nav-icon.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavToggle = () => setToggleNav(!toggleNav);

  return (
    <div>
      <nav className="bg-[#5c0002] relative">
        <div className="flex justify-between items-center rule py-2">
          <div className="flex items-center gap-1">
            <img src={Logo} className='w-10 md:w-12' alt="Logo" />
            <p className="text-white md:text-lg lg:text-xl font-[Rokkitt]">Diamonddreams Event</p>
          </div>
          {isMobile && (<img 
            className="max-w-full" 
            src={Hamburger} alt=""
            onClick={handleNavToggle} 
          />)}
          {/* Desktop Nav */}
          <ul className="hidden text-white items-center justify-between font-[Open_Sans] w-1/2 py-2 md:flex md:text-sm lg:text-lg xl:text-xl">
            <li className="nav_link">
              <NavLink className="links" to="/">Home</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="About-me">About me</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="Courses">Courses</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="Contact">Contact</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="Portal">Student Portal</NavLink>
            </li>
          </ul>
        </div>
        {/* Mobile DropDown Nav */}
        {isMobile && (
          <ul className={`${toggleNav ? 'opacity-100 translate-y-.5' : 'opacity-0 translate-y-full'} transition-all duration-300 shadow-md ease-in-out absolute top-13 w-full bg-inherit py-2 border-black border-t flex flex-col justify-center text-white items-center font-[Open_Sans] ${toggleNav ? 'z-99' : ''}`} >
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="/">Home</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="About-me">About me</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="Courses">Courses</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="Contact">Contact</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="Portal">Student Portal</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
 
export default Navbar;