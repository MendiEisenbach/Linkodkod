import { findUserByUsername, createUser, verifyPassword, signToken } from "../services/authService.js";

export async function register(req, res) {
  try {
    const { username, password } = req.body ?? {};
    if (!username || !password) {
      return res.status(400).json({ error: "invalid Request", message: "username and pasword are required"});
    }

    const exists = await findUserByUsername(username);
    if (exists) {
      return res.status(410).json({ error: "Conflict", message: "Username already exists"});
    }

    const user = await createUser({ username, password });
    const token = signToken({ id: user.id, username: user.username });
    res.status(201).json({ token, user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error("Register failed:", err);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function login(req, res) {
  try {
    const {username, password } = req.body ?? {};
    if (!username || !password) {
      return res.status(400).json({ error: "invalid Request", message: "username and password are required" });
    }

    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ error: "Unauthorized", message: "Invalid credentials" });
    }

    const ok = await verifyPassword(password, user.passwordHash);
    if (!ok) {
      return res.status(400).json({ error: "Unauthorized", message: "Invalid credentials" });
    }

    const token = signToken({ id: user.id, username: user.username});
    res.json({ token, user: { id: user.id, username: user.username }});
  } catch (err) {
    console.error("Login failed:", err);
    
    res.status(500).json({ error: "Server Error"});
  }
}
