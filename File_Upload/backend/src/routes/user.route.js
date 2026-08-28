const express = require("express")
const upload = require("../config/multer.config")
const { create } = require("../controllers/user.controller")

const router = express.Router()

router.post("/create", upload.single("profile_pic"), create)

module.exports = router