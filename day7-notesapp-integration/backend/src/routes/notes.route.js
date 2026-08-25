const express = require("express")
const NotesModel = require("../models/notes.model")
const { getAllNotesController, createNotesController, getSingleNoteController, updateNoteController, deleteNoteController, singleEntityUpdateController } = require("../controllers/notes.controller")
const { data } = require("react-router-dom")

const router = express.Router()

// CREATE
router.post('/create', createNotesController)

// READ
router.get("/allNotes", getAllNotesController)

// READ ONE
router.get("/:id", getSingleNoteController)

// UPDATE VIA PUT (for all object)
router.put("/:id", updateNoteController)

// UPDATE VIA PATCH (single entity)
router.patch("/:id/single", singleEntityUpdateController)

// DELETE
router.delete("/:id", deleteNoteController)

module.exports = router