const express = require("express")
const NotesModel = require("../models/notes.model")
const { getAllNotesController, createNotesController, getSingleNoteController, updateNoteController, deleteNoteController } = require("../controllers/notes.controller")
const { data } = require("react-router-dom")

const router = express.Router()

// CREATE
router.post('/create', createNotesController)

// READ
router.get("/allNotes", getAllNotesController)

// READ ONE
router.get("/:id", getSingleNoteController)

// UPDATE VIA PUT
router.put("/:id", updateNoteController)

// UPDATE VIA PATCH

// DELETE
router.delete("/:id", deleteNoteController)

module.exports = router