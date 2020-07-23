import React from "react";

export const Staff_info = () => {
	const [firstName, setFirstName] = useState(null);
	const [LastName, setLastName] = useState(null);
	const [id, setid] = useState(null);
	const [password, setPassword] = useState(null);
	const [specialty, setSpecialty] = useState(null);
	const [email, setEmail] = useState(null);
	const [badgeNumber, setBadgeNumber] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);

	return (
		<div className="staff_info">
			{/* <div className="col">
				<div className="row"> */}
			<div className="form">
				<form className="staff-form text-center">
					<div className="row">
						<div className="col">
							<input onChange={e => setFirstName(e.target.value)} type="text" placeholder="First name" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setLastName(e.target.value)} type="text" placeholder="Last name" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setid(e.target.value)} type="text" placeholder="ID" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setPassword(e.target.value)} type="text" placeholder="Password" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setSpecialty(e.target.value)} type="text" placeholder="Specialty" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input
								onChange={e => setBadgeNumber(e.target.value)}
								type="text"
								placeholder="Badge number"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input
								onChange={e => setPhoneNumber(e.target.value)}
								type="text"
								placeholder="Phone number"
							/>
						</div>
					</div>

					<button type="button" className="btn btn-danger btn-lg px-5 my-3">
						Submit
					</button>
				</form>
				{/* </div>
				</div> */}
			</div>
		</div>
	);
};
