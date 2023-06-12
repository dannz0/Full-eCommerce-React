import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CategoryPage, Checkout, Home, SingleProduct } from './pages';
import { Error, Navbar, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='headphones' element={<CategoryPage />} />
        <Route path='headphones/:id' element={<SingleProduct />} />
        <Route path='earphones' element={<CategoryPage />} />
        <Route path='earphones/:id' element={<SingleProduct />} />
        <Route path='speakers' element={<CategoryPage />} />
        <Route path='speakers/:id' element={<SingleProduct />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
