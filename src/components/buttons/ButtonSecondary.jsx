import React from 'react'

function ButtonSecondary(params) {
  return (
    <button className={"btn-secondary " + params.className}>
      {params.children}
    </button>
  )
}

export default ButtonSecondary