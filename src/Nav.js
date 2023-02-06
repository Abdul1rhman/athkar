import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div lang='ar' dir='rtl'>
        <nav>
            <h2>اذكاري</h2>
            <div className='Links'>
                <Link to="/athkar">الرئيسية</Link>
                
            </div>
            
        </nav>
    </div>
  )
}

export default Nav