import React from 'react'
import Navbar from '../components/Navbar'

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8'>
        {children}
      </main>
    </>
  )
}

export default HomeLayout