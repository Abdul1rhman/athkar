import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';

function Maker({data , handelClick,text}) {
  
  // const [list2, setList2] = useState([]);

  // useEffect(() => {
  //   // Map over list1 and create a new array with different content in each object
  //   const newList = data.map(obj => ({
  //     co: 0,
      
  //   }));

  //   // Set the state of list2 to the new array
  //   setList2(newList);
  // }, [data]);

 const [count, setCount]=useState([
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
  {"co":0},
 ])
const handleIncrement=(index,limit)=>{
  const updatedItems = [...count];
  if(updatedItems[index].co<limit){
    updatedItems[index].co += 1;
    setCount(updatedItems);
  }
    
}

    return (
    <div className='adhker-cat1'>
        {data.map((dkher, index) =>(
            <div className={`dhker1 ${count[index].co===dkher.REPEAT? "done":''}`} key={dkher.ID} onClick={() => handleIncrement(index,dkher.REPEAT)}>
              {/* {dkher.title && <h4>( {dkher.ARABIC_TEXT} )</h4>} */}
              <p style={{fontSize:text}}>{dkher.ARABIC_TEXT}</p>
              {dkher.REPEAT===1?'':<p className='counter' >{count[index].co}</p>}
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