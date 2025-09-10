import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../services/postsService";
import { AuthContext } from "../context/AuthContext";
import { type PostType } from "../Components/PostCard";
import "../style/AuthMessages.css";
import "../style/PostPage.css";

function PostPage() {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    async function load() {
      setLoading(true);
      try {
        if (id) {
          const data = await getPostById(id);
          setPost(data);
        }
      } catch (e: any) {
        setError(e?.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id, token]);

  if (!token) {
    return (
      <div className="auth-message">
        <p>You must log in to view this post.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  if (loading) return <div>Loading post…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found.</div>;

  return (
    <div className="post-page">
      <h2>{post.title}</h2>
      <img className="post-image" src={post.image} alt={post.title} />
      <p>By {post.author}</p>
      <p>{post.time}</p>
      <p>Likes: {post.likesNum}</p>
    </div>
  );
}

export default PostPage;

