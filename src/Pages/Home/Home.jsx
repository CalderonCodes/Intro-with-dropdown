import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Sidebar from '../../Components/Navigation/Sidebar'
import Button from '../../Components/Buttons/Button'

function Home() {
  return (
    <div className='bg-AlmostWhite  min-h-screen flex flex-col'>
        <Sidebar/>
        <div className='bg-AlmostWhite lg:px-32 h-full lg:min-h-full font-Epilogue flex-1 flex flex-col lg:items-center lg:justify-center lg:flex-row-reverse gap-10 lg:gap-20'>
          <figure className='h-80 lg:w-1/2 lg:h-full flex justify-center '>
            <img className='object-cover w-full h-80 lg:h-full lg:hidden ' src="assets/image-hero-mobile.png" alt="" />
            <img className='object-cover w-10/12 hidden lg:flex ' src="assets/image-hero-desktop.png" alt="" />
          </figure>

          <div className='flex flex-col lg:min-h-full lg:w-1/2  lg:justify-center lg:items-start items-center lg:gap-7'>
            <h1 className='text-4xl lg:text-7xl font-bold'> Make remote work</h1>
            <p className='text-center lg:text-left lg:pl-0 text-MiedumGray font-semibold p-5'>
              Get your team in sync, no matter your location. Streamline processes, create team rituals,
               and watch productivity soar.</p>
          <Button/>
          <div className='flex w-full mt-10 justify-between items-center px-3'>
            <img className='h-5' src="assets/client-databiz.svg" alt="databiz" />
            <img className='h-8' src="assets/client-audiophile.svg" alt="audiophile" />
            <img className='h-5' src="assets/client-meet.svg" alt="meet" />
            <img className='h-5' src="assets/client-maker.svg" alt="maker" />
          </div>
          </div>
          
        </div>
    </div>
  )
}

export default Home