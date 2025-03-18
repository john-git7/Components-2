import React from "react";
import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
    return (
      <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}>
        <img
          src={post.profilePic}
          alt="Profile"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: 0 }}>{post.username}</h4>
          <p style={{ margin: "5px 0" }}>{post.content}</p>
        </div>
        <LikeButton />
      </div>
    );
  };

  export default PostCard;