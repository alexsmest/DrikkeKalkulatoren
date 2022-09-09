import React from 'react'
import "../style.css"

function Header(props) {
  return (
    <>
        <h1>{props.name}</h1>
    </>
  )
}

export default Header