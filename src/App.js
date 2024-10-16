
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import './components/styles/App.css';
import { Link } from 'react-router-dom';
import TaiKhoan from './components/TaiKhoan';
import GioHang from './components/GioHang';
import Capybara from './components/productDetails/Capybara';
import Conan from './components/productDetails/Conan';
import OnePiece from './components/productDetails/OnePiece';
import Disney from './components/productDetails/Disney';
import Panda from './components/productDetails/Panda';
import Pokemon from './components/productDetails/Pokemon';
import Sanrio from './components/productDetails/Sanrio';
import Doraemon from './components/productDetails/Doraemon';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductDetail />} />
          <Route path='/TaiKhoan' element={<TaiKhoan/>}/>
          <Route path='/GioHang' element={<GioHang/>}/>
          <Route path='/capybara' element={<Capybara/>}></Route>  
          <Route path='/conan' element={<Conan/>}></Route>  
          <Route path='/onepiece' element={<OnePiece/>}></Route>  
          <Route path='/disney' element={<Disney/>}></Route>  
          <Route path='/panda' element={<Panda/>}></Route>  
          <Route path='/pokemon' element={<Pokemon/>}></Route>  
          <Route path='/sanrio' element={<Sanrio/>}></Route>  
          <Route path='/doraemon' element={<Doraemon/>}></Route>  

        </Routes>
      </div>
    </Router>
  );
}

export default App;

