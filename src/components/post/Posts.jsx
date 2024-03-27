import React from 'react'
import Post from '../postsBar/postBar';
import "./post.scss";


const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Amanda Chima",
      userId: 1,
      profilePic:
        "https://assets.weforum.org/article/image/responsive_big_webp_XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.webp",
      desc: "This is my first post",
      img: "https://assets.weforum.org/article/image/responsive_big_webp_XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.webp",
    },
    {
      id: 2,
      name: "Jane Chima",
      userId: 2,
      profilePic:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      desc: "Hello World!",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;