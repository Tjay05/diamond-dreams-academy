import { useState } from "react";
import { useEffect } from "react";
import Logo from "../assets/icon/light-logo.svg";
import Hamburger from "../assets/icon/nav-icon.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavToggle = () => setToggleNav(!toggleNav);

  return (
    <>
      <div>
        <nav className="bg-[#5c0002]">
          <div className="flex border-b-1 justify-between items-center container py-2">
            <div className="flex items-center gap-1">
              <img src={Logo} className='w-10' alt="Logo" />
              <p className="text-white font-[Rokkitt]">Diamonddreams Event</p>
            </div>
            {isMobile && (<img 
              className="max-w-full" 
              src={Hamburger} alt=""
              onClick={handleNavToggle} 
            />)}
          </div>
          {isMobile && (
            <ul className={`container py-2 flex flex-col justify-center text-white items-center font-[Open_Sans] h-h-full ${toggleNav ? '' : 'hidden'}`} >
              <li className="nav_link">
                <a className="links" href="/">Home</a>
              </li>
              <li className="nav_link">
                <a className="links" href="/a">About me</a>
              </li>
              <li className="nav_link">
                <a className="links" href="/b">Courses</a>
              </li>
              <li className="nav_link">
                <a className="links" href="/v">Contact</a>
              </li>
              <li className="nav_link">
                <a className="links" href="/g">Student Portal</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}
 
export default Navbar;