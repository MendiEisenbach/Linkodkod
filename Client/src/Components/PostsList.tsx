import { useEffect, useState, useContext } from "react";
import PostCard, { type PostType } from "./PostCard";
import { getAllPosts } from "../services/postsService";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../style/AuthMessages.css";

function PostsList() {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    async function load() {
      setLoading(true);
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (e: any) {
        setError(e?.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [token]);

  if (!token) {
    return (
      <div className="auth-message">
        <p>You must log in to view posts.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  if (loading) return <div className="status">Loading posts…</div>;
  if (error) return <div className="error">Error: {error}</div>;

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
