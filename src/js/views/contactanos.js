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
			<div className="somos" />
			<div className="servicios" />
			<div className="video" />
			{/* <div className="row py-4 px-3">
				<h2>lo que ofrecemos</h2>
			</div> */}
			<div id="contactw" className="container-fluid bg-grey">
				<h2 className="text-center">Contactanos</h2>
				<div id="contactus" className="row">
					<div id="texta" className="col-md-5 text-center">
						<p>Nuestro Servicio al cliente esta trabajando 24/7 para ti</p>
						<p>
							<span className="glyphicon glyphicon-map-marker" /> Miami, US
						</p>
						<p>
							<span className="glyphicon glyphicon-phone" /> +00 7868037648
						</p>
						<p>
							<span className="glyphicon glyphicon-envelope" /> hola@listocare.com
						</p>
					</div>
				</div>
			</div>

			<div className="contactanos-parent">
				<div className="content-section text-center" />

				<table className="table">
					<tr>
						<td className="Nombre">
							Nombre :<td />
							<input type="text" nombre="" />
						</td>
					</tr>
					<tr>
						<td className="Email">
							Email :<td />
							<input type="text" email="" />
						</td>
					</tr>
					<tr>
						<td className="Comment">
							Comment :<td />
							<input type="text" comment="" />
						</td>
					</tr>

					<Link to="/submit">
						<button className="submit">Enviar</button>
					</Link>
				</table>
			</div>
		</div>
	);
};
