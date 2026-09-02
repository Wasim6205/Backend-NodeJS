import express from "express"
import { createPost, getAllPosts } from "../controllers/post.controller.js"
import { upload } from "../config/multer.config.js"

const router = express.Router()

router.post("/create",upload.single("image"),createPost)
router.get("/getAllPosts",getAllPosts)

export default router