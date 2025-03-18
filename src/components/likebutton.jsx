import { useState } from "react";


const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        background: "none",
        cursor: "pointer",
        color: liked ? "red" : "gray",
        fontSize: "1.2rem",
      }}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
};

export default LikeButton;  