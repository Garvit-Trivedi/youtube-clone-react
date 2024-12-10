// import "./mainbody.css";
// import React, {useState, useEffect} from "react";

// function MainBody() {

//   const [videos, setVideos] = useState([]);
//   const API_KEY = 'AIzaSyBJFZXxGmdIhQgIMlvOwkWTLZfX5e-d4yM'; // Replace with your API key
//   const SEARCH_QUERY = 'Coke Studio';
//   // const [videos,setVideos] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:3000/videos")
//     .then(res => res.json())
//       .then(videos => {
        
//         setVideos(videos);
//       })
//       .catch((error) => console.error(error));
//   }, []);


//   const [head,setHead] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:3000/head")
//     .then(res => res.json())
//       .then(head => {
     
//         setHead(head);
//       })
//       .catch((error) => console.error(error));
//   }, []);
//   return (
//     <>
//       <section className="mainbody">
//         <div className="header">
//         <div className="search-container">
//           <div className="input-item">
//             <input type="text" name="search" id="search" placeholder="Search" />
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//               alt=""
//             />
//           </div>
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//             alt=""
//           />
//           <div className="option">
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//               alt=""
//             />
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//               alt=""
//             />
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//               alt=""
//             />
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="hl"></div>
//         <div className="yt-recent">
//           <div className="yt-recent-container">
//             {head.map((op) => (
//               <div key={op.id} className="yt-recent-item">
//                 <p>{op.title}</p>
//               </div>
//             ))}
//           </div>
//           <div className="lt-arr">
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="hl"></div>
//         </div>
//         <div className="main-container">
//           {videos.map((con) => (
//             <div key={con.id} className="main-item">
//               <img src={con.thn} alt="" />
//               <div className={con.class}>
//                 <img src={con.profile} alt="" />
//                 <p>{con.title}</p>
//               </div>
//               <div className={con.class2}>
//                 <div className="Name">
//                   <p>{con.owner}</p>
//                   <img
//                     className={con.verified}
//                     src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
//                     alt=""
//                   />
//                 </div>
//                 <div className={con.class3}>
//                   <div className="veiw">
//                     <p>{con.veiw} views</p>
//                   </div>
//                   <div className="dot"></div>
//                   <div className="veiw">
//                     <p>{con.time} ago</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default MainBody;


// //////////////////////////////////////////////////////////////////////////////////////1.

// import "./mainbody.css";
// import React, {useState, useEffect} from "react";

// function Main() {
//     const [videos, setVideos] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchVideos = async () => {
//             const API_KEY = 'AIzaSyBJFZXxGmdIhQgIMlvOwkWTLZfX5e-d4yM'; // Replace with your API key
//             const searchQuery = 'travel vlog'; // Replace with your desired search query
//             const maxResults = 10;

//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResults}&key=${API_KEY}`
//                 );

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch videos');
//                 }

//                 const data = await response.json();

//                 // Transform API response to match your existing format
//                 const transformedVideos = data.items.map((item) => ({
//                     title: item.snippet.title,
//                     channel: item.snippet.channelTitle,
//                     views: 'N/A', // YouTube API v3 does not provide views in the search endpoint; fetch details via videos.list if needed
//                     date: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                     thumbnail: item.snippet.thumbnails.medium.url,
//                 }));

//                 setVideos(transformedVideos);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchVideos();
//     }, []);

//     if (loading) {
//         return <div>Loading videos...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="all">
//             <div className="main-content">
//                 <div className="row">
//                     {videos.map((video, index) => (
//                         <div className="video" key={index}>
//                             <div className="photo-container">
//                                 <img 
//                                     src={video.thumbnail} 
//                                     alt="Video Thumbnail" 
//                                     onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
//                                 />
//                             </div>
//                             <div className="cpy">
//                                 <div className="title">{video.title}</div>
//                                 <div className="channel">{video.channel}</div>
//                                 <div className="cpy3">
//                                     <div className="views">{video.views}</div>
//                                     <div className="date">{video.date}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Main;

