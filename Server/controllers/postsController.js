import { fetchAllPosts, fetchPostById } from "../services/postsService.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await fetchAllPosts();
    res.json(posts);
  } catch (err) {
    console.error("Failed loud posts:", err);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function getPostById(req, res) {
  try {

    const PostId = req.params.id;

    if (PostId === undefined || PostId === null) {
      return res.status(400).json({ error: "Invalid request", message: "id param is required" });
    }

    const id = String(PostId).trim();

    if (id.length === 0) {
      return res.status(400).json({ error: "Invalid request", message: "id cannot be empty" });
    }

    const post = await fetchPostById(id);
    if (!post) {
      return res.status(404).json({ error: "Not Fund", message: `Post '${id}' not fund` });
    }

    res.json(post);
  }  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
}

