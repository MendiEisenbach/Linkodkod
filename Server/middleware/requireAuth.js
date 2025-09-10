import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const [scheme, token] = auth.split(" ");

  if (scheme !== "Bearer"|| !token) {
    return res.status(401).json({
        error: "Unauthorized", message: "invalid Authorization header"
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(400).json({ error: "Unauthorized", message: "Invalid token" });
  }
}