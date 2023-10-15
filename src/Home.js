import React from 'react'
import axios from 'axios'
import Nav from "./Nav";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import BacktoTop from './BacktoTop';
import Fuse from 'fuse.js';

function Home() {
  const his = useHistory();

  const [caty, setCaty]=useState([])
  

  const [query, setQuery]=useState('')

  const fuse = new Fuse(caty,{
    keys: [
      'TITLE'
    ],
    threshold: 0.3,
  includeMatches: true,
  ignoreLocation: true, // for right-to-left text direction
  ignoreDiacritics: true // for handling diacritical marks
  })

  const results = fuse.search(query);
  const resList = query? results.map(result=>result.item):caty

  function handelSearch(query){
    
    setQuery(query)
  }
    
    const handeClick=(data,id)=>{
      his.push('/'+data+'/'+id)
    }

    useEffect(()=>{
      axios.get('//www.hisnmuslim.com/api/ar/husn_ar.json')
      .then(res=>{
        // console.log(res.data.العربية.sort(function(a, b){return a - b}))
        setCaty(res.data.العربية.filter(item=>item.ID !==81))
        
        // console.log(caty.slice(0, 3));
         
        
      })
    },[])
    
    
    
    
    
    return (
        <div className="App" dir="rtl" lang="ar">
        
        {/* <h2 className="topic">اذكار:</h2> */}
        <div className="adhker-cat" >
        
        <input type="text" className='search' value={query} onChange={e=>handelSearch(e.target.value)} placeholder={'بحث...'}/>

        { resList.length===0?<div style={{height:'1000px', backgroundColor:"inherit",position:"relative",textAlign:'center'}}><h1>جرب عبارة أخرى</h1></div> :resList.map(dkher =>(
            <div className="dhker" key={dkher.ID} onClick={()=>handeClick(dkher.TITLE,dkher.ID)}>
              <h3>{dkher.TITLE}</h3>
              
              <div className="arrow"><AiOutlineArrowLeft/></div>
            </div>
          ))}
          <BacktoTop/>
        
          {/* {cat.map(dkher =>(
            <div className="dhker" onClick={()=>handeClick(dkher.id)} key={dkher.id}>
              <h2>{dkher.title}</h2>
              <div className="arrow"><AiOutlineArrowLeft/></div>
            </div>
          ))} */}
          {/* <Maker data={cat}/> */}
  
        </div>
  
      </div>
  )
}

export default Home