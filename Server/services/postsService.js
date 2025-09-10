import { readPosts, readPostById, writePosts, createPostRecord } from "../dal/DalPosts.js";

export async function fetchAllPosts() {
  return await readPosts();
}

export async function fetchPostById(id) {
  return await readPostById(id);
}

export async function insertPost(data) {
  const posts = await readPosts();
  const newPost = createPostRecord(data, posts);
  const updated = [...posts, newPost];
  await writePosts(updated);
  return newPost;
}
