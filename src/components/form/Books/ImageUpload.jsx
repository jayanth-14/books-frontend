import React from 'react'

export default function ImageUpload({handler}) {
  return (
    <div className="max-w-sm relative mb-10 w-full flex items-center justify-between rounded-md">
    <label for="photobutton" className="text-lg font-medium text-black-600 w-56">UPLOAD BOOK IMAGE : </label>
    <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
      <input id="photobutton" onChange={(e)=> {handler(e.target.files[0])}} type="file" className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
    </div>
  </div>
  )
}
