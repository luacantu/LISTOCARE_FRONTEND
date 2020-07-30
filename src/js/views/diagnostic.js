import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Didagnostic = () => {
	const [id, setid] = useState(null);
	const [patientId, setPatientId] = useState(null);
	const [name, setName] = useState(null);
	const [covidTestResult, setCovidTestResult] = useState(null);
	const [date, setDate] = useState(null);
	const [admission, setAdmission] = useState(null);
	const [status, setStatus] = useState(null);
	const [symptoms, setSymptoms] = useState(null);
	const [notes, setNotes] = useState(null);
	const [prescription, setPrescription] = useState(null);
	const [totalCost, setTotalCost] = useState(null);
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [treatmentId, setTreatmentId] = useState(null);
	const [patients, setPatients] = useState([]);
	const [treatments, setTreatments] = useState([]);
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
	useEffect(
		() => {
			if (patientId != "-1") {
				for (let item of store.patients) {
					if (patientId == item.id) {
						setTreatments(item.treatments);
					}
				}
			}
		},
		[patientId, treatments, store.patients]
	);
	return (
		<>
			{store.token ? (
				<div className="Diagnostic_title">
					<h1>Diagnostico</h1>
					<div className="Diagnos_bg">
						<div className="Diagnostic d-flex justify-content-center ">
							<div className="d-flex justify-content-center w-50 my-3 bg-white rounded-lg">
								<form className="col-10">
									<div className="form-group">
										<div className="col-10">
											<select
												className="custom-select"
												id="patient"
												onChange={e => setPatientId(e.target.value)}>
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
									<div className="form-group">
										<div className="col-10">
											<select
												className="custom-select"
												id="patient"
												onChange={e => setTreatmentId(e.target.value)}>
												<option value="-1">{"Select treatment"}</option>
												{treatments.length > 0 &&
													patients.length > 0 &&
													treatments.map(treatment => {
														return (
															<option key={treatment.id} value={treatment.id}>
																{`${treatment.name}`}
															</option>
														);
													})}
											</select>
										</div>
									</div>

									<div className="row">
										<div className="col">
											<input
												className="form-control"
												onChange={e => setCovidTestResult(e.target.value)}
												type="text"
												placeholder="Covid19 Resultado"
											/>
										</div>
									</div>

									<div className="row">
										<div className="col">
											<input
												className="form-control"
												onChange={e => setDate(e.target.value)}
												type="text"
												placeholder="Fecha"
											/>
										</div>
									</div>

									<div className="form-group">
										{/* <div className="col"> */}
										<textarea
											onChange={e => setAdmission(e.target.value)}
											className="form-control"
											placeholder="Admision"
										/>
										{/* </div> */}
									</div>

									<div className="form-group">
										<div className="col">
											<textarea
												className="form-control"
												onChange={e => setSymptoms(e.target.value)}
												type="text"
												placeholder="Sintomas"
											/>
										</div>
									</div>

									<div className="row">
										<div className="col">
											<input
												className="form-control"
												onChange={e => setStatus(e.target.value)}
												type="text"
												placeholder="Status"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col">
											<textarea
												className="form-control"
												onChange={e => setNotes(e.target.value)}
												type="text"
												placeholder="Notas"
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="col">
											<textarea
												className="form-control"
												onChange={e => setPrescription(e.target.value)}
												type="text"
												placeholder="Prescripcion"
											/>
										</div>
									</div>

									<div className="row">
										<div className="col">
											<input
												className="form-control"
												onChange={e => setTotalCost(e.target.value)}
												type="text"
												placeholder="Costo Total"
											/>
										</div>
									</div>

									<button
										onClick={async () => {
											let success = await actions.diagnostic(
												patientId,
												treatmentId,
												name,
												date,
												admission,
												symptoms,
												covidTestResult,
												status,
												notes,
												prescription,
												totalCost
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
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</>
	);
};
