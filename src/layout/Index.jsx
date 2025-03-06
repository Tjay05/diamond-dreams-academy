import { NavLink, Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
 
export default AppLayout;