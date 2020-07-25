import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src="https://files.slack.com/files-pri/T0BFXMWMV-F01634B3M7Z/image.png" />

			<div className="ml-auto">
				<Link to="/sign_in">
					<span className="entry-button">INGRESA AQUI</span>
				</Link>
				{/* <Link to="/demo">
					<button className="productos">Productos</button>
				</Link> */}

				<Link to="/sign_up">
					<button className="listocare">CONTENIDO</button>
				</Link>

				<Link to="/demo">
					<button className="contactanos">Contactanos</button>
				</Link>
			</div>
		</nav>
	);
};
