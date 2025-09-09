import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard, { type PostType } from "./PostCard";
import { getAllPosts } from "../services/postsService";

function PostsList() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (e: any) {
        setError(e?.message || "Failed load");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="status">Loading posts…</div>;
  if (error) return <div className="error">error: {error}</div>;

  return (
    <div className="cards-container">
      {posts.map((p) => (
        <Link key={p.id} to={`/posts/${p.id}`}>
          <PostCard post={p} />
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
