import React from 'react'

function ButtonPrimary(params) {
  return (
    <button className={`btn-primary ${params.className}`}>
      {params.children}
    </button>
  )
}

export default ButtonPrimary