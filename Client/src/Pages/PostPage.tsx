import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { PostType } from "../Components/PostCard";
import { getPostById } from "../services/postsService";
import "../style/PostPage.css";

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Missing id");
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (e: any) {
        setError(e?.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="status">Loading post...</div>;
  if (error) return <div className="error">error:{error}</div>;
  if (!post) return <div className="error">Post not fund</div>;

  return (
    <div className="post-page">
      <Link to="/" className="back-link">Back home</Link>
      <div className="post">
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <div className="puter">
          <p>By {post.author}</p>
          <p>{post.time}</p>
        </div>
        <div className="likes">Likes: {post.likesNum}</div>
      </div>
    </div>
  );
}

export default PostPage;

