import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
    const [formValues,setFormValues] = useState({
        title:"",
        description:""
    })

    const handleChange = (e) => {
        setFormValues(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // api call
        let res = await axios.post(`http://localhost:4000/notes/create`,formValues)
        console.log(res);
        
        setFormValues({
            title: "",
            description: ""
        })
    }
    
  return (
    <div className='h-screen p-5 bg-black text-white flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>Notes App</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-70 border border-white rounded-xl p-4'>
            <input onChange={handleChange} value={formValues.title} name='title' className='p-2 outline-none text-xl rounded border border-white' type="text" placeholder='Title' />
            <input onChange={handleChange} value={formValues.description} name='description' className='p-2 outline-none text-xl rounded border border-white' type="text" placeholder='Description' />
            <button className='bg-blue-600 text-white p-2 rounded'>Add Note</button>
        </form>
    </div>
  )
}

export default App