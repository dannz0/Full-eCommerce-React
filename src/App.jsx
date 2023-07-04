import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  CategoryPage,
  Checkout,
  Home,
  ProtectedRoute,
  SingleProduct,
} from './pages';
import { Error, Navbar, Footer } from './components';
import ScrollToTop from './util/ScrollToTop';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from './slices/globalSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <ToastContainer position='top-center' theme='light' autoClose={1000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='headphones' element={<CategoryPage />} />
        <Route path='headphones/:id' element={<SingleProduct />} />
        <Route path='earphones' element={<CategoryPage />} />
        <Route path='earphones/:id' element={<SingleProduct />} />
        <Route path='speakers' element={<CategoryPage />} />
        <Route path='speakers/:id' element={<SingleProduct />} />
        <Route
          path='checkout'
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
