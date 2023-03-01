import React, { useEffect, useState } from 'react'
import axios from "axios"

const CharacterCard = () => {

    const [data, setData] = useState([]);




const CollectData = async ()=>{
    const url = 'http://gateway.marvel.com/v1/public/characters?apikey=419f568b36734b8556c03feaa8ef501d&ts=1&hash=89c8ee3f8f95c4b321ba290eda70b763';
     const res = await axios.get(url)
    // console.log(res);
     setData(res.data.data.results);

     
     
    }
    
    useEffect(()=>{
      CollectData();
    },[])

// http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:grid-rows-4 md:grid-rows-3 grid-rows-2 gap-2 mt-5'>
      {/* <h1 className='text-2xl font-bold text-white'>Characters</h1> */}
      {data.map((result)=>{
        return <div className='lg:w-[20vw] flex flex-col justify-center '  key={result.id}>
            <h1 className='bg-black h-10 text-white items-center text-center font-bold text-xl'>{result.name}</h1>
            <img className='border-8 border-black' src={result.thumbnail.path+'/landscape_amazing.jpg'}/>
            {/* <p>{result.urls.urls[0]}</p> */}
            </div>
      })}

    </div>
    
  )
}

export default CharacterCard
