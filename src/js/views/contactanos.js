import React from "react";
import { Link } from "react-router-dom";

export const Contactanos = () => {
	return (
		<div className="position-relative">
			<div className="card bg-dark text-white">
				<img
					src="https://files.slack.com/files-pri/T0BFXMWMV-F017QBEA59Q/march_1-v3.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title">Tu consultorio virtual durante la pandemia covid-19</h5>
					<p className="card-text">
						Listocare lo ayuda a brindar una exelente atencion al paiente mientras desarrolla una practica
						saludable.
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
