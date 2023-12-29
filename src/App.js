import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

import { ThemeProvider } from 'styled-components';

const App = () => {

  const theme = {
    colors: {
      headerBg : '#d0d0d0',
      helper : '#ffc107'
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        
        <Router>
          <GlobalStyle/>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>

      </ThemeProvider>
    </>
  );
}

export default App