const GOOGLE_API_KEY = "AIzaSyDo_P9o8BJU93ZIvj_XQ1vSRdWFwsnjArU"; 
//  AIzaSyDXBlbeQ-se9L7yrX80ZWbxb5axIOgDDAM

// const RECOMMEND_API_KEY = "AIzaSyBKxoqn8GqLrIi504HrCcNscm439ZbQqrk";
  
export const YOUTUBE_VIDEOS_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
GOOGLE_API_KEY;

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDXBlbeQ-se9L7yrX80ZWbxb5axIOgDDAM

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEOS_API_RECOMMEND =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key="+
GOOGLE_API_KEY;   