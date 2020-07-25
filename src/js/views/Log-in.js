import React, { useState, Effect } from "react";

export const Log_in = () => {
	const [Email, setEmail] = useState(null);
	const [NombreDeUsuario, setNombreDeUsuario] = useState(null);
	const [Contraseña, setContraseña] = useState(null);
	return (
		<div className="imagen_fondo">
			<div className="pag ingreso">
				<div className="form">
					<form className="login-form text-center">
						<div className="row">
							<div className="col">
								<input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
							</div>
						</div>

						<div className="row">
							<div className="col">
								<input
									onChange={e => setNombreDeUsuario(e.target.value)}
									type="text"
									placeholder="Nombre de usuario"
								/>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<input
									onChange={e => setContraseña(e.target.value)}
									type="text"
									placeholder="Contraseña"
								/>
							</div>
						</div>

						<button type="button" className="btn btn-danger btn-lg px-5 my-3">
							create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
