import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BillPage from './pages/BillPage';
import CustomerPage from './pages/CustomerPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/bills" element={<BillPage/>}/>
        <Route path="/customers" element={<CustomerPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
