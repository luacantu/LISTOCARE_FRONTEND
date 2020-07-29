import React, { useState, Effect } from "react";

export const Didagnostic = () => {
	const [id, setid] = useState(null);
	const [Patientid, setPatientid] = useState(null);
	const [DateTime, setDateTime] = useState(null);
	const [ReasonForAdmition, setReasonForAdmition] = useState(null);
	const [Status, setStatus] = useState(null);
	const [Symptoms, setSymptoms] = useState(null);
	const [Notes, setNotes] = useState(null);
	const [Prescription, setPrescription] = useState(null);

	return (
		<div className="Diagnostic_title">
			<h1>Diagnostico</h1>
			<div className="Diagnos_bg">
				<div className="Diagnostic d-flex justify-content-center ">
					<div className="d-flex justify-content-center w-50 my-3 bg-white rounded-lg">
						<form className="col-10">
							<div className="form-group">
								{/* <div className="col"> */}
								{/* <input
									className="form-control"
									onChange={e => setid(e.target.value)}
									type="text"
									placeholder="ID"
								/> */}
								{/* </div> */}
							</div>

							<div className="form group">
								{/* <div className="col-10"> */}
								<input
									className="form-control"
									onChange={e => setPatientid(e.target.value)}
									type="text"
									placeholder="Patient ID"
								/>
								{/* </div> */}
							</div>

							<div className="row">
								<div className="col">
									<input
										onChange={e => setDateTime(e.target.value)}
										type="text"
										placeholder="Fecha"
									/>
								</div>
							</div>

							<div className="form-group">
								{/* <div className="col"> */}
								<textarea
									onChange={e => setReasonForAdmition(e.target.value)}
									className="form-control"
									placeholder="Razon de admision"
								/>
								{/* </div> */}
							</div>

							<div className="form-group">
								<div className="col">
									<textarea
										className="form-control"
										onChange={e => setSymptoms(e.target.value)}
										type="text"
										placeholder="Syntomas"
									/>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<input onChange={e => setStatus(e.target.value)} type="text" placeholder="Status" />
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
							<button type="button" className="btn btn-danger btn-lg px-5 my-3">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
