import React, { useEffect } from 'react'
import SearchDropDown from '../../search/SearchDropDown'

export default function AddBookDrop({conditionHandler, categoryHandler}) {
  const conditionOptions = ['Like New', 'Good', 'Fair', 'Poor'];
  const categoryOptions = ['Engineering', 'Diploma', 'Other'];
  useEffect(() => {
    conditionHandler(conditionOptions[0]);
    categoryHandler(categoryOptions[0])
  }, [])
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 mb-5">
      <SearchDropDown allOption={false} name="Category" options={categoryOptions} handler={categoryHandler}/>

      <SearchDropDown name="Condition" allOption={false} options={conditionOptions} handler={conditionHandler} />

    </div>
  )
}
