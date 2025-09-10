import express from "express";
import { getAllPosts, getPostById, createPost } from "../controllers/postsController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getAllPosts);

router.get("/:id", requireAuth, getPostById);

router.post("/", requireAuth, createPost);

export default router;
