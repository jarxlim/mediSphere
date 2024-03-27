import React from 'react'
import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import House from '../../assets/IMG-20221211-WA0003.jpg'

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
    id: 1,
    name: "Chike Chima",
    img: "https://www.foodandwine.com/thmb/Yra8iPnZZTF-JgQKeSCzYeisJ7U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chianti-Comes-Through-XL-MAG0223-89070b3b27df4ebaa5823553bc3ff2a3.jpg",
    },
    {
    id: 2,
    name: "Chike Chima",
    img: "https://assets.weforum.org/article/image/responsive_big_webp_XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.webp",
    },
    {
    id: 3,
    name: "Chike Chima",
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    },
    {
    id: 4,
    name: "Chike Chima",
    img: "https://assets.weforum.org/article/image/responsive_big_webp_XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.webp",
    },
    
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories