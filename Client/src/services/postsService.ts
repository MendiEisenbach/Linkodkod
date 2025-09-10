import type { PostType } from "../Components/PostCard";

const API_BASE = "http://localhost:3000";

export async function getAllPosts(): Promise<PostType[]> {
  const res = await fetch(`${API_BASE}/api/posts`);
  if (!res.ok) throw new Error("Failed fetch posts");
  return res.json();
}

export async function getPostById(id: string): Promise<PostType> {
  const res = await fetch(`${API_BASE}/api/posts/${id}`);
  if (res.status === 404) throw new Error("Post not found");
  if (!res.ok) throw new Error("Failed fetch post");
  return res.json();
}


export type createPostInput = {
  title: string;
  image: string; 
  author: string;
  time: string;  
};

export async function createPost(input: createPostInput): Promise<PostType> {
  const res = await fetch(`${API_BASE}/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
if (!res.ok) {
  const { message } = await res.json();
  throw new Error(message || "Failed to create post");
}
  return res.json();
}
