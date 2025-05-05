import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/users" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
