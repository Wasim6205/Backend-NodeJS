import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'

const App = () => {

  const {register, handleSubmit, reset} = useForm()

  const submitHandler = async (data) => {
    console.log(data);
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    for(let i=0; i<data.images.length; i++){
      formData.append("images", data.images[i])
    }

    let res = await axios.post("http://localhost:3002/user/create", formData, {
      withCredentials: true
    })
    
    reset()
  }
  
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">User Form</h2>
          <p className="mt-2 text-sm text-slate-500">Create your profile details</p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
            {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="profile_pic" className="mb-2 block text-sm font-medium text-slate-700">
              Profile Pic
            </label>
            <input
            {...register("images")}
              type="file"
              accept="image/*"
              multiple
              className="block w-full cursor-pointer rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default App