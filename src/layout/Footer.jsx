import Logo from "../assets/icon/dark-logo.svg";
import InstagramLogo from "../assets/icon/instagram.svg";
import FacebookLogo from "../assets/icon/facebook.svg";
import XLogo from "../assets/icon/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-black py-4">
      <div className="rule md:flex items-center md:gap-48">
        <div className="flex flex-col items-center text-white md:w-[30%] md:items-start">
          <img src={Logo} className='md:w-40' alt="" />
          <h2 className="font-[rokkitt] text-xl font-bold md:text-3xl">Diamonddreams Events</h2>
          <p className="text-center font-[open_sans] text-sm mb-2 md:text-left md:text-lg">
            From stunning gowns to captivating accessories, our selection offers both purchasing and rental options, ensuring every bride finds her perfect match.
          </p>
        </div>
        <div className="font-[rokkitt] text-center text-white md:text-left md:border-l-2 md:border-l-gray-700 md:pl-4">
          <ul>
            <li className="font-bold my-3 text-2xl">Quick Links</li>
            <li className="mb-2"><a className="text-lg" href="">Home</a></li>
            <li className="mb-2"><a className="text-lg" href="">About me</a></li>
            <li className="mb-2"><a className="text-lg" href="">Courses</a></li>
            <li className="mb-2"><a className="text-lg" href="">Contact</a></li>
            <li className="mb-2"><a className="text-lg" href="">Student Portal</a></li>
          </ul>
          <ul className="flex items-center my-4 gap-3 text-center justify-center">
            <li className="">
              <a href='https://web.facebook.com/diamondreamsevents' target="_blank">
                <img className="w-8" src={FacebookLogo} alt="Facebook" />
              </a>
            </li>
            <li className="">
              <a href='https://www.instagram.com/diamondreamsevents?igsh=NHI2OHRzcXNqM2Y5' target="_blank">
                <img className="w-8" src={InstagramLogo} alt="Instagram" />
              </a>
            </li>
            <li className="">
              <a href='https://x.com/DiamondDreamsE1?t=J01EkTJFl9BbfPxshGhjRA&s=09' target="_blank">
                <img className="w-8" src={XLogo} alt="X" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white rule text-center mt-4 text-sm font-[rokkitt] md:text-lg">Copyright 2025 by DiamondreamsEvent. All Rights Resrved</p>
    </div>
  );
}
 
export default Footer;