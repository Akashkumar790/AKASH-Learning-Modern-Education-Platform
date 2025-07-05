// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
// import Home from './Components/Home/Home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//      <>
//      </>
    
//   )
// }

// export default App

// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <Header />
//       <Home />
//       <Footer /> */}
//       <h1>HEllo</h1>
//     </>
//   );
// }

// export default App;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header />
      <Home />
      <Footer />
      <h1>Hello</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </>
  );
}

export default App;

