import { useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
//dependencies
import LoadingBar from 'react-top-loading-bar'
import {
  Routes,
  Route,
} from "react-router-dom";

//components
import Header from './components/Header'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Market from './pages/Market';
import Bank from './pages/Bank';
import Profile from "./pages/Profile"

import Main from "./components/Main"


// const Main = () => {
//   return (
//     <>
//       <Header startLoader={() => ref.current.continuousStart()} endLoader={() => ref.current.complete()} />
//       <div className="main-section h-full bg-white mt-16">
//         <Route path="/home" element={<Home />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/market" element={<Market />} />
//         <Route path="/bank" element={<Bank />} />
//       </div>
//     </>
//   )
// }


function App() {
  
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  return (
    <div className="App h-full">
      <LoadingBar color='#3f76eb' ref={ref} />

      <div className="main-section h-full bg-white mt-16">

        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route  path="/*" element={<Main startLoader={() => ref.current.continuousStart()} endLoader={() => ref.current.complete()} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
