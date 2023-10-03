import React from 'react'

const commentsData = [
  {
    name : "Aditya",
    text : "I’ve never witnessed such awesome editing as this one." 
  },

  {
    name : "Mitali",
    text : "When watching your videos, I accidentally hit like and never knew when."
  },

  {
    name : "Price",
    text : "Love this video, I think I’ve watched it four times." ,
  },

  {
    name : "Babu Rao",
    text : "You’re working so hard, may all your wishes come true." ,
  },

  {
    name : "Raaju",
    text : "Officially the first viewer of any video on this channel."
  },

  {
    name : "Aditya",
    text : "I’ve never witnessed such awesome editing as this one." 
  },

  {
    name : "Mitali",
    text : "When watching your videos, I accidentally hit like and never knew when."
  },

  {
    name : "Price",
    text : "Love this video, I think I’ve watched it four times." ,
  },

  {
    name : "Babu Rao",
    text : "You’re working so hard, may all your wishes come true." ,
  },

  {
    name : "Raaju",
    text : "Officially the first viewer of any video on this channel."
  },

];

const Comment = ({data}) => {
    const {name , text} = data;
  return (
  <div className="flex shadow-lg bg-gray-200 p-2  rounded-xl my-5 " >
     <img className="w-10 h-10 " alt='comment-user' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
          <div className="px-3 ">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
          </div>
  </div>
   )
}

const CommentsList = ({comments}) => {
  return comments.map((comment , index) => <Comment key={index} data={comment} />);
};

const CommentSection = () => {
  return (
    <div className="m-2 p-2"> 
        <h1 className="text-xl font-bold" >Comments:</h1>
         {/* <Comment data={commentsData[0]}/> */}
         <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentSection
