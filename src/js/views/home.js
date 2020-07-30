import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.token ? (
				<div className="home_bg">
					<div className="home">
						<Link to="/staff_info">
							<div>REGISTRACION</div>
						</Link>
						<Link to="/patients">
							<div>PACIENTE</div>
						</Link>
						<Link to="/treatment">
							<div>TRATAMIENTO</div>
						</Link>
						<Link to="/Diagnostic">
							<div>DIAGNOSTICO</div>
						</Link>
					</div>
				</div>
			) : (
				<Redirect to={"/contactanos"} />
			)}
		</>
	);
};
