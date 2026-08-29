const express = require("express")
const upload = require("../config/multer.config")
const { create } = require("../controllers/user.controller")

const router = express.Router()

router.post("/create", upload.array("images"), create)

module.exports = router