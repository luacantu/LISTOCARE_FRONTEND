import React, { useState, Effect, useContext } from "react";
import { Context } from "../store/appContext";
export const Log_in = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState(null);
	const [nombreDeUsuario, setNombreDeUsuario] = useState(null);
	const [contraseña, setContraseña] = useState(null);
	return (
		<div className="log_bg">
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

							<button
								onClick={async () => actions.login(email, contraseña)}
								type="button"
								className="btn btn-danger btn-lg px-5 my-3">
								create
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
