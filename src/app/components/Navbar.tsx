import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className='flex justify-between shadow-md px-20 py-3'>
        <Link href={'/'} className='text-2xl font-extrabold'>Bouya</Link>
        <ul className='space-x-4'>
        <Link href={'/'}>Who Im I</Link>
        <Link href={'/'}>Projects</Link>
        <Link href={'/'}>Blog</Link>
        <Link href={'/'}>Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar