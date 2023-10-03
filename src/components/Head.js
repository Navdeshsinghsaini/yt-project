// import React, { useEffect, useState } from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {  
  // const [SearchQuery , setSearchQuery] = useState("");
  // const [Suggestions , setSuggestions] = useState([]);
  // const [showSuggestion , setshowSuggestion] = useState(false);
  // console.log(SearchQuery);

  // useEffect(() =>{ 
  //   const timer = setTimeout(() => getSearchSuggestions(), 200 );    
  //   return () => {
  //     clearTimeout(timer);
  //   }
   
  // },[SearchQuery]);

  // const getSearchSuggestions = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API+SearchQuery)
  //   const json = await data.json()
  //   // console.log(json[1])
  //   setSuggestions(json[1])
  // }

   const dispatch = useDispatch();

   const toggleMenuHandler = () => {
      
    dispatch(toggleMenu());
   }


  return (
    <div className=' grid grid-flow-col p-3 m-2 shadow-lg '>
        <div className='left-div flex col-span-1  '>

            <img   
            onClick={() => toggleMenuHandler()}
            className='h-8 max-[600px]:hidden ' alt='menu' 
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX/
            //8AAADp6ent7e0JCQk/Pz8PDw+Pj4+Hh4fDw8P7+/vV1dXg4OAZGRltbW3c3
            NwgICBgYGBnZ2ewsLCkpKRPT080NDR1dXVFRUXAwMB/f3/k5OS6urp5eXkpKS
            mzs7OMjIyXl5fPz89aWlquczz2AAABoUlEQVR4nO3d7U4aQRSA4ZWvygoiAoK
            2tS69/3usGH8725xNzrg8zxWcN8N+kMxkmwYAAAAAAAAAAAAA/tO0Uu0wee3+8L
            Co09PxboDA1cNNzW7jgdkJJcdo4Sm7oOg5FrjMnr/sFCt8yZ6/h5+hwm32+D3E7
            qfjLxz/r3T8d5pv8LT4FSwc/xO/Wc2yG770Oxz4bj9fz6q0eH0c4s37Yjqp00D/
            ngAAAAAAAAAAgKuy6Q7zKp3u/wyxK6q9z96c95VZcKf+JfApO6JgFy2segU/rGK
            Bd9nzl21jhW/Z8/cwCRU+Zo/fwyZU+Dd7/B7OocJj9vg9xG41u+zxy15jT/12kR
            1Q1IUCm+Y5O6BkHgys/nc6n4YLm03F59fW3TAHEtrzsk6xU2sAAAAAAAAAAMB1as
            /djzrthtkUta/5AxfbATbu1X4cIbbL+12XXVAUXMVJ9vxlL2Nfwpt1bBFrvwovnLe49jXssscvC16H3+BeGv06QpcdUB
            R+q6n9Shzg+w/7mg8GHWKHDz+1y+62Sm+78EspAAAAAAAAAAAAAIzOP09WOq3tUN5KAAAAAElFTkSuQmCC' />
        
       <a href="/">     <img className='h-8 mx-2 max-[600px]:mr-12 max-[600px]:ml-3' alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/
            images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU' />
      </a> 
        </div>

        <div className="middle-div col-span-10 self-center max-[600px]:ml-2 ">
            <div>
              <input 
              type='text'
              className="w-1/2 border border-gray-400 py-1  rounded-l-full max-[600px]:ml-4 " 
              // value={SearchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              // onFocus={() => setshowSuggestion(true)}
              // onBlur={() => setshowSuggestion(false)}
              />
              
              <button className="border border-gray-400 py-[1] px-2 mx-3 rounded-full bg-gray-200 hover:cursor-pointer  "> <SearchSharpIcon/> </button>
           </div>

          
          {/* { showSuggestion && (
           <div className="fixed bg-white w-[30rem] rounded-lg border  ">
               <ul>
                   {Suggestions.map((s) => (
                    <li  className="py-1 px-1 shadow-sm hover:bg-gray-100 cursor-pointer border-gray-200" >{s}</li>
                   ) )}
               </ul>
           </div> */}
          {/* ) } */}


        </div>

        <div className='right-div col-span-1'>
           <img  className='h-8 max-[600px]:ml-2 max-[600px]:mr-2' alt="user-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHw
           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"/>
           
       </div>
    </div>
  )
}

export default Head;