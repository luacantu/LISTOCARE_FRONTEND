import React from "react";
import { Link } from "react-router-dom";
import { logo1 } from "../../img/logo1.png";

export const Navbar = () => {
	return (
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<img src="https://ibb.co/2WkTZLt" />

		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img src={logo1} width="30" height="30" alt="" />
			</a>

			<div className="ml-auto">
				<Link to="/sign_in">
					<span className="entry-button">INGRESA AQUI</span>
				</Link>
				{/* <Link to="/demo">
					<button className="productos">Productos</button>
				</Link> */}

				<Link to="/home">
					<button className="listocare">CUENTA ONLINE</button>
				</Link>

				<Link to="/demo">
					<button className="contactanos">Contactanos</button>
				</Link>
			</div>
		</nav>
	);
};
