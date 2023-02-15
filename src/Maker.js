import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';

function Maker({data , handelClick,text}) {
 

 
    return (
    <div className='adhker-cat1'>
        {data.map(dkher =>(
            <div className="dhker1" key={dkher.ID}>
              {/* {dkher.title && <h4>( {dkher.ARABIC_TEXT} )</h4>} */}
              <p style={{fontSize:text}}>{dkher.ARABIC_TEXT}</p>
              {/* {dkher.REPEAT===1?'':<p className='counter' onClick={()=>handelCount(dkher.ID)}>{dkher.REPEAT}</p>} */}
              <ReactAudioPlayer
                src={dkher.AUDIO}
                controls/>
            
            
             
              {/* {dkher.REPEAT===0 && <button className='done' >{dkher.REPEAT}</button>}
              {dkher.REPEAT !=0 &&dkher.REPEAT !=1 && <button onClick={()=>handelClick(dkher.ID)}>{dkher.REPEAT}</button>} */}
              
              
            </div>
          ))}
          
    </div>
  )
}

export default Maker