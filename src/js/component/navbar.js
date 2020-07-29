import React from "react";
import { Link } from "react-router-dom";
import { logo1 } from "../../img/logo1.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src="https://ibb.co/2WkTZLt" />

			<div className="ml-auto">
				<Link to="/sign_in">
					<span className="entry-button">Ingresa</span>
				</Link>
				{/* <Link to="/demo">
					<button className="productos">Productos</button>
				</Link>{" "} */}
				<Link to="/home">
					<button className="listocare">Cuenta Online</button>
				</Link>
				<Link to="/demo">
					<button className="contactanos">Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
