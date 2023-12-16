import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Predict from './pages/Predict'
function app(){
  return (
    <div className="mx-auto   h-[88vh]">
     <Routes>
        <Route index element={<Home/>}/>
        <Route path="/predict" element={<Predict/>}/>
     </Routes>
    </div>
  );
};  

export default app;


