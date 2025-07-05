// import React, { useState } from 'react'

// function Github() {
//  const [data,setdata]=useState([])
//     useState(()=>{
//         fetch('https://api.github.com/users/Akashkumar790')
//         .then(Response=>Response.json())
//         .then(data=>{
//             console.log(data)
//             setdata(data)
//         })
//     })
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white' >Github followers :{data.followers}
//       <img src={data.avatar_url} alt="image" />
//       <span className='text-center m-4 bg-gray-600 text-white' >Github Repository :{data.public_repos} </span>

//      </div>
      
//   )
// }

// export default Github











// import React, { useState, useEffect } from 'react';

// function Github() {
//   const [data, setData] = useState(null);
//   const username = 'Akashkumar790'; // You can replace this with any GitHub username

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   if (!data) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Loading GitHub data...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
//         <img
//           src={data.avatar_url}
//           alt="GitHub Avatar"
//           className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500"
//         />
//         <h1 className="text-2xl font-bold mt-4 text-gray-800">{data.name}</h1>
//         <p className="text-sm text-gray-500 mb-4">@{data.login}</p>

//         {data.bio && <p className="text-gray-600 italic mb-4">{data.bio}</p>}

//         <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 my-4">
//           <div>
//             <span className="font-semibold">Followers:</span> {data.followers}
//           </div>
//           <div>
//             <span className="font-semibold">Following:</span> {data.following}
//           </div>
//           <div>
//             <span className="font-semibold">Repositories:</span> {data.public_repos}
//           </div>
//           <div>
//             <span className="font-semibold">Location:</span> {data.location || 'N/A'}
//           </div>
//         </div>

//         <a
//           href={data.html_url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
//         >
//           View GitHub Profile
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Github;

import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);
  const username = 'Akashkumar790';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-700">
        Loading GitHub data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
            <p className="text-gray-500 text-sm">@{data.login}</p>
            {data.bio && <p className="text-gray-700 italic mt-2">{data.bio}</p>}
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline text-sm"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        <hr className="my-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <p><span className="font-semibold">Followers:</span> {data.followers}</p>
          <p><span className="font-semibold">Following:</span> {data.following}</p>
          <p><span className="font-semibold">Public Repos:</span> {data.public_repos}</p>
          <p><span className="font-semibold">Public Gists:</span> {data.public_gists}</p>
          <p><span className="font-semibold">Company:</span> {data.company || 'N/A'}</p>
          <p><span className="font-semibold">Location:</span> {data.location || 'N/A'}</p>
          <p>
            <span className="font-semibold">Twitter:</span>{' '}
            {data.twitter_username ? (
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                @{data.twitter_username}
              </a>
            ) : (
              'N/A'
            )}
          </p>
          <p>
            <span className="font-semibold">Blog:</span>{' '}
            {data.blog ? (
              <a
                href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {data.blog}
              </a>
            ) : (
              'N/A'
            )}
          </p>
          <p><span className="font-semibold">Email:</span> {data.email || 'N/A'}</p>
          <p><span className="font-semibold">Hireable:</span> {data.hireable ? 'Yes' : 'No / Unknown'}</p>
          <p><span className="font-semibold">Account Type:</span> {data.type}</p>
          <p><span className="font-semibold">Created At:</span> {new Date(data.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Github;
