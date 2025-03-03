import React from 'react'
import "./NavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/logo1.png';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from '../../context/authContext';
import Consult from '../../assets/icons8-online-support-100.png'

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar-container">  {/* Added a wrapper here */}
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={MyLogo} alt="MediSphere Logo" style={{ height: '40px' }} />
          </Link>
          <HomeOutlinedIcon />
          {darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle} />
          ) : (
            <DarkModeOutlinedIcon onClick={toggle} />
          )}
          <button className="consult-specialist outlined-btn">
            Call an Ambulance
          </button>
        </div>

        <div className="right">
          <button className="consult-specialist outlined-btn">
            <img src={Consult} alt="Consult Specialist Icon" /> Consult a Specialist
          </button>
          <WorkOutlineOutlinedIcon />
          <StorefrontOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Navbar;




        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..."/>
          </div>