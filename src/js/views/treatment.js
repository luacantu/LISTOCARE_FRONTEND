import React, { useState, Effect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

export const Treatment = () => {
	const [id, setid] = useState(null);
	const [Doctorid, setDoctorid] = useState(null);
	const [Patientid, setPatientid] = useState(null);
	const [Diagnosticid, setDiagnosticid] = useState(null);
	const [Name, setName] = useState(null);
	const [Date, setDate] = useState(null);
	const [Hospital, setHospital] = useState(null);
	const [Room, setRoom] = useState(null);
	const [Status, setStatus] = useState(null);
	const [Covidtest, setCovidtest] = useState(null);
	const [Notes, setNotes] = useState(null);
	return (
		<div className="tratamiento_title">
			<h1>Tratamiento</h1>
			<div className="treatment">
				<div className="Diagnostic d-flex justify-content-center">
					<form className="treatment-form text-center bg-white">
						<div className="d-flex justify-content-center w-50 my-3 bg-white rounded-lg">
							<div className="col-10">
								<div className="form-group" />

								<input className="form-control" type="text" value="ID" />
							</div>
						</div>

						<div className="form-group">
							<div className="col-10">
								<input
									className="form-control"
									onChange={e => setDoctorid(e.target.value)}
									type="text"
									placeholder="ID del doctor"
								/>
							</div>
						</div>

						<div className="form-group">
							<div className="col-10">
								<input
									className="form-control"
									onChange={e => setPatientid(e.target.value)}
									type="text"
									placeholder="ID del paciente"
								/>
							</div>
						</div>

						<div className="form-group">
							<div className="col-10">
								<textarea
									className="form-control"
									onChange={e => setDiagnostic(e.target.value)}
									type="text"
									placeholder="Diagnostico"
								/>
							</div>
						</div>

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
									Doctorid,
									Patientid,
									Diagnosticid,
									name,
									date,
									hospital,
									room,
									covidtest,
									status,
									notes
								);
								if (success) {
									history.push("/sign_in");
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
	);
};
