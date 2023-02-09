import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
function BacktoTop() {
    const [bot, setBot]= useState(false)
    const element = <FontAwesomeIcon icon={faArrowUp} />
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>1000){
                setBot(true) 
            }
            else setBot(false)
        })
    },[]) 

    const handel=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
      
    return ( 
      <div >
        {bot&&<div className='Back' onClick={handel}>{element}</div>}
  
      </div>
    )
  }
  
  export default BacktoTop