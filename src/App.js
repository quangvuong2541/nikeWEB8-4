import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailProductPage from './pages/DetailProduct/detailProductPage';
import CartPage from './pages/Cart/cartPage';
import NavBar from './component/NavBar/NavBar';
import UserOrder from './pages/User/UserOrder';
import UserFavorite from './pages/User/UserFavorite';
import UserProfile from './pages/User/UserProfile';
import ListProductPage from './pages/ListProduct/ListProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" caseSensitive={true} element={<HomePage />} />
            <Route path="/detailProduct/:id" element={<DetailProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user/favorite" element={<UserFavorite />} />



          </Route>
          <Route path="/listProduct" element={<ListProductPage />} />

          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/order" element={<UserOrder />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
