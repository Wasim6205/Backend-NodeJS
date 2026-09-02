const express = require("express")
const upload = require("../config/multer.config")
const { create } = require("../controllers/user.controller")

const router = express.Router()

router.post("/create", upload.array("images", 5), create)

module.exports = router