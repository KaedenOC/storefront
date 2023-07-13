import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Storefront from './Components/Storefront'
import ShoppingCart from './Components/ShoppingCart';
import ProductDetails from './Components/ProductDetails';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='content'>
          <Header />
          <Routes>
            <Route path="/" element={<Storefront />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
