import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex space-x-4">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
        </nav>
    );
};

export default Navbar;