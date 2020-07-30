import React from "react";
import { Link } from "react-router-dom";
import trns from "../../img/trns.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<img src={trns} className="logo" />
			<div className="ml-auto">
				<Link to="/sign_in">
					<span className="entry-button">Ingresa</span>
				</Link>
				<Link to="/home">
					<button className="listocare">Cuenta Online</button>
				</Link>
				<Link to="/demo">
					<button className="contactanos">Somos</button>
				</Link>
				<Link to="/log-in">
					<button className="logout">Logout</button>
				</Link>
			</div>
		</nav>
	);
};
