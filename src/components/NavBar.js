import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const navigate = useNavigate();

	const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

	return (
		<div className='nav-bar'>
			<Navbar expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<Nav className='nav-bar-links'>
						<Nav.Link to="/about" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => {onUpdateActiveLink('about'); navigate('/about')}}>About</Nav.Link>
						<Nav.Link to="/shop" className={activeLink === 'shop' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('shop'); navigate('/shop')}}>Shop</Nav.Link>
						<Nav.Link to="/request" className={activeLink === 'request' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('request'); navigate('/request')}}>Request</Nav.Link>
					</Nav>
				</Navbar.Toggle>
			</Navbar>
		</div>
	)
}

export default NavBar