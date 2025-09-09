import { readPosts, readPostById } from "../dal/DalPosts.js";

export async function fetchAllPosts() {
  return await readPosts();
}

export async function fetchPostById(id) {
  return await readPostById(id);
  
}
