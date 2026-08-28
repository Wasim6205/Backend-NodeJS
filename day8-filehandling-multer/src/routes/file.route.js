const express = require("express");
const upload = require("../config/multer");

const router = express.Router()

router.post("/", upload.single('image'), async (req,res) => {
    try {
        let body = req.body
        let file = req.file
        
        console.log(file);
        console.log(body);
        
        res.status(200).json({
            message:"file received successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
})

module.exports = router