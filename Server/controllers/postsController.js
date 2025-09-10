import { fetchAllPosts, fetchPostById, insertPost } from "../services/postsService.js";

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

export async function createPost(req, res) {
  try {
    const { title, image, author, time } = req.body ?? {};

    if (!title || !String(title).trim()) {
      return res.status(400).json({ error: "Invalid request", message: "title is required" });
    }
    if (!image || !String(image).trim()) {
      return res.status(400).json({ error: "Invalid request", message: "image is required" });
    }
    if (!author || !String(author).trim()) {
      return res.status(400).json({ error: "Invalid request", message: "author is required" });
    }
    if (!time || !String(time).trim()) {
      return res.status(400).json({ error: "Invalid request", message: "time is required" });
    }

    const newPost = await insertPost({ title, image, author, time });
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Failed create post:", err);
    res.status(500).json({ error: "Server Error" });
  }
  
}

