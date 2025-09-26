import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[#640d14] text-white p-4 flex justify-between items-center rounded-lg">
      <h1 className="text-2xl font-semibold">JewelryHub</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/sales" className="hover:underline">Sales</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
