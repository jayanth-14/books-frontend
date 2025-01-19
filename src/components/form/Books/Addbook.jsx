import React from 'react'
import "./Addbook.css"
import SearchDropDown from '../../search/SearchDropDown'
import ButtonPrimary from '../../buttons/buttonPrimary'
import AddBookInput from './AddBookInput'
import AddBookDrop from './AddBookDrop'
import ImageUpload from './ImageUpload'
function Addbook() {
  return (
    <div className='p-20 flex flex-col justify-center items-center'>
      <div className='m-10 w-screen max-w-screen-md'>
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="relative mb-10 w-full flex  items-center justify-between border-b-4">
              <label className='h-12 w-full py-4 pr-40 pl-1 flex flex-row justify-center items-center'>
                <h1 className='text-2xl font-semibold mx-auto'>Add New Book</h1>
              </label>
            </div>
            <form>
              <AddBookInput title="BOOK NAME" />
              <AddBookInput title="AUTHOR NAME" />
              <AddBookInput title="PUBLISHER" />

              <div className="relative mb-10 w-full flex items-start justify-between rounded-md">
                <label className='text-lg font-medium text-black-600 w-56'>DESCRIPTION : </label>
                <textarea type="textbox" className='h-32 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-5 shadow-sm outline-none' name='Author name '> </textarea>
              </div>
              <AddBookDrop />
              <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
                <AddBookInput title="YEAR" type="number" />
                <AddBookInput title="QUANTITY" type="number" />
                <AddBookInput title="PRICE" type="number" />

              </div>
              
              <ImageUpload />
              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <ButtonPrimary className=" w-full rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"> Add Book</ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Addbook