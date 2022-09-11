import React from 'react'

function Header(props) {
  return (
    <div className='container'>
        <h1 className='display-4 mt-5'>{props.title}</h1>
        <p>{props.desc}</p>
        <hr />
    </div>
  )
}

export default Header