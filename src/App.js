import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailProductPage from './pages/DetailProduct/detailProductPage';
import CartPage from './pages/Cart/cartPage';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NavBar />}> */}
            <Route path="/" caseSensitive={true} element={<HomePage />} />
            <Route path="/detailProduct/:id" element={<DetailProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
