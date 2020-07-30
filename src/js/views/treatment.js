import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Treatment = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [id, setid] = useState(null);
	// const [Doctorid, setDoctorid] = useState(null);
	const [patientid, setPatientid] = useState(null);
	// const [Diagnosticid, setDiagnosticid] = useState(null);
	const [name, setName] = useState(null);
	const [date, setDate] = useState(null);
	const [hospital, setHospital] = useState(null);
	const [room, setRoom] = useState(null);
	const [status, setStatus] = useState(null);
	const [covidtest, setCovidtest] = useState(null);
	const [notes, setNotes] = useState(null);
	const [patients, setPatients] = useState([]);
	useEffect(
		() => {
			const getPatients = async () => {
				let success = await actions.getPatients();
				if (success) {
					setPatients(store.patients);
				} else {
					setPatients(["error..."]);
				}
			};
			if (patients.length <= 0) {
				getPatients();
			}
		},
		[patients]
	);
	return (
		<>
			{store.token ? (
				<div className="tratamiento_title">
					<h1>Tratamiento</h1>
					<div className="treatment">
						<div className="Diagnostic d-flex justify-content-center">
							<form className="treatment-form text-center bg-white w-50 my-3 rounded-lg">
								{/* <div className="d-flex justify-content-center w-50 my-3 bg-white rounded-lg"> */}
								{/* <div className="col-10">
								<div className="form-group" />

								<input className="form-control" type="text" value="ID" />
							</div>
						</div> */}

								{/* <div className="form-group">
							<div className="col-10">
								<input
									className="form-control"
									onChange={e => setDoctorid(e.target.value)}
									type="text"
									placeholder="ID del doctor"
								/>
							</div>
						</div> */}
								<div className="form-group">
									<div className="col-10">
										<select
											className="custom-select"
											id="patient"
											onChange={e => setPatientid(e.target.value)}>
											<option value="-1">{"Select patient"}</option>
											{patients.length > 0 &&
												patients.map(patient => {
													return (
														<option key={patient.id} value={patient.id}>
															{`${patient.first_name} ${patient.last_name}`}
														</option>
													);
												})}
										</select>
									</div>
								</div>
								{/* <div className="form-group">
							<div className="col-10">
								<input
									className="form-control"
									onChange={e => setPatientid(e.target.value)}
									type="text"
									placeholder="ID del paciente"
								/>
							</div>
						</div> */}
								{/* 
								<div className="form-group">
									<div className="col-10">
										<textarea
											className="form-control"
											onChange={e => setDiagnostic(e.target.value)}
											type="text"
											placeholder="Diagnostico"
										/>
									</div>
								</div> */}

								<div className="form-group">
									<div className="col-10">
										<input
											className="form-control"
											onChange={e => setDate(e.target.value)}
											type="text"
											placeholder="Fecha"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-10">
										<input
											className="form-control"
											onChange={e => setName(e.target.value)}
											type="text"
											placeholder="Nombre"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col">
										<textarea
											className="form-control"
											onChange={e => setStatus(e.target.value)}
											type="text"
											placeholder="Status"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-10">
										<input
											className="form-control"
											onChange={e => setHospital(e.target.value)}
											type="text"
											placeholder="Hospital"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-10">
										<input
											className="form-control"
											onChange={e => setCovidtest(e.target.value)}
											type="text"
											placeholder="Covidtest"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-10">
										<input
											className="form-control"
											onChange={e => setRoom(e.target.value)}
											type="text"
											placeholder="Habitacion"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-10">
										<input
											className="form-control"
											onChange={e => setNotes(e.target.value)}
											type="text"
											placeholder="Notes"
										/>
									</div>
								</div>

								<button
									onClick={async () => {
										let success = await actions.treatment(
											patientid,
											name,
											date,
											hospital,
											room,
											covidtest,
											status,
											notes
										);
										if (success) {
											history.push("/home");
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
			) : (
				<Redirect to="/login" />
			)}
		</>
	);
};
