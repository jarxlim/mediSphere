import "./leftBar.scss";
import Connections from "../../assets/icons8-team-100.png";
import Groups from "../../assets/icons8-user-groups-100.png";
import Market from "../../assets/icons8-marketplace-100.png";
import Jobs from "../../assets/icons8-jobs-100.png";
import Appointment from "../../assets/icons8-calendar-100.png"
import Events from "../../assets/icons8-events-100.png";
import Gallery from "../../assets/icons8-gallery-100.png";
import Videos from "../../assets/icons8-video-100.png";
import Messages from "../../assets/icons8-message-100.png";
import Memories from "../../assets/icons8-time-100.png";
import Courses from "../../assets/icons8-classroom-100.png";
import Fund from "../../assets/icons8-fund-accounting-100.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Connections} alt="" />
            <span>Connections</span>
          </div><div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Jobs} alt="" />
            <span>Jobs</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={Appointment} alt="" />
            <span>Online Appointment</span>
          </div>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;