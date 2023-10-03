import React from 'react'

const RecommedSection = ({info}) => {
    console.log(info)
  return (
    <div className=" overflow-hidden flex m-1 p-1 my-3  bg-gray-300 border rounded-xl">
        <div className='img-div w-[200px] overflow-hidden m-1 '>
        <img className="rounded-xl " src={info?.snippet?.thumbnails?.medium?.url} alt='vedio-thumbnail' />
        </div>

        <div className='data-div w-[200px] left-10 m-1'>
        <h2 className=" font-bold  whitespace-nowrap overflow-hidden">{info?.snippet?.title}</h2>
           <hr />

          <p className="text-black font-semibold" > {info?.statistics?.viewCount} views </p> 
          <hr /> 
          <p className="text-black font-semibold">{info?.statistics?.commentCount} Comments </p>
        </div>
    </div>
  )
}

export default RecommedSection