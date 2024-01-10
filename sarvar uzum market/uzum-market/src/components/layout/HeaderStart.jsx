import React from 'react'
import img from '../../assets/images/img.png'

function HeaderStart() {
  return (
    <>
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="header-start">
            <p className='word1'>Shahar: <a href="#">Toshkent</a></p>
            <p className='word2'>Topshirish punktlari</p>
            <p className='word3'>Buyurtamingizni 1kunda bepul yetkazib beramiz</p>
            <a href="#" className='word4'>Savool-javoblar</a>
            <a href="#" className='word5'>Buyurtmalarim</a>
            <select className='language'>
              <option value="">O'zbekcha</option>
              <option value="">Русский</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderStart