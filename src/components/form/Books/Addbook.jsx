import React from 'react'

function Addbook() {
  return (
      <div>
      <h1>Add New Book</h1>
    <form>
        <label className="block ">Book Name 
        </label>
        <input type='text' 
        placeholder='type your book name '/>
        <label className='block'>AUTHOR NAME  </label>
        <input type='text'
        placeholder='Author name '/>
        <label className='block'>EDITION  </label>
        <input type='text'
        placeholder='ex:2019'/>
        <label className='block'>CATEGORY</label>
        <input type='text'
        placeholder='Eg:Autobigraphy'/>
        <label className='block'>field</label>
        <input type='text'
        placeholder='Eg:engineerng' >

        </input>
        
        


    </form>
    </div>
  )
}

export default Addbook