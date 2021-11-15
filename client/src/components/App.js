import React from 'react'
import {Routes, Route} from 'react-router-dom';
import "../styles/App.css"
import Body from './Body'
import Cart from './CartPage/Cart';
import Header from './Header'

const App = () => {
  return (
    <div>
      <Header/>
      <div style={{padding:"0 60px"}}>
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" element={<Body/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App