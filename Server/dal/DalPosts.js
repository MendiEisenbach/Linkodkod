import { readFile, writeFile } from "fs/promises";

const DATA_PATH = "./data/posts.json"; 

export async function readPosts() {
  const text = await readFile(DATA_PATH, "utf-8");
  return JSON.parse(text);
}

export async function readPostById(id) {
  const posts = await readPosts();
  return posts.find(p => String(p.id) === String(id)) ||  null;
}

export async function writePosts(posts) {
  const text = JSON.stringify(posts, null, 2);
  await writeFile(DATA_PATH, text, "utf-8");
}


export function createPostRecord(data, existingPosts) {
  const { title, image, author, time } = data;

 
  const ids = existingPosts.map(p => Number(p.id));
  const maxId = Math.max(0, ...ids);
  const newId = String(maxId +1);

  return {
    id: newId,
    title: String(title).trim(),
    image: String(image).trim(),
    author: String(author).trim(),
    time: String(time).trim(),
    likesNum: 0
  };
}