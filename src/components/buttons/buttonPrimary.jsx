import React from 'react'

function ButtonPrimary(params) {
  return (
    <button className="btn-primary">
      {params.children}
    </button>
  )
}

export default ButtonPrimary