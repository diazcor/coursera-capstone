import HamburgerMenu from 'react-hamburger-menu';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Image } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header>
            <Image id="header-logo" cursor={"pointer"} src={logo} alt="logo img" onClick={() => navigate("/")} />

            <nav>
                {isOpen &&
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservation</Link></li>
                        <li><Link to="/order-online">Order online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                }
            </nav>

            <HamburgerMenu
                isOpen={isOpen}
                menuClicked={() => setIsOpen(!isOpen)}
            />
        </header>
    );
};

export default Navbar;