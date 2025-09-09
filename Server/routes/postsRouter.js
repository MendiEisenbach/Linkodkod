import express from "express";
import { getAllPosts, getPostById} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getPostById);

export default router;
