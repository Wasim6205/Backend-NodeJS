import React from 'react'

const NoteCard = ({note, deleteNote}) => {
  return (
    <div className='w-[30%] border border-white p-4 rounded-xl flex flex-col gap-4'>
        <h1>{note.title}</h1>
        <p>{note.description.length > 20 ? note.description.substr(0,20) : note.description}</p>
        <div className='flex justify-between'>
            <button className='p-2 bg-yellow-600 text-white'>Update</button>
            <button onClick={() => deleteNote(note._id)} className='p-2 bg-red-600 text-white'>Delete</button>
        </div>
    </div>
  )
}

export default NoteCard