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
        
        // api call
        let res = await axios.post(`http://localhost:4000/notes/create`,formValues)
        console.log(res);
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

    }
    
  return (
    <div className='h-screen p-5 bg-black text-white flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>Notes App</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-70 border border-white rounded-xl p-4'>
            <input onChange={handleChange} value={formValues.title} name='title' className='p-2 outline-none text-xl rounded border border-white' type="text" placeholder='Title' />
            <input onChange={handleChange} value={formValues.description} name='description' minLength={20} required className='p-2 outline-none text-xl rounded border border-white' type="text" placeholder='Description' />
            <button className='bg-blue-600 text-white p-2 rounded'>Add Note</button>
        </form>

        <div className='flex gap-5'>
            {allNotes.map((val) => (
                <NoteCard key={val._id} note={val} deleteNote={deleteNote} />
            ))}
        </div>
    </div>
  )
}

export default App