import React from 'react'
import "./Addbook.css"
function Addbook() {
  return (
      <div>
        <label className='block0'>
        <h1>Add New Book</h1>
      </label>
    <form>
        <label name="book name ">Book Name </label>
        <input type="textbox"
        name='type your book name '/>
        <label className='block1'>AUTHOR NAME  
          <input type="textbox" size="20"
        name='Author name '/>
        </label>
        <label className='block2'>EDITION  
        <input type='textbox'
        placeholder='ex:2019'/>
        </label>
        <label className='block3'>CATEGORY
        <input type='textbox'
        placeholder='Eg:Autobigraphy'/>
        </label>
        <label className='block4'>Field:
          

          <select> 
          <option value="all">all</option>
          <option value="Enginerring">Enginnering </option>
        <option value="diploma">Diploma</option>        
        </select>
        </label>
        <label className='block5'>
        <h1>Upload image </h1>
        </label>
           </form>
    </div>
  )
}
export default Addbook