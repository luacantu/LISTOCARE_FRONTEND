import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
export const Log_in = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState(null);
	const [nombreDeUsuario, setNombreDeUsuario] = useState(null);
	const [contraseña, setContraseña] = useState(null);
	const history = useHistory();
	return (
		<div className="Log_title">
			<h1>Log in</h1>
			<div className="log_bg">
				<div className="imagen_fondo">
					<div className="pag ingreso">
						<div className="form">
							<form className="login-form text-center">
								<div className="row">
									<div className="col">
										<input
											onChange={e => setEmail(e.target.value)}
											type="text"
											placeholder="Email"
										/>
									</div>
								</div>

								{/* <div className="row">
									<div className="col">
										<input
											onChange={e => setNombreDeUsuario(e.target.value)}
											type="text"
											placeholder="Nombre de usuario"
										/>
									</div>
								</div> */}

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
									onClick={async () => {
										let success = await actions.login(email, contraseña);
										if (success) {
											history.push("/home");
										} else {
											alert("Por favor, intente de nuevo.");
										}
									}}
									type="button"
									className="btn btn-danger btn-lg px-5 my-3">
									Log in
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
