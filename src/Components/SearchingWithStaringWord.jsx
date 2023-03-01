import React,{useState,useEffect} from 'react'
import axios from 'axios';

const SearchingWithStaringWord = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("sp");
    const [haveData, setHaveData] = useState(0);




    const CollectData = async ()=>{
        const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&apikey=419f568b36734b8556c03feaa8ef501d&ts=1&hash=89c8ee3f8f95c4b321ba290eda70b763`;
         const res = await axios.get(url)
        // console.log(res);
         setData(res.data.data.results);
         setHaveData(res.data.data.count);
    
         
         
        }
        
        useEffect(()=>{
          CollectData();
          const searchingArea = document.getElementById("searchingPoint");
        searchingArea.addEventListener("keypress",(keyboard)=>{
                      if(keyboard.key==="Enter"){
                        const val = searchingArea.value;
                        const valUpdate = val.charAt(0).toUpperCase() + val.slice(1);
                          setSearch(valUpdate);    
                      }})

        },[search])
    
    // http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg
    
      return (
        <div>
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("a")}}>A</button>   
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("b")}}>B</button>
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("c")}}>C</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("d")}}>D</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("e")}}>E</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("f")}}>F</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("g")}}>G</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("h")}}>H</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("i")}}>I</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("j")}}>J</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("k")}}>K</button>  
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("l")}}>L</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("m")}}>M</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("n")}}>N</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("o")}}>O</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("p")}}>P</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("q")}}>Q</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("r")}}>R</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("s")}}>S</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("t")}}>T</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("u")}}>U</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("v")}}>V</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("w")}}>W</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("x")}}>X</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("y")}}>Y</button> 
         <button className='bg-white h-5 w-5 mr-1' onClick={()=>{setSearch("z")}}>Z</button> 
          <br/>
        {/* <div className='flex flex-col'> */}
        {/* <h1 className='mt-10 font-extrabold text-md text-white'>Write a alphabet to search your hero</h1> */}
        <input id='searchingPoint' type="text"  className='h-10 mt-5 lg:w-[20vw] w-[70vw] mb-5 px-2' placeholder='search your hero...' />

        {haveData > 0 ? <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:grid-rows-4 md:grid-rows-3 grid-rows-2 gap-2 mt-5 '> {data.map((result)=>{
            return <div className='lg:w-[20vw] flex flex-col justify-center hover:brightness-150 -hue-rotate-180 hover:-hue-rotate-0  transition ease-linear '  key={result.id}>
                <h1 className='bg-black h-10 text-white  items-center text-center font-bold text-xl'>{result.name}</h1>
                <img className='border-8 border-black' src={result.thumbnail.path+'/landscape_amazing.jpg'}/>
                {/* <p>{result.urls.urls[0]}</p> */}
                </div>
          })}  </div> : <h1 className='bg-black text-white text-4xl p-5'>Result not found</h1> }
        {/* </div> */}
        
          {/* <h1 className='text-2xl font-bold text-white'>Characters</h1> */}
           
        </div>)
      
  
}

export default SearchingWithStaringWord
