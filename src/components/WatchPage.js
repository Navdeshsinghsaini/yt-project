import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import { useState } from 'react';
import { YOUTUBE_VIDEOS_API_RECOMMEND } from '../utils/constants';
import RecommedSection from './RecommedSection';
import { Link } from 'react-router-dom';

const WatchPage = () => {

  const [recommend , setrecommend] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API_RECOMMEND);
  const json = await data.json();
  setrecommend(json.items);
  // console.log(recommend);
  };
  // console.log(recommend);  

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
     
     
     
    return (
      <div className='flex max-[600px]:flex-col  max-[600px]:max-w-[340px] '>
         <div className='left-dection mt-3'>
     <iframe className=" rounded-2xl ml-5 max-[600px]:max-w-[320px] max-[600px]:max-h-[185px] " 
        width="720" height="425" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v") } 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>

          <div className='max-[600px]:hidden'> <CommentSection /> </div>

        </div>
        
       <div className="recommend m-2 p-2 w-[390px] border rounded-lg max-[600px]:max-w-[350px]  ">
               {recommend.map(vedio =>
                  ( 
                            <Link to={"/watch?v="+ vedio.id}><RecommedSection key={vedio.id} info={vedio}/></Link> 
                ))}
              
              
                <div className='min-[600px]:hidden max-[600px]:max-w-[350px]'>
                    <CommentSection />
            </div>

       </div> 

        </div>
  )
}

export default WatchPage