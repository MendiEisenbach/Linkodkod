import { fetchAllPosts } from "../services/postsService.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await fetchAllPosts();
    res.json(posts);
  } catch (err) {
    console.error("Failed loud posts:", err);
    res.status(500).json({ error: "Server Error" });
  }
}

