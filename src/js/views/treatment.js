import React, { useState, Effect } from "react";

export const Treatment = () => {
	const [id, setid] = useState(null);
	const [Doctorid, setDoctorid] = useState(null);
	const [Patientid, setPatientid] = useState(null);
	const [Diagnosticid, setDiagnosticid] = useState(null);
	const [Name, setName] = useState(null);
	const [Status, setStatus] = useState(null);
	const [Adress, setAdress] = useState(null);
	const [PhoneNumber, setPhoneNumber] = useState(null);
	const [RoomNumber, setRoomNumber] = useState(null);
	const [Email, setEmail] = useState(null);
	const [StartDate, setStartDate] = useState(null);
	const [EndDate, setEndDate] = useState(null);
	return (
		<div className="treatment">
			<div className="form">
				<form className="treatment-form text-center">
					<div className="patients">
						<div className="form">
							<input type="text" value="ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setDoctorid(e.target.value)} type="text" placeholder="Doctor ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setPatientid(e.target.value)} type="text" placeholder="Patient ID" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input
								onChange={e => setDoctorid(e.target.value)}
								type="text"
								placeholder="Diagnostic ID"
							/>
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setStatus(e.target.value)} type="text" placeholder="Status" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setAdress(e.target.value)} type="text" placeholder="Adress" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input
								onChange={e => setPhoneNumber(e.target.value)}
								type="text"
								placeholder="Phone number"
							/>
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input
								onChange={e => setRoomNumber(e.target.value)}
								type="text"
								placeholder="Room number"
							/>
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setStartDate(e.target.value)} type="text" placeholder="Start date" />
						</div>
					</div>

					<div className="patients">
						<div className="form">
							<input onChange={e => setEndDate(e.target.value)} type="text" placeholder="End date" />
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
