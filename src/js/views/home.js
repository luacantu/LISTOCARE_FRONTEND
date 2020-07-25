import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="home_bg">
			<div className="home">
				<Link to="/staff_info">
					<div>INFORMACION DEL MEDICO</div>
				</Link>
				<Link to="/treatment">
					<div>TRATAMINETO</div>
				</Link>
				<Link to="/patients">
					<div>PACIENTE</div>
				</Link>

				<Link to="/Diagnostic">
					<div>DIAGNOSTICO</div>
				</Link>
			</div>
		</div>
	);
};
