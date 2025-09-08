import PostCard  from "./PostCard";
import posts from "../Data/posts";

function PostsList() {

  return (
    <div className="cards-container">
      {posts.map((p, idx) => (
        <PostCard key={ idx} post={p} />
      ))}
    </div>
  );
}

export default PostsList;
