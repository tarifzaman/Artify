import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/explore">Explore Artworks</NavLink></li>
        {user && <>
            <li><NavLink to="/add-artwork">Add Artwork</NavLink></li>
            <li><NavLink to="/my-gallery">My Gallery</NavLink></li>
            <li><NavLink to="/my-favorites">My Favorites</NavLink></li>
        </>}
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg px-4 md:px-8">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold text-primary">ARTIFY</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img src={user?.photoURL} className="w-10 h-10 rounded-full border-2 border-primary" alt="User" />
                        </div>
                        <button onClick={logOut} className="btn btn-sm btn-outline btn-error">Logout</button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
                        <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;