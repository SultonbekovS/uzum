import React from 'react'
import logo from '../../assets/images/img.png'
import kirish from '../../assets/icons/kirish.png'
function HeaderCenter() {
  return (
   <>
   <div className="wrapper">
    <div className="container">
    <div className="header-center">
        <img className='kirish_img' src={logo} alt="" />
        <button className='header_center_button1'>Katalog</button>
        <input type="text" className='search' placeholder='Mahsulotlar va turkumlar izlash' />
        <img src={kirish} alt=""/> 
        <a href="#">Kirish</a>
        <a href="#">Saralangan</a>
        <a href="#">Savat</a>
    </div>
    </div>
    </div>
   </>
  )
}

export default HeaderCenter