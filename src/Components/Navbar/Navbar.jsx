import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'

const Navbar = () => {
  const [menu, setMenu] =useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPERS</p>
        </div>
        <ul className='nav-menu'>
           <li onClick={()=>{setMenu("shop")}}>SHOP{menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("men")}}>MEN{menu==="men"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("women")}}>WOMEN{menu==="women"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("kids")}}>KIDS{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>LOGIN</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
