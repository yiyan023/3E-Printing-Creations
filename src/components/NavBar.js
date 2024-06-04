import { useEffect, useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { useNavigate, useLocation } from "react-router-dom";
import '../styling/navbar.css'
import Logo from '../assets/other/3e-logo.png'

const NavBar = () => {
	const [activeAbout, setActiveAbout] = useState(false);
	const [activeShop, setActiveShop ] = useState(false);
	const [activeRequest, setActiveRequest ] = useState(false)

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/about') {
			setActiveAbout(true);
		} else {
			setActiveAbout(false);
		}

		if (location.pathname === '/shop') {
			setActiveShop(true);
		} else {
			setActiveShop(false);
		}

		if (location.pathname === '/request') {
			setActiveRequest(true);
		} else {
			setActiveRequest(false);
		}
	}, [location.pathname])

	return (
		<div className='nav-bar'>
			<Navbar expand="lg">
				<Navbar.Brand href="/">
					<img src={Logo} alt="3E Printing Creations"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon" id="dropdown-icon"></span>
				</Navbar.Toggle>
				<div className="dropdown-links">
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className='nav-bar-links'>
							<Nav.Link to="/about" className={activeAbout ? "active navbar-link" : "navbar-link"} onClick={() => {navigate('/about')}}>About</Nav.Link>
							<Nav.Link to="/shop" className={activeShop ? 'active navbar-link' : 'navbar-link'} onClick={() => {navigate('/shop')}}>Shop</Nav.Link>
							<Nav.Link to="/request" className={activeRequest ? 'active navbar-link' : 'navbar-link'} onClick={() => {navigate('/request')}}>Request</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	)
}

export default NavBar