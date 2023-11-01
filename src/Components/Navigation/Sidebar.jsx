import React from 'react'

function Sidebar() {
  return (
    <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="absolute flex-none right-0 lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="navbar-start  lg:w-1/12 lg:px-0 lg:mx-5 mt-2 flex lg:items-center lg:justify-center">
            <img className="w-18 h-6" src='/public/assets/logo.svg' />
        </div>
      <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li><a>Todo List</a></li>
            <li><a>Calendar</a></li>
            <li><a>Reminders</a></li>
            <li><a>Planning</a></li>
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
      <li><a>Career</a></li>
      <li><a>About</a></li>
    </ul>
      </div>
      <div className='navbar-end w-full'>
      <a className="btn hidden lg:flex">Login</a>
      <a className="btn hidden lg:flex">Register</a>
      </div>
    </div>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li tabIndex={0}>
        <details>
          <summary>Features</summary>
          <ul className="p-2">
            <li><a>Todo List</a></li>
            <li><a>Calendar</a></li>
            <li><a>Reminders</a></li>
            <li><a>Planning</a></li>
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
      <li><a>Career</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar