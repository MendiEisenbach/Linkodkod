import { useState } from "react";
import '../style/post.css'

type PostType = {
  title: string;
  image: string;
  author: string;
  time: string;
  likesNum : number;
};

function Post({ title, image, author, time, likesNum}: PostType) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (

      <div className="post">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <div className="puter">
        <p>By {author}</p>
        <p>{time}</p>
        <button onClick={() => { handleLike();  }}>
          {likesNum}{like ? "Like!" : "Like"}
        </button>
      </div>
      </div>
  );
}

export default Post;