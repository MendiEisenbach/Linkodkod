import { useEffect, useState } from "react";
import PostCard, { type PostType } from "./PostCard";
import { getAllPosts } from "../services/postsService";

function PostsList() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getAllPosts()
    .then(setPosts)
  }, []);

  return (
    <div className="cards-container">
      {posts.map((p, idx) => (
        <PostCard key={idx} post={p} />
      ))}
    </div>
  );
}

export default PostsList;
