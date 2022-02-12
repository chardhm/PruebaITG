import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const items = [
    {id: "1", name: "Vivair"},
    {id: "2", name: "Avianca"},
    {id: "3", name: "Aeromexico"},
    {id: "4", name: "Emirates Airline"},
]

const Navbar = () => {

  const [menuMobile, setMenuMobile] = useState(false);

  const menuItem = items.map((item) => (
    <Link to={`/${item.name}`} key={item.id} className="items"><li className='nav-item'>{item.name}</li></Link>
  ))

  return (
    <nav className='navbar'>
        <Link to="/">
         <img className='home' src="https://img.icons8.com/ios/50/ffffff/around-the-globe.png" width="50" alt=""/>
        </Link>

          <ul className={menuMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setMenuMobile(false)}>
            {menuItem}
          </ul>

        <button className='menuIcons' onClick={() => setMenuMobile(!menuMobile)} >
          {menuMobile ? <img src="https://img.icons8.com/material-rounded/50/ffffff/delete-sign.png" width='50' alt="" /> : <img src="https://img.icons8.com/ios-glyphs/50/ffffff/menu--v1.png" width='50' alt=""/>}
        </button>
    </nav>
  )
}

export default Navbar;
