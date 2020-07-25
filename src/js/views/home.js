import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="home">
			<Link to="/">
				<div>INFORMACION DEL MEDICO</div>
			</Link>
			<Link to="/">
				<div>TRATAMINETO</div>
			</Link>
			<Link to="/">
				<div>PACIENTE</div>
			</Link>

			<Link to="/">
				<div>DIAGNOSTICO</div>
			</Link>
		</div>
	);
};
