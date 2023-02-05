import { useEffect,useState } from "react"
import axios from 'axios'

const useFetch = (t,lin)=>{
    
    
    
  const [data, setData]=useState([]);
  const [title, setTitle]=useState('');
  
  
  useEffect(()=>{
    fetch('https://www.hisnmuslim.com/api/ar/'+lin+'.json')
      .then(data=>{
        if(!data.ok){
          throw Error('Couldn\'t connect to BlogsLIST server');
        }
        return data.json();
      })
      .then(ress=> {
        let url=ress[t]
        // let url =ress?.data?.['أذكار الصباح والمساء']
        // console.log(url)

        setData(url)
        // console.log(pray)

        
        
        
        
  
        // fetch("http://www.hisnmuslim.com/api/ar/27.json").then(res=>console.log(res))
        // .then(res=>console.log(res))
        // setPray(url)
        // console.log(url)
      })
  },[])

      return{data,title,lin};
}

export default useFetch;