import type {PostType } from "../Components/PostCard";

const API_BASE = "http://localhost:3000";

export async function getAllPosts(): Promise<PostType[]> {
  const res = await fetch(`${API_BASE}/api/posts`);

  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
