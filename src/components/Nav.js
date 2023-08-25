import React from 'react'

const Nav = () => {
  return (
    <nav>
        <img 
        alt='Netflix logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className='nav_logo'
        onClick={() => window.location.reload()}
        />
    </nav>
  )
}

export default Nav