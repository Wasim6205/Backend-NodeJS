import PostModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

export const createPost = async (req, res) => {
    try {
        const { caption } = req.body;
        const file = req.file;

        console.log("FILE:", req.file);
console.log("BUFFER:", req.file?.buffer);
console.log("NAME:", req.file?.originalname);

        if (!file || !caption) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const uploadImage = await sendFiles(
            file.buffer,
            file.originalname
        );

        const post = await PostModel.create({
            caption,
            image: uploadImage.url
        });

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            post
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getAllPosts = async (req,res) => {
    try {
        const posts = await PostModel.find().sort({createdAt:-1})
        return res.status(200).json({
            success:true,
            message:"Posts fetched successfully",
            posts
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}