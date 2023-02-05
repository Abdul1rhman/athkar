import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios'
function Adhan() {
 const [pray, setPray]=useState([]);
  let title=''
  
  useEffect(()=>{
    axios.get('http://www.hisnmuslim.com/api/ar/husn_ar.json')
    .then(res=> {
      let url =res.data.العربية
       title=res.data.العربية[0].TITLE
      // console.log(title)
      
      // console.log(url)
      // setPray(res.data)
      

      // fetch("http://www.hisnmuslim.com/api/ar/27.json").then(res=>console.log(res))
      // .then(res=>console.log(res))
      // setPray(url)
      // console.log(url)
    }).then(()=>{
      
      fetch('http://www.hisnmuslim.com/api/ar/27.json')
      .then(data=>{
        if(!data.ok){
          throw Error('Couldn\'t connect to BlogsLIST server');
        }
        return data.json();
      })
      .then(ress=> {
        let url=ress['أذكار الصباح والمساء']
        // let url =ress?.data?.['أذكار الصباح والمساء']
        console.log(url)

        setPray(url)
        // console.log(pray)

        
        
        
        
  
        // fetch("http://www.hisnmuslim.com/api/ar/27.json").then(res=>console.log(res))
        // .then(res=>console.log(res))
        // setPray(url)
        // console.log(url)
      })

      
    }
    
    )
    
  },[])
    
      
    return (
    
    
    <div >
    
    
        <div lang='ar' dir='rtl' className='adhker-cat1'>
           {pray.map(data=>(
            <div className='dhker1' key={data.ID}>
            
              <p>{data.ARABIC_TEXT}</p>
              
              <ReactAudioPlayer
                src={data.AUDIO}
                controls/>
            
            </div>
           ))}
          
             
              
          

            

         
          
        </div>

    </div>
  )
}

export default Adhan