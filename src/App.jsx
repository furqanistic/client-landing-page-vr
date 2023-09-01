import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
