import { readFile, writeFile } from "fs/promises";

const USERS_PATH = "./data/users.json";

export async function readUsers() {
  try {
    const text = await readFile(USERS_PATH, "utf-8");
    return JSON.parse(text);
  } catch {
return [];
  }
}

export async function writeUsers(users) {
  const text = JSON.stringify(users);
  await writeFile(USERS_PATH, text, "utf-8");
}