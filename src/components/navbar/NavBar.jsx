import React from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/logo1.png'
import "./NavBar.scss"

const Navbar = () => {
  // const { toggle, darkMode } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
        <img src={MyLogo} alt="MediSphere Logo" style={{ height: '40px' }} />
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <WorkOutlineOutlinedIcon />
        <StorefrontOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          {/* <img
            src={currentUser.profilePic}
            alt=""
          /> */}
          <span>chike chima</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// function NavBar() { 
//   return (
//     <div className='navbar'>
//       <div className="left">
//         <Link to="/" style={{ textDecoration: "none"}}>
//         <img src={MyLogo} alt="MediSphere Logo" style={{ height: '40px' }} />
//         </Link>
//       </div>
//     </div>
//   )
// } 

