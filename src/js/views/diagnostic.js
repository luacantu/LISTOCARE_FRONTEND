import React from "react";

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
		<div className="Diagnostic">
			<div className="form">
				<form className="Diagnostic-form text-center">
					<div className="row">
						<div className="col">
							<input onChange={e => setid(e.target.value)} type="text" placeholder="ID" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setPatientid(e.target.value)} type="text" placeholder="Patient ID" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setDateTime(e.target.value)} type="text" placeholder="Date time" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input
								onChange={e => setReasonForAdmition(e.target.value)}
								type="text"
								placeholder="Reason for admition"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setSymptoms(e.target.value)} type="text" placeholder="Symptoms" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setStatus(e.target.value)} type="text" placeholder="Status" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setNotes(e.target.value)} type="text" placeholder="Notes" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input
								onChange={e => setPrescription(e.target.value)}
								type="text"
								placeholder="Prescription"
							/>
						</div>
					</div>
					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
