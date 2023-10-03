import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Vediocard from './Vediocard';
import { Link } from 'react-router-dom';

const VedioContainer = () => {

  const [vedios , setvedios] = useState([]);

  useEffect(() => {
     getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json(); 
    setvedios(json.items);
    
  };

  // console.log(vedios);

  return (
    <div className='flex flex-wrap items-center  '>
      {vedios.map(vedio =>
         ( 
         <Link to={"/watch?v="+ vedio.id}><Vediocard key={vedio.id} info={vedio}/></Link> 
         ))}
    

    </div>
  )
}

export default VedioContainer