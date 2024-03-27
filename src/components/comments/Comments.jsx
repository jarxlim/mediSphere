import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
 
  const comments = [
    {
      id: 1,
      desc: "Great photos. I love this",
      name: "Festus Chike",
      userId: 1,
      profilePicture:
        "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      desc: "You guys are looking great.",
      name: "Jennifer Hug",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;