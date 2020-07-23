import React from "react";

export const Patients = () => {
	return (
		<div className="patients">
			<div className="form">
				<form className="Patient-form text-center">
					<div className="row">
						<div className="col">
							<input type="text" placeholder="ID" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Date" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="First name" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Last name" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Birthday" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="gender" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Adress" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Phone number" />
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input type="text" placeholder="Identification number" />
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
