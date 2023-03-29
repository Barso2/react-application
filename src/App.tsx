
import React, { ReactNode } from 'react';

import './App.css';
// import { Life } from './components/Life';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Customers } from './components/pages/Customers';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { Products } from './components/navigator/Products';
import { Dairy } from './components/pages/Dairy';
import { Bread } from './components/pages/Bread';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { Layout } from './components/navigator/Layout';


function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Layout />}>
                         <Route index element={<Home />} />
                         <Route path='customers' element={<Customers />} />
                         <Route path='shoppingCart' element={<ShoppingCart />} />
                         <Route path='orders' element={<Orders />} />
                         <Route path='products' element={<Products />}>
                              <Route path='dairy' element={<Dairy />} />
                              <Route path='bread' element={<Bread />} />
                         </Route>
                    </Route>
                    <Route path='/*' element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     )
}
export default App;
