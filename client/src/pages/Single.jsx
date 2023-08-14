import React, { useContext, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Menu from "../components/Menu";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment"





const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost()
  },[postId]);

  return (
    <div className="single">
      <div className="content">
        <div className="content">
          <img src={post?.img} />
        </div>
        {post.userImg && <div className="user">
          <img src={post.userImg} />
        </div>}
        <div>
          <span>{post.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        {currentUser.suername === post.usename && (<div className="edit">
          <Link to={"/write"}>
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>)}
        <h1>xxx xxxxxx xxxxxxxxxx xx</h1>
        <p>
          Thank you for this wonderful tutorial. It is a great start! I've been
          doing either front-end or back-end projects, but now I see how it all
          works together. I had a bit of trouble with the database (because I
          have never learned about it), but pushed through anyways.
        </p>
      </div>
    </div>
  );
};

export default Single;
