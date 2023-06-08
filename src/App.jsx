import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Checkout,
  Earphones,
  Headphones,
  Home,
  SingleProduct,
  Speakers,
} from './pages';
import { Error, Navbar, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='headphones' element={<Headphones />} />
        <Route path='headphones/:id' element={<SingleProduct />} />
        <Route path='earphones' element={<Earphones />} />
        <Route path='earphones/:id' element={<SingleProduct />} />
        <Route path='speakers' element={<Speakers />} />
        <Route path='speakers/:id' element={<SingleProduct />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
