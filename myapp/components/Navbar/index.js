import React from 'react'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar