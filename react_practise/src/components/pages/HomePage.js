import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='h-[500px]'>
        Main content goes here
      </div>
      <Footer />
    </div>
  )
}

export default HomePage