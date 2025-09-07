import { useState } from "react";
import "../style/post.css";

type PostType = {
  title: string;
  image: string;
  author: string;
  time: string;
  likesNum: number;
};

type TipeProps = {
  Posts: PostType[];
}

function Post({ Posts }: TipeProps) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="cards-container">
      {Posts.map((Post) => (
        <div className="post">
          <img src={Post.image} alt={Post.title} />
          <h2>{Post.title}</h2>
          <div className="puter">
            <p>By {Post.author}</p>
            <p>{Post.time}</p>
            <button
              onClick={() => {
                handleLike();
              }}
            >
              {Post.likesNum}
              {like ? "Like!" : "Like"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
