import React from 'react'
import AuthLinks from './AuthLinks'
import Logo from '../Logo'
import ThemeButton from '../buttons/ThemeButton'
import Divider from '../Divider'

const Navbar = () => {
  return (
    <header className='px-4 py-8 dark:bg-grey'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Logo size={120} />
            <div className='flex items-center gap-2'>
                <ThemeButton />
                <AuthLinks />
            </div>
        </nav>
        <Divider />
    </header>
  )
}

export default Navbar