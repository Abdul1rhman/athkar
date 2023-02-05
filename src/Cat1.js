import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios'
import useFetch from './useFeatch';
import Maker from './Maker';
import { useParams } from 'react-router-dom';
import BacktoTop from './BacktoTop';
function Cat1() {
  const {title,id} = useParams()
  const[arr, setArr]=useState([])
  const[text, seText]=useState(20)

  const {data,titlee,lin} = useFetch(title,id)
    
  // const handelClick=(id)=>{
  //   data.map(dat=>{
      
  //   })
  // }
  const handeText=()=>{
    seText(text+2)
    
  }
  const handeTextd=()=>{
    seText(text-2)
    
  }


  return ( 
    <div >
        
        <div lang='ar' dir='rtl' className='adhker-cat1'>
        <div className='text-cont'>
        <strong>الخط</strong>
        <div className='button-55' onClick={handeText}><p>+</p></div>
        <div className='button-55' onClick={handeTextd}><p>-</p></div>
        </div>
        
           <h2 className='head'>{title}</h2>
           
           <Maker data={data} text={text}/>
        </div>
        <BacktoTop/>
    </div>
  )
}

export default Cat1