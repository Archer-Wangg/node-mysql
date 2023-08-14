import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";

const router = express.Router();

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)
router.post("/", addPost)
router.delete('/:id', deletePost) 
router.put('/', updatePost)



export default router;