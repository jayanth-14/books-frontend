import React from 'react'

function ButtonPrimary(params) {
  return (
    <button className="btn-primary">
      {params.text}
    </button>
  )
}

export default ButtonPrimary