import express from "express";
import cors from "cors";
import postsRouter from "./routes/postsRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/", express.static("public"));

app.use("/api/auth", authRouter);

app.use("/api/posts", postsRouter);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});