import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { Box } from '@mui/material';
import Categories from './Components/Categories';
import Home from './Pages/Home';
import CategoryProducts from './Pages/CategoryProducts';
import { SearchProvider } from './Context/SearchContext';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import ProductDetails from './Pages/ProductDetails';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from './Pages/ProtectedRoute';
import ForgotPassword from "./Pages/ForgotPassword";
import Checkout from "./Pages/Checkout";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:name" element={<CategoryProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            } />

            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App; 
