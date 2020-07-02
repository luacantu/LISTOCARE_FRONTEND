import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src="https://files.slack.com/files-pri/T0BFXMWMV-F0166GYAA5A/image_from_ios.png" />

			<div className="ml-auto">
				<Link to="/">
					<span className="entry-button">INGRESA AQUI</span>
				</Link>
				<Link to="/demo">
					<button className="productos">productos</button>
				</Link>

				<Link to="/demo">
					<button className="listocare">que es listocare</button>
				</Link>

				<Link to="/demo">
					<button className="contactanos">contactanos</button>
				</Link>
			</div>
		</nav>
	);
};
