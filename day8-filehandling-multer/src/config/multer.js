const multer = require("multer")

// DISK STORAGE for local
const storageForLocal = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, "uploads/")
    },
    filename: (req,file,cb) => {

        // size and ratio and format check
        
        cb(null, Date.now() + file.originalname)
    }
})

// FOR SERVER
const storageForServer = multer.memoryStorage()

const upload = multer({storage: storageForServer})

module.exports = upload