import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { readUsers, writeUsers } from "../dal/DalUsers.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export async function findUserByUsername(username) {
  const users = await readUsers();
  return users.find(u => u.username.toLowerCase() === String(username).toLowerCase()) || null;
}

export async function createUser({ username, password }) {

  const users = await readUsers();
  const ids = users.map(u => Number(u.id) || 0);
  const maxId = Math.max(0, ...ids);
  const newId = String(maxId + 1);

  const passwordHash = await bcrypt.hash(String(password), 10);

  const user = { id: newId, username: String(username).trim(), passwordHash };
  await writeUsers([...users, user]);
  return user;
}

export async function verifyPassword(plain, hash) {
  return bcrypt.compare(String(plain), hash);
}

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}
