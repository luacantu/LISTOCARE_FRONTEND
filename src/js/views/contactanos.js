import React from "react";
import { Link } from "react-router-dom";
import march1 from "../../img/march1-v3.jpg";

export const Contactanos = () => {
	return (
		<div className="position-relative">
			<div className="card bg-dark text-white">
				<img src={march1} className="card-img" alt="..." />
				<div className="card-img-overlay">
					<h1 className="card-title">Soluciones tecnológicas</h1>
					<h5 className="card-title">para Médicos</h5>
					<p className="card-text">
						Comienza la transformacion digital de tu consulta medica. Crea tu propia web de servicios para
						tus pacientes y clientes.
					</p>
					<p className="card-text">
						<Link to="/sign_up">
							<button className="Registrate">Registrate</button>
						</Link>
					</p>
				</div>
			</div>
			<div className="phone" />
			<div className="lastdiv" />
			<div className="servicios" />
			<div className="somos" />
			{/* <div className="row py-4 px-3">
				<h2>lo que ofrecemos</h2>
			</div> */}
			<div className="contactanos-parent">
				<div className="left-side">
					<p className="info-p">
						<h1>Contactanos</h1>
					</p>
					<p className="miniparag">
						<h2>
							La tecnologia es el corazon de nuestro trabajo,nuestro compromiso hacer la atencion medica
							mas accesible
						</h2>
					</p>
				</div>
				<table className="table">
					<tr>
						<td className="EMAIL">
							EMAIL :<td />
							<input type="text" email="" />
						</td>
					</tr>
					<tr>
						<td className="Last_name">Comment :</td>

						<input type="text" className="last_name_input" />
					</tr>
				</table>
			</div>
			<button className="Submit">Submit</button>
		</div>
	);
};
