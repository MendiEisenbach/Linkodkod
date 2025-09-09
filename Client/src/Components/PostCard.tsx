import { useState } from "react";
import "../style/PostCard.css";

export type PostType = {
  id: string; 
  title: string;
  image: string;
  author: string;
  time: string;
  likesNum: number;
};

function PostCard({ post }: { post: PostType }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div className="post">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <div className="puter">
        <p>By {post.author}</p>
        <p>{post.time}</p>
      </div>
      <button onClick={handleLike}>
        ({post.likesNum}) {liked ? "like" : "Like!"}
      </button>
    </div>
  );
}

export default PostCard;
