import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
function BacktoTop() {
    const [bot, setBot]= useState(false)
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
        {bot&&<button className='Back' onClick={handel}> <AiOutlineArrowUp/> </button>}
  
      </div>
    )
  }
  
  export default BacktoTop