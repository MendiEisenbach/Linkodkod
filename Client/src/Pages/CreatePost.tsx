import { useState, useContext } from "react";
import { createPost } from "../services/postsService";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../style/AuthMessages.css";
import "../style/CreatePost.css";

function CreatePost() {
  const { token, username } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      await createPost({ title, image, author: username, time });
      navigate("/");
    } catch (err: any) {
      setError(err?.message || "Failed to create post");
    }
  }

  if (!token) {
    return (
      <div className="auth-message">
        <p>You must log in to create a post.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="create-post">
      <h2>Create a New Post</h2>
      <form className="create-post-form" onSubmit={onSubmit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <input placeholder="Time" value={time} onChange={e => setTime(e.target.value)} />
        <button type="submit">Save</button>
      </form>
      {error && <div className="form-error">Error: {error}</div>}
    </div>
  );
}

export default CreatePost;