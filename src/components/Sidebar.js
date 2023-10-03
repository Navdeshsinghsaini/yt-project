import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen)  { return (
      <div className="p-5 shadow-lg w-[10%] h-[100vh] sticky top-0 max-[600px]:hidden ">
       
       <div className="border p-5 m-2 my-10 w-20 h-22 flex flex-col items-center rounded-2xl bg-gray-200 " >
         <Link to={"/"}>
          <HomeIcon  />
          <div>
          <h2 className=" font-bold" >Home</h2> </div>
         </Link>
       </div>
        
      <div className="border p-5 m-2 w-20 my-10 h-22 flex flex-col items-center rounded-2xl bg-gray-200  ">
          <LibraryMusicIcon />
          <div>
          <h2 className=" font-bold" >Music</h2> </div>
      </div>

      <div className="border p-5 m-2 flex w-20 my-10 h-22 flex-col items-center rounded-2xl bg-gray-200 ">
           <WhatshotIcon />
           <div>
           <h2 className="font-bold" >Trending</h2> </div>
      </div>
    </div>)
    }
  else{
  return (
    <div className="p-5 shadow-lg w-[15%] h-[100vh] sticky top-0 items-center max-[600px]:hidden ">
       
       <div className="border p-5 m-2 my-8 w-20 ml-8 h-22 flex items-center rounded-2xl bg-gray-200 " >
         <Link to={"/"}>
            
          <HomeIcon  /> 
          <div>
          <h2 className=" font-bold" >Home</h2> </div>
         </Link>
       </div>
        
         <hr />

      <div className="border p-5 m-2 w-20 my-8 h-22 ml-8 flex flex-col items-center rounded-2xl bg-gray-200  ">
          <LibraryMusicIcon />
          <div>
          <h2 className=" font-bold" >Music</h2> </div>
      </div>
      <hr />
      <div className="border p-5 m-2 flex w-20 my-8 h-22 ml-8 flex-col items-center rounded-2xl bg-gray-200 ">
           <WhatshotIcon />
           <div>
           <h2 className="font-bold" >Trending</h2> </div>
      </div>
    </div>
  )
  }
}

export default Sidebar