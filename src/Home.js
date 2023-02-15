import React from 'react'
import axios from 'axios'
import Nav from "./Nav";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import BacktoTop from './BacktoTop';


function Home() {
  const his = useHistory();

  const [caty, setCaty]=useState([])
  const [search, setSearch]=useState('')
    
    const handeClick=(data,id)=>{
      his.push('/'+data+'/'+id)
    }

    useEffect(()=>{
      axios.get('//www.hisnmuslim.com/api/ar/husn_ar.json')
      .then(res=>{
        // console.log(res.data.العربية.sort(function(a, b){return a - b}))
        setCaty(res.data.العربية.filter(item=>item.TITLE !=='الدعاء قبل إتيان الزوجة'))
        
        // console.log(caty.slice(0, 3));
         
        
      })
    },[])
    
    
    
    
    
    return (
        <div className="App" dir="rtl" lang="ar">
        
        {/* <h2 className="topic">اذكار:</h2> */}
        <div className="adhker-cat" >
        
        <input type="text" className='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={'بحث...'}/>

        {caty.filter(item =>{
          return search===""?item 
          : item.TITLE.includes(search)
          

        }).map(dkher =>(
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