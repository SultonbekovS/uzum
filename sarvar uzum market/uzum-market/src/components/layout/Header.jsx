import React from 'react'
import HeaderStart from './HeaderStart'
import HeaderCenter from './HeaderCenter'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <div className='header'>
        <HeaderStart/>
        <HeaderCenter/>
        <HeaderBottom/>

    </div>
  )
}

export default Header