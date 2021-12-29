
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import Users from './Components/Users';

function App() {
    return (
<div>
  <Routes>
      
      <Route path='/' element={<Users  />} >  </Route>
      <Route path='/Details/:id' element ={<Details/>}  > </Route>

  </Routes>
        <Users/>   
        </div>
    )
}

export default App
