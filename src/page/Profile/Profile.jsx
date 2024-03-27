import React from 'react'
import "./profile.scss";

import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/post/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        />
        <img
          src="https://assets.weforum.org/article/image/responsive_big_webp_XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.webp"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>Amanda Chima</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Nigeria</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Prosthetist and Orthotist</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;