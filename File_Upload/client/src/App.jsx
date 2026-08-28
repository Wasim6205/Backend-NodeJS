import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">User Form</h2>
          <p className="mt-2 text-sm text-slate-500">Create your profile details</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="profile_pic" className="mb-2 block text-sm font-medium text-slate-700">
              Profile Pic
            </label>
            <input
              id="profile_pic"
              type="file"
              name="profile_pic"
              accept="image/*"
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