import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <nav>
            <h1><a href="">Advice</a></h1>
            <ul className="links">
                <NavLink to="/" className="navlink">
                <li>Home</li>
                </NavLink>

                <NavLink to="/random" className="navlink">
                <li>Random Advice</li>
                </NavLink>

                <NavLink to="/search" className="navlink">
                <li>Search</li>
                </NavLink>

                <NavLink to="/about" className="navlink">
                <li>About Us</li>
                </NavLink>
            </ul>
        </nav>
    )
}