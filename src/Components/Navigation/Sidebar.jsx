import React from 'react'

function Sidebar() {
  return (
    <div className="drawer drawer-end font-Epilogue">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-AlmostWhite font-semibold text-xs text-MiedumGray">
      <div className="absolute flex-none right-0 lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="navbar-start  lg:w-1/12 lg:px-0 lg:mx-5 mt-2 flex lg:items-center lg:justify-center">
            <img className="w-18 h-6" src='/src/assets/logo.svg' />
        </div>
      <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal  px-1">
      <li className='' tabIndex={0}>
        <details>
          <summary className='hover:text-AlmostBlack hover:bg-AlmostWhite'>Features</summary>
          <ul className="p-2 w-40">
          <li>
              <div>
                <img src={'/src/assets/icon-todo.svg'} alt="Icon" className="h-4 w-4" />
                Todo List
              </div>
            </li>
            <li>
              <div>
                <img src={'/src/assets/icon-calendar.svg'} alt="Icon" className="h-4 w-4" />
                Calendar
              </div>
            </li>
            <li>
              <div>
                <img src={'/src/assets/icon-reminders.svg'} alt="Icon" className="h-4 w-4" />
                Reminders
              </div>
            </li>
            <li>
              <div>
                <img src={'/src/assets/icon-planning.svg'} alt="Icon" className="h-4 w-4" />
                Planning
              </div>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='hover:text-AlmostBlack hover:bg-AlmostWhite active:bg-AlmostWhite'>Company</summary>
          <ul className="p-2 ">
            <li><a>History</a></li>
            <li><a>Our team</a></li>
            <li><a>Blog</a></li>
          </ul>
        </details>
      </li>
      <li><a className='hover:text-AlmostBlack hover:bg-AlmostWhite'>Career</a></li>
      <li><a className='hover:text-AlmostBlack hover:bg-AlmostWhite'>About</a></li>
    </ul>
      </div>
      <div className='navbar-end w-full flex gap-3  '>
      <button className="btn btn-sm bg-AlmostWhite text-MiedumGray  hidden lg:flex text-sm normal-case">Login</button>
      <button className="btn btn-sm hidden lg:flex  bg-AlmostWhite btn-outline p-0  text-sm px-3 text-MiedumGray  normal-case">Register</button>
      </div>
    </div>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 py-16 w-64 font-semibold text-base text-MiedumGray min-h-full bg-AlmostWhite">
      {/* Sidebar content here */}
      <li tabIndex={0}>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li>
              <div>
                <img src={'/src/assets/icon-todo.svg'} alt="Icon" className="h-4 w-4" />
                Todo List
              </div>
            </li>
            <li>
              <div>
                <img src={'/src/assets/icon-calendar.svg'} alt="Icon" className="h-4 w-4" />
                Calendar
              </div>
            </li>
            <li>
              <div>
                <img src={'/src/assets/icon-reminders.svg'} alt="Icon" className="h-4 w-4" />
                Reminders
              </div>
            </li>
            <li>
              <div>
                <img src={'/src/assets/icon-planning.svg'} alt="Icon" className="h-4 w-4" />
                Planning
              </div>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Company</summary>
          <ul className="p-2">
            <li><a>History</a></li>
            <li><a>Our team</a></li>
            <li><a>Blog</a></li>
          </ul>
        </details>
      </li>
      <li><a>Careers</a></li>
      <li><a>About</a></li>
      <div className='flex flex-col w-full mt-10'>
      <button className="btn  bg-AlmostWhite text-MiedumGray  lg:flex text-sm normal-case">Login</button>
      <button className="btn lg:flex  bg-AlmostWhite btn-outline p-0  text-sm px-3 text-MiedumGray  normal-case">Register</button>
      
      </div>
     
    </ul>
    
  </div>
</div>
  )
}

export default Sidebar