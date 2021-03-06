import React, { useState, useEffect, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Patients = () => {
	const [id, setid] = useState(null);
	const [Fecha, setFecha] = useState(null);
	const [Nombre, setNombre] = useState(null);
	const [email, setEmail] = useState(null);
	const [Apellido, setApellido] = useState(null);
	const [FechaDeNacimiento, setFechaDeNacimiento] = useState(null);
	const [Genero, setGenero] = useState(null);
	const [Direccion, setDireccion] = useState(null);
	const [NumeroTelefonico, setNumeroTelefonico] = useState(null);
	const [NumeroDeIdentificacion, setNumeroDeIdentificacion] = useState(null);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<>
			{store.token ? (
				<div className="patient_title">
					<h1>Paciente</h1>
					<div className="patient_bg">
						<div className="Diagnostic d-flex justify-content-center">
							<div className="d-flex justify-content-center w-50 my-3 bg-white rounded-lg">
								<form className="col-8">
									{/* <div className="form-group">
                                    

                                    <input
                                        className="form-control"
                                        onChange={e => setid(e.target.value)}
                                        type="text"
                                        placeholder="ID"
                                    />
                                </div> */}

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setFecha(e.target.value)}
												type="text"
												placeholder="Fecha"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setNombre(e.target.value)}
												type="text"
												placeholder="Nombre"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setApellido(e.target.value)}
												type="text"
												placeholder="Apellido"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setFechaDeNacimiento(e.target.value)}
												type="text"
												placeholder="Fecha de nacimiento"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setGenero(e.target.value)}
												type="text"
												placeholder="Genero"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setDireccion(e.target.value)}
												type="text"
												placeholder="Direccion"
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setEmail(e.target.value)}
												type="text"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setNumeroTelefonico(e.target.value)}
												type="text"
												placeholder="Numero de telefono"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col-10">
											<input
												className="form-control"
												onChange={e => setNumeroDeIdentificacion(e.target.value)}
												type="text"
												placeholder="Numero de Identificacion"
											/>
										</div>
									</div>

									<button
										onClick={async () => {
											let success = await actions.Patients(
												Fecha,
												Nombre,
												Apellido,
												FechaDeNacimiento,
												Genero,
												Direccion,
												email,
												NumeroTelefonico,
												NumeroDeIdentificacion
											);
											if (success) {
												history.replace("/home");
											} else {
												alert("something went wrong, please try again");
											}
										}}
										type="button"
										className="btn btn-danger btn-lg px-5 my-3">
										Aceptar
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</>
	);
};