///////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import "./mainbody.css";
// function MainBody() {
//   const [videos, setVideos] = useState([]);
//   const [head, setHead] = useState([
//     { id: 1, title: "All" },
//     { id: 2, title: "Coke Studio" },
//     { id: 3, title: "UK" },
//     { id: 4, title: "Case Study" },
//     { id: 5, title: "Music" },
//     { id: 6, title: "Bnagla Lofi" },
//     { id: 7, title: "Tour" },
//     { id: 8, title: "Saintmartin" },
//     { id: 9, title: "Tech" },
//     { id: 10, title: "Iphone 13" },
//     { id: 10, title: "User Interface Design" },
//     { id: 11, title: "Computer" },
//   ]); // Mock categories
//   const API_KEY = "AIzaSyBJFZXxGmdIhQgIMlvOwkWTLZfX5e-d4yM"; // Replace with your YouTube Data API key
//   const SEARCH_QUERY = "codinggita "; 

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${SEARCH_QUERY}&key=${API_KEY}`
//         );
//         const data = await response.json();
//         const formattedVideos = data.items.map((item) => ({
//           id: item.id.videoId || item.id.channelId,
//           thn: item.snippet.thumbnails.medium.url,
//           profile: item.snippet.thumbnails.default.url,
//           title: item.snippet.title,
//           owner: item.snippet.channelTitle,
//           time: "1 day", // Placeholder for video publish time
//           veiw: "10K", // Placeholder for views
//         }));
//         setVideos(formattedVideos);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <>
//       <section className="mainbody">
//         <div className="header">
//           <div className="search-container">
//             <div className="input-item">
//               <input type="text" name="search" id="search" placeholder="Search" />
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                
//                 alt=""
//               />
//             </div>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
//               alt=""
//             />
//             <div className="option">
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
//                 alt=""
//               />
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
//                 alt=""
//               />
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
//                 alt=""
//               />
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="hl"></div>
//           <div className="yt-recent">
//             <div className="yt-recent-container">
//               {head.map((op) => (
//                 <div key={op.id} className="yt-recent-item">
//                   <p>{op.title}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="lt-arr">
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="hl"></div>
//         </div>
//         <div className="main-container">
//           {videos.map((con) => (
//             <div key={con.id} className="main-item">
//               <img src={con.thn} alt={con.title} />
//               <div className="details">
//                 <img src={con.profile} alt={con.owner} />
//                 <p>{con.title}</p>
//               </div>
//               <div className="info">
//                 <div className="name">
//                   <p>{con.owner}</p>
//                   <img
//                     className="verified"
//                     src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
//                     alt=""
//                   />
//                 </div>
//                 <div className="stats">
//                   <div className="views">
//                     <p>{con.veiw} views</p>
//                   </div>
//                   <div className="dot"></div>
//                   <div className="time">
//                     <p>{con.time} ago</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default MainBody;


////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import "./mainbody.css";

function MainBody() {
  const [videos, setVideos] = useState([]);
  const [head, setHead] = useState([
    { id: 1, title: "All" },
    { id: 2, title: "Coke Studio" },
    { id: 3, title: "UK" },
    { id: 4, title: "Case Study" },
    { id: 5, title: "Music" },
    { id: 6, title: "Bnagla Lofi" },
    { id: 7, title: "Tour" },
    { id: 8, title: "Saintmartin" },
    { id: 9, title: "Tech" },
    { id: 10, title: "Iphone 13" },
    { id: 11, title: "User Interface Design" },
    { id: 12, title: "Computer" },
  ]); // Mock categories
  const [searchQuery, setSearchQuery] = useState("Coke Studio"); // Default search query
  const API_KEY = "AIzaSyBJFZXxGmdIhQgIMlvOwkWTLZfX5e-d4yM"; // Replace with your YouTube Data API key

  const fetchVideos = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
      );
      const data = await response.json();
      const formattedVideos = data.items.map((item) => ({
        id: item.id.videoId || item.id.channelId,
        thn: item.snippet.thumbnails.medium.url,
        profile: item.snippet.thumbnails.default.url,
        title: item.snippet.title,
        owner: item.snippet.channelTitle,
        time: "1 day", // Placeholder for video publish time
        veiw: "10K", // Placeholder for views
      }));
      setVideos(formattedVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos(searchQuery); // Fetch videos for the initial query
  }, [searchQuery]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      fetchVideos(searchQuery); // Fetch videos on pressing Enter
    }
  };

  return (
    <>
      <section className="mainbody">
        {/* Header Section */}
        <div className="header">
          <div className="search-container">
            <div className="input-item">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <button onClick={() => fetchVideos(searchQuery)}>
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                  alt="Search"
                />
              </button>
            </div>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
              alt=""
            />
            <div className="option">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
                alt=""
              />
            </div>
          </div>
          <div className="hl"></div>
          {/* Categories */}
          <div className="yt-recent">
            <div className="yt-recent-container">
              {head.map((op) => (
                <div
                  key={op.id}
                  className="yt-recent-item"
                  onClick={() => setSearchQuery(op.title)}
                >
                  <p>{op.title}</p>
                </div>
              ))}
            </div>
            <div className="lt-arr">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
                alt=""
              />
            </div>
          </div>
          <div className="hl"></div>
        </div>

        {/* Main Video Container */}
        <div className="main-container">
          {videos.map((con) => (
            <div key={con.id} className="main-item">
              <img src={con.thn} alt={con.title} />
              <div className="details">
                <img src={con.profile} alt={con.owner} />
                <p>{con.title}</p>
              </div>
              <div className="info">
                <div className="name">
                  <p>{con.owner}</p>
                  <img
                    className="verified"
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
                    alt="Verified"
                  />
                </div>
                <div className="stats">
                  <div className="views">
                    <p>{con.veiw} views</p>
                  </div>
                  <div className="dot"></div>
                  <div className="time">
                    <p>{con.time} ago</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MainBody;
