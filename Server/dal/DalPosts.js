import { readFile } from "fs/promises";

const DATA_PATH = "./data/posts.json"; 

export async function readPosts() {
  const text = await readFile(DATA_PATH, "utf-8");
  return JSON.parse(text);
}

export async function readPostById(id) {
  const posts = await readPosts();
  return posts.find(p => String(p.id) === String(id)) ||  null;
}
