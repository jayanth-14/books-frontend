import React from 'react'
import SearchDropDown from '../../search/SearchDropDown'

export default function AddBookDrop() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 mb-5">
      <SearchDropDown name="Category" options={['Engineering', 'Diploma', 'Other']} />

      <SearchDropDown name="Condition" options={['Like New', 'Good', 'Fair', 'Poor']} />

    </div>
  )
}
