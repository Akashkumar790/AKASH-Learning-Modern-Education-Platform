// import { StrictMode } from 'react'
// //import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Layout from './Layout.jsx'  
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Components/Home/Home.jsx'
// import About from './Components/about/About.jsx'
// import Contact from './Components/contact/Contact.jsx'


// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//          element:<Home/>
//       },
//       {
//         path:"/",
//         element: <Home/>
//       },
//       {
//         path:"/About",
//         element: <About/>
//       },
//       {
//         path:"/contact",
//         element: <Contact/>
//       },
//     ]
//   }
  
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//  <RouterProvider router={router}/>
//   </React.StrictMode>,
// )









import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Pages & Layout
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/about/About.jsx'; // make sure folder is 'About'
import Contact from './Components/contact/Contact.jsx'; // make sure folder is 'Contact'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import User from './Components/User/User.jsx';
import Course from './Components/Course/Cource.jsx';
import Github from './Components/Github/Github.jsx';
//import User from './Components/User/User.jsx';

// Router Setup
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='courses' element={<Course />} />
      <Route path='Github' element={<Github />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
    </Route>
  )
);

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
