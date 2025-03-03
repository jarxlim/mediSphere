import "./share.scss";
import Image from "../../assets/icons8-gallery-100.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/icons8-team-100.png";
import Job from "../../assets/icons8-events-100.png";
import Item from "../../assets/icons8-marketplace-100.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          
          <input type="text" placeholder={`Start a post...`} />
          <div className="right">
            <button>Post</button>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Media</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Location</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
            {/* Add Sell an Item option */}
            <div className="item">
              <img src={Item} alt="" />
              <span>Sell an Item</span>
            </div>
            {/* Add Post a Job option */}
            <div className="item">
              <img src={Job} alt="" />
              <span>Post a Job</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Share;
