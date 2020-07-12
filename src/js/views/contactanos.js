import React from "react";

export const Contactanos = () => {
	return (
		<div className="position-relative">
			<div className="card bg-dark text-white">
				<img
					src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/itCjTBE/blue-abstract-moving-flowing-waves-on-white-background-blurred-smooth-design-video-animation-ultra-hd-4k-3840x2160_rffdhgnp_thumbnail-1080_05.png"
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
						<button className="Registrate">Registrate</button>
					</p>
				</div>
			</div>
			<div className="phone" />
			<div className="lastdiv" />
			<p className="info-p">
				<h1>Contactanos</h1>
			</p>
			<p className="miniparag">
				<h2>
					La tecnologia es el corazon de nuestro trabajo,nuestro compromiso hacer la atencion medica mas
					accesible
				</h2>
			</p>
			<table className="table">
				<tr>
					<td className="EMAIL">
						EMAIL :<td />
						<input type="text" email="" />
					</td>
				</tr>
				<tr>
					<td className="Last_name">Last Name :</td>
					<td>
						<input type="text" last_name="" />
					</td>
				</tr>
			</table>
			<button className="Submit">Submit</button>
		</div>
	);
};
