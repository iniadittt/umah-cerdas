import React from'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Kuisioner from './pages/Kuisioner';
import Kuisioner2 from './pages/Kuisioner2';
import Kuisioner3 from './pages/Kuisioner3';
import KuisionerKrisa from './pages/KuisionerKrisa';
import Support from './pages/Support';
import Login from './pages/Login';
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/kuisioner/1" element={<Kuisioner />} />
        <Route path="/kuisioner/2" element={<Kuisioner2 />} />
        <Route path="/kuisioner/3" element={<Kuisioner3 />} />
        <Route path="/kuisioner/4" element={<KuisionerKrisa />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}