import { useState } from 'react'
import Todo from './component/Todo' 
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Register from './component/Register'
import LogIn from './component/LogIn'
function App() {
  return (
    <div className="containr">
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Register/>}></Route>
      <Route path='/LogIn'element={<LogIn/>}></Route>
      <Route path='/Todo'element={<Todo/>}></Route>

      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
