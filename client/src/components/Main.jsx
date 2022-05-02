import React, { useState, useRef } from 'react'
import { Routes, Route } from "react-router-dom"

import Header from './Header'
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Market from '../pages/Market';
import Bank from '../pages/Bank';


const Main = ({ startLoader, endLoader }) => {
 
  const ref = useRef(null)
  const [count, setCount] = useState(0) 
  return (
    <div>
      <Header startLoader={() => startLoader()} endLoader={() => endLoader()} />
      <Routes>
        <Route exact path="/explore" element={<Explore/>} />
        <Route path="/market" element={<Market/>} />
        <Route path="/bank" element={<Bank/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default Main