import express from 'express';

import { getPost, deletePost, getPosts, updatePost } from '../controllers/post.js';
import { verifyUser, verifyToken, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.put("/:id", verifyUser, updatePost); 

router.delete("/:id", verifyUser, deletePost);

router.get("/:id", getPost);

router.get("/", getPosts);

// additional auth route req.

export default router;