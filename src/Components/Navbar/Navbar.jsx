import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] =useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPERS</p>
        </div>
        <ul className='nav-menu'>
           <li onClick={()=>{setMenu("shop")}}><Link to ='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("men")}}><Link to ='/men'>MEN</Link>{menu==="men"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("women")}}> <Link to ='/women'>WOMEN</Link>{menu==="women"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("kids")}}><Link to ='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>LOGIN</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
