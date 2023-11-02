import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Sidebar from '../../Components/Navigation/Sidebar'
import Button from '../../Components/Buttons/Button'

function Home() {
  return (
    <div className='bg-AlmostWhite  min-h-screen flex flex-col'>
        <Sidebar/>
        <div className='bg-AlmostWhite h-full font-Epilogue flex-1 flex flex-col gap-10'>
          <figure className='h-80'>
            <img className='object-cover w-full h-80 ' src="assets/image-hero-mobile.png" alt="" />
          </figure>

          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'> Make remote work</h1>
            <p className='text-center text-MiedumGray font-semibold p-5'>
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