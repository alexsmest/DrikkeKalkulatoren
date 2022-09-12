import React from 'react'
import Logo from "../images/logo.png"

function Header(props) {
  return (
    <div className='container'>
        <h1 className='display-4 mt-5'>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Header