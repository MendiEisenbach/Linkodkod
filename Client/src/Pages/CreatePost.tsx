import { useState } from "react";
import { createPost, type createPostInput } from "../services/postsService";
import "../style/CreatePost.css";

function CreatePost() {
  const [form, setForm] = useState<createPostInput>({
    title: "",
    image: "",
    author: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");
    try {
      if (!form.title || !form.image || !form.author || !form.time) {
        throw new Error("Please fill in all fields");
      }
        const created = await createPost(form);
        setSuccessMsg(`post ${created.id} was sent successfully!`);

      setForm({ title: "", image: "", author: "", time: "" });
    } catch (err: any) {
      setError(err?.message || "Something went wrong." );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-post">
      <h2>Publish a new post</h2>

      <form onSubmit={handleSubmit} className="create-post-form">
        <label>
          content
          <input name="title" value={form.title} onChange={handleChange} />
        </label>

        <label>
          Link to image (URL)
          <input name="image" value={form.image} onChange={handleChange} />
        </label>

        <label>
          Your name
          <input name="author" value={form.author} onChange={handleChange} />
        </label>
        <label>
          time
          <input name="time" value={form.time} onChange={handleChange} />
        </label>

        <button type="submit">
          {loading ? "Sending..." : "Publish"}
        </button>
      </form>

      {error && <div className="error">error: {error}</div>}
      {successMsg && <div className="success">{successMsg}</div>}
    </div>
  );
}

export default CreatePost;