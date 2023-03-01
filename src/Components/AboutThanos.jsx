import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AboutThanos = () => {
    const [inputValue, setInputValue] = useState("hulk");
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [imgUrl , setImgUrl] = useState("");
      const [dataLength, setDataLength] = useState(1);
      const [error, setError] = useState();


      useEffect(()=>{
        const searchingArea = document.getElementById("searchingPoint");
        searchingArea.addEventListener("keypress",(keyboard)=>{
                      if(keyboard.key==="Enter"){
                        const val = searchingArea.value;
                        const valUpdate = val.charAt(0).toUpperCase() + val.slice(1);
                          setInputValue(valUpdate);    
                      }})
      },[])


    const ThanosData = async ()=>{
        try{
        const url=`http://gateway.marvel.com/v1/public/characters?name=${inputValue}&apikey=419f568b36734b8556c03feaa8ef501d&ts=1&hash=89c8ee3f8f95c4b321ba290eda70b763`;
        const res = await axios.get(url);
        console.log(res);
       if(res.data.data.count>0) {
        setDataLength(res.data.data.count);
        setName(res.data.data.results[0].name);
        setDescription(res.data.data.results[0].description);
        setImgUrl(res.data.data.results[0].thumbnail.path);
    }
    else{
        setName("Invalid or Not Found in server");
        setDescription("not found");
        setImgUrl("not found");
    }
        console.log(dataLength);

    }catch(error){
       console.log(error.message); 
    }
        // console.log(error);
        // console.log(inputValue);
    }

    useEffect(()=>{
        ThanosData();
    },[inputValue])
  return (

    <div>
        <input id='searchingPoint' type="text"  className='h-10 w-[20vw] mt-[10vh] mb-5 px-2' placeholder='search...' />
    <div className='lg:w-[20vw] flex flex-col justify-center shadow-2xl brightness-125 ' >
            <h1 className='bg-black h-10 text-white items-center text-center font-bold text-xl'>{name}</h1>
            <img className='border-8 border-black' src={imgUrl+'/landscape_amazing.jpg'}/>
            <p className='border-8 bg-black text-white border-black'>{description === "" ? "no description has been found" : description}</p>
            {/* <p>{result.urls.urls[0]}</p> */}
            </div>
        
    </div>
  )
}

export default AboutThanos
