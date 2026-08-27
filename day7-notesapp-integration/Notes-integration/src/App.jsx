import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import NoteCard from './components/NoteCard'

const App = () => {
    const [formValues,setFormValues] = useState({
        title:"",
        description:""
    })
    const [updateNoteId, setUpdateNoteId] = useState(null)

    const [allNotes,setAllNotes] = useState([])

    const handleChange = (e) => {
        setFormValues(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const getAllNotes = async () => {
        try {
            let res = await axios.get(`http://localhost:4000/notes/allNotes`)
            setAllNotes(res.data.data)
        } catch (error) {
            console.log('error in get all notes api',error);
        }
    }

    useEffect(() => {
        getAllNotes()
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(updateNoteId){
            // api call for update note
            let res = await axios.put(`http://localhost:4000/notes/${updateNoteId}`,formValues)
            console.log(res);
            setUpdateNoteId(null)
        }else{
            // api call for create note
            let res = await axios.post(`http://localhost:4000/notes/create`,formValues)
            console.log(res);
        }
    
        getAllNotes()
        setFormValues({
            title: "",
            description: ""
        })
    }
    

    let deleteNote = async (id) => {
        try {
            let res = await axios.delete(`http://localhost:4000/notes/${id}`)
            console.log(res);
            getAllNotes()
        } catch (error) {
            console.log('error in delete note api',error);
        }
    }

    let noteForUpdate = (note) => {
        setUpdateNoteId(note._id)
        setFormValues({
            title: note.title,
            description: note.description
        })
    }
    
  return (
    <div className='h-screen p-5 bg-black text-white flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>Notes App</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-70 border border-white rounded-xl p-4'>
            <input onChange={handleChange} value={formValues.title} name='title' className='p-2 outline-none text-xl rounded border border-white' type="text" placeholder='Title' />
            <input onChange={handleChange} value={formValues.description} name='description' minLength={20} required className='p-2 outline-none text-xl rounded border border-white' type="text" placeholder='Description' />
            <button className='bg-blue-600 text-white p-2 rounded'>{updateNoteId ? "Update note" : "Add note"}</button>
        </form>

        <div className='flex gap-5 flex-wrap'>
            {allNotes.map((val) => (
                <NoteCard key={val._id} note={val} deleteNote={deleteNote} noteForUpdate={noteForUpdate} />
            ))}
        </div>
    </div>
  )
}

export default App