import React from 'react'

const Vediocard = ({info}) => {
    // const { snippet, statistics } = info;
    // const { channelTitle, title, thumbnails } = snippet;
  

    return (  
   
    <div className="p-2 m-2 max-w-[320px] min-h-[100px] max-h-[350px] shadow-lg cursor-pointer max-[600px]:max-w-[320px] max-[600px]:min-w-[320px]" >
        <img className="rounded-xl" src={info?.snippet?.thumbnails?.medium?.url} alt='vedio-thumbnail' />
        <ul>
            <li className=" font-bold py-1 px-1 whitespace-nowrap overflow-hidden">{info?.snippet?.title}</li>
            <li className="px-2 font-semibold">{info?.snippet?.channelTitle}</li>
        {/* <div className="flex"> */}
          <ul className="flex">
        <li className="mx-1 text-gray-600 font-semibold">{info?.statistics?.viewCount} views</li> 
            <li>-</li>
            <li className="mx-1 text-gray-600 font-semibold">{info?.statistics?.commentCount} Comments </li>
          </ul>
        {/* </div> */}
        </ul>
    </div>
  )
}

export default Vediocard