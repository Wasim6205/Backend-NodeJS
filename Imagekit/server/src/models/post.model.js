import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})

const PostModel = mongoose.model("post", postSchema);

export default PostModel;