import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  const [click, setClick] = useState();//changes state 
  const handleClick = () => setClick(!click);
  const closeMobileView = () => setClick(false);

//<i className={click ? 'fas fa-times' : 'fas fa-bars'} />  this line may need swapped or refactored for menu tab icon 
  return (
    <>
      <navBar className='navbar'>
        <div className= 'navbar-container'>
        </div>
        <div className= 'menu-bar' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
        </div>
        <ul className={click ? 'nav=menu active' : 'nav-menu'}>
          <li className='nav-links' onClick={closeMobileView}>
           <Link to='/' className='nav-links' onClick={closeMobileView}>
            Home
           </Link>
          </li>
          <li className='nav-items' onClick={closeMobileView}>
            <Link to='/services' className='nav-links' onClick={closeMobileView}>
            Services
            </Link>
          </li>
          <li className='nav-items' onClick={closeMobileView}>
            <Link to='/products' className='nav-links' onClick={closeMobileView}>
            Products
            </Link>
          </li>
          <li className='nav-items' onClick={closeMobileView}>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileView}>
            Sign Up
            </Link>
          </li>
        </ul>
        
      </navBar>
    </>
  )
}

export default NavBar
