import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  </BrowserRouter>
);

