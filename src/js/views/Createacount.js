import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect, useHistory } from "react-router-dom";
export const Createacount = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [userName, setUserName] = useState(null);
	const [password, setPassword] = useState(null);
	const [email, setEmail] = useState(null);
	const [badgeNumber, setBadgeNumber] = useState(null);
	const history = useHistory();

	return (
		<div className="createacc_title">
			<h1>Create account</h1>
			<div className="background-img">
				<div className="login-page">
					<div className="form">
						<form className="login-form text-center">
							<input onChange={e => setName(e.target.value)} type="text" placeholder="Nombre" />

							<input onChange={e => setLastName(e.target.value)} type="text" placeholder="Apellido" />

							<input
								onChange={e => setUserName(e.target.value)}
								type="text"
								placeholder="Nombre de usuario"
							/>
							<input onChange={e => setPassword(e.target.value)} type="text" placeholder="Contraseña" />
							<input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
							<input
								onChange={e => setBadgeNumber(e.target.value)}
								type="text"
								placeholder="Numero de codigo"
							/>
							<button
								onClick={async () => {
									let success = await actions.doctorSignUp(name, lastName, userName, email, password);
									if (success) {
										history.push("/sign_in");
									} else {
										alert("something went wrong, please try again");
									}
								}}
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
