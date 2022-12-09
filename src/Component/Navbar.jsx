import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light fs-3" href="/">MyWeatherApp</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className='navbar-nav me-auto mb-2 mb-lg-0'></div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
