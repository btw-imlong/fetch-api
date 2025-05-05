import { Link } from "react-router";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/users">Users</Link>
  </nav>
);

export default Navbar;
