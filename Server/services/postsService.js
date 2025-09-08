import { readPosts } from "../dal/DalPosts.js";

export async function fetchAllPosts() {
  return await readPosts();
}
